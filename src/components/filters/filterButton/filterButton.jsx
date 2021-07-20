import React, {useEffect} from 'react';
import classNames from 'classnames';
import {useRouter} from 'next/router';

import s from './filterButton.module.scss';

export const FilterButton = ({name, isActive, count, setFilter, setCategoryId, id}) => {
    const {push, query} = useRouter();

    useEffect(() => {
        if (isActive) setCategoryId(id);
        if (query.name) {
            setFilter({name: query.name.replaceAll(/_/gi, ' ')});
        } else {
            setFilter({name: 'Все'});
        }
    }, [id, isActive, query.name]);

    return (
        <button
            className={classNames(s.button, {[s.active]: isActive})}
            onClick={() => {
                setFilter({name});
                setCategoryId(id);
                push({
                    pathname: query.category,
                    query: {
                        name: name.replaceAll(/ /gi, '_'),
                    },
                });
            }}
        >
            {name} {Boolean(count) && `(${count})`}
        </button>
    );
};
