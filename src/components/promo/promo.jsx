import React from 'react';
import {Button} from '../buttons/button';

import s from './promo.module.scss';

export const Promo = () => {
    return (
        <section className={s.promo}>
            <div className={s.promoWrapper}>
                <div className={s.promoTextColumn}>
                    <h1 className={s.promoTextTitle}>Сравниваем <br/> онлайн-курсы <br/> в сфете IT</h1>
                    <p className={s.promoTextDescription}>
                        Чтобы вы, с лёгкостью могли подобрать <br/>
                        для себя лучший курс из сотни предложений.
                    </p>
                    <Button/>
                </div>
                <div className={s.promoImgColumn}>
                    <img className={s.promoImg} src="./images/1.png" alt="promo" />
                </div>
            </div>
        </section>
    );
};
