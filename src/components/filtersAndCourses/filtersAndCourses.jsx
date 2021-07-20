import React, {useState} from 'react';

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
    const [filterState, setFilter] = useState({
        name,
        isOnlyFree,
        durationFrom,
        durationTo,
        priceFrom,
        priceTo,
        format,
        level,
    });
    const [categoryId, setCategoryId] = useState('');

    return (
        <main className={s.main}>
            <Grid>
            </Grid>
        </main>
    );
};
