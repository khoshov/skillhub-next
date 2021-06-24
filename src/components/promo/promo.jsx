import React from 'react';

import s from './promo.module.scss';

export const Promo = () => {
    return (
        <section className={s.promo}>
            <div className={s.promoWrapper}>
                <div className={s.promoTextColumn}>
                    <h1 className={s.promoTextTitle}>Сравниваем курсы в сфере IT</h1>
                    <p className={s.promoTextDescription}>
                        Чтобы вы с лёгкостью могли подобрать самый подходящий курс.
                    </p>
                </div>
                <div className={s.promoImgColumn}>
                    <img className={s.promoImg} src="./images/1.png" alt="promo" />
                </div>
            </div>
        </section>
    );
};
