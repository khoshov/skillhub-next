import React from 'react';
import {useRouter} from 'next/router';

import s from './onlyFreeCheckbox.module.scss';

export const OnlyFreeCheckbox = ({
    isChecked,
    setFilter,
    labelText = 'Только бесплатные',
    isDisabled = false,
}) => {
    const {push, query} = useRouter();
    return (
        <label className={s.container}>
            <input
                type="checkbox"
                disabled={isDisabled}
                checked={isChecked}
                onChange={() => {
                    setFilter((prevState) => ({...prevState, isOnlyFree: !isChecked}));
                    push({
                        query: {
                            ...query,
                            isOnlyFree: !isChecked,
                        },
                    });
                }}
                className={s.input}
            />
            <span className={s.labelText}>{labelText}</span>
        </label>
    );
};
