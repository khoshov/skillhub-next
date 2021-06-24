import React from 'react';

import s from './languageMobile.module.scss';

export const LanguageMobile = () => {
    return (
        <div className={s.languageMobileWrapper}>
            <button className={s.languageMobileItem} onClick={() => alert('Russian')}>
                Ru
            </button>
            <button className={s.languageMobileItem} onClick={() => alert('English')}>
                En
            </button>
        </div>
    );
};
