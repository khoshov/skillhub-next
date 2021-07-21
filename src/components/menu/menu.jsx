import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import Link from 'next/link';
import classNames from 'classnames';
import {useRouter} from 'next/router';

import s from './menu.module.scss';

export const Menu = ({list = []}) => {
    const {route} = useRouter();

    return (
        <nav className={s.menu}>
            <ul className={s.menuList}>
                {list
                    .sort((a, b) => a.sort_order - b.sort_order)
                    .map(({children, slug, name}) => (
                        <Fragment key={name}>
                            <li
                                className={classNames(s.menuListItem, {
                                    [s.active]: route === `/${slug.toLowerCase()}`,
                                })}
                            >
                                <Link href={`/${slug.toLowerCase()}`}>
                                    <a className={s.link}>{name}</a>
                                </Link>
                                <ul className={s.subMenuList}>
                                    {children.map(({name: childNode}) => (
                                        <li className={s.subMenuListItem} key={childNode}>
                                            <Link
                                                href={{
                                                    pathname: slug.toLowerCase(),
                                                    query: {
                                                        name: childNode.replace(/ /gi, '_'),
                                                    },
                                                }}
                                            >
                                                <a>{childNode}</a>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        </Fragment>
                    ))}
            </ul>
        </nav>
    );
};

const mapStateToProps = (state) => ({
    list: state.categories.results,
});

export const MainMenu = connect(mapStateToProps)(Menu);
