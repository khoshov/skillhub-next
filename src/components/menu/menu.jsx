import React, {Fragment} from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import {useRouter} from 'next/router';

import s from './menu.module.scss';

const edges = [
    {
        node: {
            sortOrder: 0,
            name: 'name1',
            slug: 'name1',
            children: {
                edges: [
                    {
                        node: {
                            name: 'name sub',
                            slug: 'name sub',
                        }
                    }
                ]
            }
        }
    }
]

export const Menu = () => {
    const {route} = useRouter();

    return (
        <nav className={s.menu}>
            <ul className={s.menuList}>
                {edges
                    .sort((a, b) => a.node.sortOrder - b.node.sortOrder)
                    .map(({node: {name, children, slug}}) => (
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
                                    {children.edges.map(({node: {name: childNode}}) => (
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
                                        )
                                    )}
                                </ul>
                            </li>
                        </Fragment>
                    ))}
            </ul>
        </nav>
    );
};
