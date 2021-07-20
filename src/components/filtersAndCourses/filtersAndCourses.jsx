import React from 'react';
import {FiltersConnected} from 'components/filters/filters';
import {CoursesConnected} from 'components/courses/courses';

import {Grid} from 'components/grid/grid';

import s from './filtersAndCourses.module.scss';

export const FiltersAndCourses = () => {
    return (
        <main className={s.main}>
            <Grid>
                <FiltersConnected />
                <CoursesConnected />
            </Grid>
        </main>
    );
};
