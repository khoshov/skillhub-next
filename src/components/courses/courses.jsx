import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';

import {Course} from 'components/course/course';
import {PaginationBottom} from 'components/paginationBottom/paginationBottom';

import s from './courses.module.scss';
import {connect} from 'react-redux';
import {setFilters} from 'reducers/filters/filters';
import {setCourses} from 'reducers/courses/courses';

const list = [
    'Назваине курса',
    'Школа',
    'Формат',
    'Уровень',
    'Старт',
    'Длительность',
    'Стоимость, ₽',
];

const MAP = {
    online: '1',
    offline: '2',
};

const getValue = (value, valueName, completedValue) =>
    value === '' ? {} : {[valueName]: completedValue};

export const Courses = ({setCourse, filterState, listCourses = []}) => {
    const router = useRouter();
    const {category, limit = 5} = router.query;
    const [defaultLimit] = useState(Number(limit));

    useEffect(() => {
        setCourse();
    }, []);

    return (
        <>
            <div className={s.row}>
                {list.map((name) => (
                    <p className={s.name} key={name}>
                        {name}
                    </p>
                ))}
            </div>
            {listCourses.map(
                ({id, name, startDate, price, duration, school: {name: schoolName}, type}) => (
                    <Course
                        key={id}
                        id={id}
                        name={name}
                        startDate={startDate}
                        price={price}
                        duration={duration}
                        schoolName={schoolName}
                        type={type}
                    />
                ),
            )}

            {/*{edges.length >= defaultLimit && <PaginationBottom fetchMore={fetchMore} defaultLimit={defaultLimit} />}*/}
        </>
    );
};

const mapStateToProps = (state) => ({
    listCourses: state.courses.results,
    filterState: state.filterState,
});

export const CoursesConnected = connect(mapStateToProps, {setCourse: setCourses})(Courses);
