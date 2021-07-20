import React, {useState} from 'react';
import classNames from 'classnames';
import {AboutCourse} from '../aboutCourse/aboutCourse';

import s from './course.module.scss';

const DATES_MAP = {
    '01': 'января',
    '02': 'февраля',
    '03': 'марта',
    '04': 'апреля',
    '05': 'мая',
    '06': 'июня',
    '07': 'июля',
    '08': 'августа',
    '09': 'сентбяря',
    '10': 'октября',
    '11': 'ноября',
    '12': 'декабря',
};

// переписать это говнище на нормальной код
const pularize = (value) => {
    const splitedValue = value.toString().split('.');

    return value <= 4
        ? `${splitedValue[0]} года`
        : `${splitedValue[0]} лет` +
              (splitedValue[1][0]
                  ? ` 
    и ${splitedValue[1][0]} месяцев`
                  : '');
};

export const Course = ({id, name, startDate, price, duration, schoolName, type}) => {
    const [isOpen, setOpen] = useState(false);
    const getCovertDate = () => {
        if (!startDate) return 'В любой момент';

        const dates = startDate.split('-');
        return `${dates[2]} ${DATES_MAP[dates[1]]}`;
    };

    const getDurations = () => {
        if (!duration) return 'нет информации';
        const yearInMonths = 12;
        if (duration < yearInMonths) return `${duration} месяцев`;

        const years = duration / yearInMonths;

        // тут будет нормальный пуларайз
        return pularize(years);
    };

    const getPrice = () => {
        if (price === 0) return 'бесплатно';
        const MAP = {
            '4': 1,
            '5': 2,
            '6': 3,
            '7': 4,
        };
        const convertPrice = String(price);

        const count = MAP[convertPrice.length];

        return (
            <div className={s.price}>
                <span className={s.bold}>
                    {convertPrice.substr(0, count)}{' '}
                    {convertPrice.substr(count, convertPrice.length)} ₽
                </span>{' '}
                {Math.random() >= 0.5 && (
                    <>
                        сразу <br /> или 11 000 ₽ в месяц
                    </>
                )}
            </div>
        );
    };

    return (
        <div className={s.container}>
            <div className={s.course}>
                <div className={s.leftColumn}>
                    <h3 className={s.title}>{name}</h3>
                    <button
                        className={classNames(s.moreAboutCourse, {[s.active]: isOpen})}
                        onClick={() => setOpen(!isOpen)}
                    >
                        Подробней о курсе
                    </button>
                </div>
                <div className={s.schoolName}>{schoolName}</div>
                <div className={classNames(s.type, {[s.active]: type === 'A_1'})}>
                    {type === 'A_1' ? 'Онлайн' : 'Офлайн'}
                </div>
                <div className={s.level}>Для начинающих</div>
                <div className={s.startDate}>
                    <p className={s.date}>{getCovertDate()}</p>
                </div>
                <div className={s.duration}>{getDurations()}</div>
                <div>{getPrice()}</div>
            </div>
            <AboutCourse
                isOpen={isOpen}
                description="Тут что то будет о курсе я правда сам не знаю но предлагаю что это будет выглядит примерно так, если ты это читаешь значит тебе реально не лень было нажимать на эту кнопку и ты мазахист"
            />
        </div>
    );
};
