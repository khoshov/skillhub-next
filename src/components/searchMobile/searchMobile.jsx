import React from 'react';

import s from './searchMobile.module.scss';

export const SearchMobile = () => {
    return <input className={s.searchMobile} type="text" placeholder="Поиск" />;
};
