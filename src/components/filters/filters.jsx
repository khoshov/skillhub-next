import React from 'react';
import {useRouter} from 'next/router';

import {FilterButton} from './filterButton/filterButton';
import {OnlyFreeCheckbox} from './onlyFreeCheckbox/onlyFreeCheckbox';
import {FilterDropdown} from './filterDropdown/filterDropdown';
import {Input} from './input/input';
import {setFilters} from 'reducers/filters/filters';

import s from './filters.module.scss';
import {connect} from "react-redux";
import {setCategories} from "../../reducers/categories/categories";
import {Header} from "../header/header";

const inputs = [
    {
        name: 'durationFrom',
        placeholder: 'Длит. от',
    },
    {
        name: 'durationTo',
        placeholder: 'до 2 лет',
    },
    {
        name: 'priceFrom',
        placeholder: 'Цена от',
    },
    {
        name: 'priceTo',
        placeholder: 'до 170 000',
    },
];

const allFormats = [
    {
        id: 1,
        placeholder: 'онлайн',
        value: 'online',
    },
    {
        id: 2,
        placeholder: 'офлайн',
        value: 'offline',
    },
];

export const Filters = ({listCategories = [], setFilter, filterState}) => {
    const router = useRouter();
    const {category} = router.query;
    console.log(filterState)
    const foundNode = listCategories.find(({slug}) => slug.toLowerCase() === category);

    if (!foundNode) return null;

    const setCategoryId = () => {};
    const levels = [];
    return (
        <div>
            <h3 className={s.title}>{foundNode.name}</h3>
            <p className={s.description}>{foundNode.description}</p>
            <div className={s.filters}>
                {[{name: 'Все', id: ''}, ...foundNode.children].map(
                    ({name, id}) => {
                        return (
                            <FilterButton
                                key={id + name}
                                name={name}
                                isActive={name === filterState.name}
                                setFilter={setFilter}
                                setCategoryId={setCategoryId}
                                id={id}
                            />
                        );
                    },
                )}
            </div>

            <div className={s.container}>
                <FilterDropdown
                    placeholder="Все форматы"
                    items={allFormats}
                    setFilter={setFilter}
                    name="format"
                    selectedValue={filterState.format}
                />
                <FilterDropdown
                    placeholder="Для начинающих"
                    byId={true}
                    items={levels.map(({id, name}) => ({
                        id,
                        value: name,
                        placeholder: name,
                    }))}
                    setFilter={setFilter}
                    name="level"
                    selectedValue={filterState.level}
                />
                {inputs.map(({name, placeholder}) => (
                    <Input
                        key={name}
                        name={name}
                        setFilter={setFilter}
                        selectedValue={filterState[name]}
                        placeholder={placeholder}
                    />
                ))}
                <OnlyFreeCheckbox
                    isChecked={JSON.parse(filterState.isOnlyFree)}
                    setFilter={setFilter}
                />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    listCategories: state.categories.results,
    filterState: state.filters,
})

export const FiltersConnected = connect(mapStateToProps, {setFilter: setFilters})(Filters)
