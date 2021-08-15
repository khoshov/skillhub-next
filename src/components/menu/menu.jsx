import React, {Fragment} from 'react';
import { connect } from "react-redux"

import Link from 'next/link';
import classNames from 'classnames';
import {useRouter} from 'next/router';
import {menuAction} from '../../reducers/reducer';

import s from './menu.module.scss';
import {loggers} from "redux-act";

export const Menu = ({state, menuAction: testMenuAction}) => {
    React.useEffect(() => {
        testMenuAction(
            [
                {name: 'Бэкенд', link: '/backend', slug: 'backend'},
                {name: 'Фронтенд', link: '/frontend', slug: 'frontend', submenu: [{name: 'CSS', link: '/css', slug: 'css'}]},
                {name: 'Анализ данных', link: '/data', slug: 'data'},
                {name: 'Дизайн', link: '/design', slug: 'design', submenu: [{name: 'mobile', link: '/mobile', slug: 'mobile'}]},
                {name: 'Девопс', link: '/devops', slug: 'devops', submenu: [{name: 'devops', link: '/devops', slug: 'devops'}]},
            ])
    }, [])
    const {route} = useRouter();
    console.log('state', state)
    console.log('menu', state.reducerMenu)
    const menus = state.reducerMenu.menus;

    console.log('menus', menus)
    const children = menus.map(el => el.submenu);
    console.log('children', children)

    return (
        <nav className={s.menu}>
            <ul className={s.menuList}>
                {
                    menus
                    // .sort((a, b) => a.node.sortOrder - b.node.sortOrder)
                    .map(({name, submenu = [], slug}) => (
                         <Fragment key={name}>
                             <li
                                 className={classNames(s.menuListItem, {
                                     [s.disabled]: !submenu.length,
                                     // [s.active]: route === `/${slug.toLowerCase()}`,
                                     [s.active]: route === `/${slug}`,
                                 })}
                             >
                                 <Link href={`/${slug}`}>
                                     <a className={s.link}>{name}</a>
                                 </Link>
                                 {   submenu.length !== 0 ?
                                     <ul className={s.subMenuList}>
                                         {
                                             submenu.map(({name, slug}) => (
                                                     <li className={s.subMenuListItem} key={name}>
                                                         <Link
                                                             href={{
                                                                 pathname: slug.toLowerCase(),
                                                                 query: {
                                                                     name: name.replace(/ /gi, '_'),
                                                                 },
                                                             }}
                                                         >
                                                             <a>{name}</a>
                                                         </Link>
                                                     </li>
                                                 )
                                             )}
                                     </ul> : null
                                 }
                             </li>
                        </Fragment>
                    ))
                }

                {/*{*/}
                {/*    edges*/}
                {/*        .sort((a, b) => a.node.sortOrder - b.node.sortOrder)*/}
                {/*        .map(({node: {name, children, slug}}) => (*/}
                {/*            <Fragment key={name}>*/}
                {/*                <li*/}
                {/*                    className={classNames(s.menuListItem, {*/}
                {/*                        [s.active]: route === `/${slug.toLowerCase()}`,*/}
                {/*                    })}*/}
                {/*                >*/}
                {/*                    <Link href={`/${slug.toLowerCase()}`}>*/}
                {/*                        <a className={s.link}>{name}</a>*/}
                {/*                    </Link>*/}
                {/*                    <ul className={s.subMenuList}>*/}
                {/*                        {children.edges.map(({node: {name: childNode}}) => (*/}
                {/*                                <li className={s.subMenuListItem} key={childNode}>*/}
                {/*                                    <Link*/}
                {/*                                        href={{*/}
                {/*                                            pathname: slug.toLowerCase(),*/}
                {/*                                            query: {*/}
                {/*                                                name: childNode.replace(/ /gi, '_'),*/}
                {/*                                            },*/}
                {/*                                        }}*/}
                {/*                                    >*/}
                {/*                                        <a>{childNode}</a>*/}
                {/*                                    </Link>*/}
                {/*                                </li>*/}
                {/*                            )*/}
                {/*                        )}*/}
                {/*                    </ul>*/}
                {/*                </li>*/}
                {/*            </Fragment>*/}
                {/*        ))*/}
                {/*}*/}
            </ul>
        </nav>
    );
};

const mapStateToProps = state => ({
    state: state
})

export const MainMenu = connect(mapStateToProps, {menuAction})(Menu)