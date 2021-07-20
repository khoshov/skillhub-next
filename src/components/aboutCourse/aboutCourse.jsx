import React from 'react';

import s from './aboutCourse.module.scss';

export const AboutCourse = ({isOpen, description}) => {
    if (!isOpen) return null;
    return <p className={s.container}>{description}</p>;
};
