import React, {useState, useRef} from 'react';
import classNames from 'classnames';
import {useOutsideAlerter} from 'libs/hooks';
import {useRouter} from 'next/router';

import s from './filterDropdown.module.scss';

export const FilterDropdown = ({items = [], setFilter, placeholder, name, selectedValue, byId}) => {
    const [isOpen, setOpen] = useState(false);
    const {push, query} = useRouter();
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, setOpen);

    const getSelectedValue = (valueOrId) =>
        items.find((item) => item[valueOrId] === selectedValue) || {placeholder: ''};

    const isId = byId ? 'id' : 'value';

    return (
        <div className={classNames(s.wrapper, {[s.active]: isOpen})} ref={wrapperRef} tabIndex={0}>
            <div tabIndex={0} className={s.header} role="button" onClick={() => setOpen(!isOpen)}>
                <div className={s.title}>
                    <p>
                        {Boolean(selectedValue) ? getSelectedValue(isId).placeholder : placeholder}
                    </p>
                </div>
                <div className={classNames(s.icon, {[s.revert]: isOpen})} />
            </div>
            <ul className={classNames(s.list, {[s.opened]: isOpen})}>
                {items.map((item) => (
                    <li className={s.item} key={item.id}>
                        <button
                            type="button"
                            onClick={() => {
                                setFilter({[name]: byId ? item.id : item.value});
                                setOpen(false);
                                push({
                                    query: {
                                        ...query,
                                        [name]: byId ? item.id : item.value,
                                    },
                                });
                            }}
                        >
                            <span
                                className={classNames({
                                    [s.selected]:
                                        item.placeholder === getSelectedValue(isId).placeholder,
                                })}
                            >
                                {item.placeholder}
                            </span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
