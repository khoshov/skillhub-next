import React, {useState} from 'react';
import {FiltersConnected} from 'components/filters/filters';

import {Grid} from 'components/grid/grid';

import s from './filtersAndCourses.module.scss';

export const FiltersAndCourses = ({
    name = 'Все',
    isOnlyFree = false,
    durationFrom = '',
    durationTo = '',
    priceFrom = '',
    priceTo = '',
    format = '',
    level = '',
}) => {
    return (
        <main className={s.main}>
            <Grid>
                <FiltersConnected />
            </Grid>
        </main>
    );
};
