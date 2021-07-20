import React from 'react';

import {Grid} from 'components/grid/grid';
import {Promo} from 'components/promo/promo';

import s from './main.module.scss';

export const Main = () => {

    return (
        <main className={s.main}>
            <Grid>
                <Promo />
            </Grid>
        </main>
    );
};
