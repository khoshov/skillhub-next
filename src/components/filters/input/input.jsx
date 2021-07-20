import React, {useState} from 'react';
import {useRouter} from 'next/router';

import s from './input.module.scss';

export const Input = ({name, placeholder, setFilter, selectedValue}) => {
    const {push, query} = useRouter();
    const [value, setValue] = useState(selectedValue);

    const changeValue = ({target}) => {
        if (target.value === query[name] || (!query[name] && target.value === '')) return;
        setFilter((prevState) => ({...prevState, [target.name]: target.value.replace(/\D/g, '')}));
        push({
            query: {
                ...query,
                [target.name]: value,
            },
        });
        if (target.value) {
            push({
                query: {
                    ...query,
                    [target.name]: value,
                },
            });
        } else {
            const mutateQuery = {...query};
            delete mutateQuery[target.name];
            push({
                query: mutateQuery,
            });
        }
    };

    return (
        <div className={s.container}>
            <input
                name={name}
                value={value}
                onKeyPress={(event) => {
                    if (event.key === 'Enter') changeValue(event);
                }}
                onBlur={changeValue}
                onChange={({target}) => {
                    setValue(target.value);
                }}
                placeholder={placeholder}
                className={s.input}
                type="number"
                min="1"
            />
        </div>
    );
};
