import React, {useState, useRef, Fragment} from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import {LanguageMobile} from '../languageMobile/languageMobile';
import {SearchMobile} from '../searchMobile/searchMobile';

import s from './multiMenus.module.scss';

const menus = [
    {
        name: 'backend',
        link: '/backend',
    },
    {
        name: 'frontend',
        link: '/front',
        submenu: [
            {
                name: 'CSS',
                link: '/css',
            },
            {
                name: 'HTML',
                link: '/html',
            },
        ],
    },
    {
        name: 'Design',
        link: '/design',
        submenu: [
            {
                name: 'Figma',
                link: '/figma',
                submenu: [
                    {
                        name: 'Boom 1',
                        link: '/boom',
                    },
                    {
                        name: 'Boom 2',
                        link: '/boom 2',
                    },
                ],
            },
            {
                name: 'Photoshop',
                link: '/photoshop',
                submenu: [
                    {
                        name: 'Deep 1',
                        link: '/deep',
                    },
                    {
                        name: 'Deep 2',
                        link: '/deep 2',
                        submenu: [
                            {
                                name: 'Lorem 1',
                                link: 'lorem',
                            },
                            {
                                name: 'Lorem 2',
                                link: 'lorem 2',
                                submenu: [
                                    {
                                        name: 'Super Deep',
                                        link: 'super deep',
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: 'Sketch',
                link: 'sketch',
            },
            {
                name: 'Gimp',
                link: '/gimp',
                submenu: [
                    {
                        name: 'Last 1',
                        link: 'last 1',
                    },
                    {
                        name: 'Last 2',
                        link: 'last 2',
                    },
                    {
                        name: 'Last 3',
                        link: 'last 3',
                    },
                ],
            },
        ],
    },
    {
        name: 'Devops',
        link: '/dev',
    },
];

export const MultiMenus = ({edges}) => {
    const [activeMenus, setActiveMenus] = useState([]);
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

    // const handleMenuClick = (data) => {
    //     console.log(data.link);
    // };

    const handleArrowClick = (menuName) => {
        let newActiveMenus = [...activeMenus];

        if (newActiveMenus.includes(menuName)) {
            let index = newActiveMenus.indexOf(menuName);
            if (index > -1) {
                newActiveMenus.splice(index, 1);
            }
        } else {
            newActiveMenus.push(menuName);
        }

        setActiveMenus(newActiveMenus);
    };

    const ListItem = ({dept, data, hasSubMenu, menuName, menuIndex}) => (
        <li className={classnames(s.linkWrapper, {[s.subMenu]: hasSubMenu})}>
            <Link dept={dept} href={data.link}>
                <Fragment>
                    <label onClick={() => handleMenuClick(data)}>
                        <a href={data.link}>{data.name}</a>
                    </label>
                    {hasSubMenu && (
                        <span className={s.arrow} onClick={() => handleArrowClick(menuName)} />
                    )}
                </Fragment>
            </Link>
            <Link
                dept={dept}
                href={{
                    pathname: data.link,
                    query: data.link,
                }}
            >
                <Fragment>
                    {hasSubMenu && (
                        <SubMenu
                            dept={dept}
                            data={data.submenu}
                            toggle={activeMenus.includes(menuName)}
                            menuIndex={menuIndex}
                        />
                    )}
                </Fragment>
            </Link>
        </li>
    );

    const SubMenu = ({dept, data, toggle, menuIndex}) => {
        if (!toggle) {
            return null;
        }

        dept = dept + 1;

        return (
            <ul>
                {data.map((menu, index) => {
                    const menuName = `sidebar-submenu-${dept}-${menuIndex}-${index}`;

                    return (
                        <ListItem
                            dept={dept}
                            data={menu}
                            hasSubMenu={menu.submenu}
                            menuName={menuName}
                            key={menuName}
                            menuIndex={index}
                        />
                    );
                })}
            </ul>
        );
    };

    return (
        <div className={s.menuContainer}>
            <button type="button" className={s.Hamburger} onClick={onClick}>
                <span
                    className={classnames(s.humburgerElement, {
                        [s.humburgerElementActive]: isActive,
                    })}
                />
                <span
                    className={classnames(s.humburgerElement, {
                        [s.humburgerElementActive]: isActive,
                    })}
                />
            </button>

            <nav ref={dropdownRef} className={classnames(s.menu, {[s.active]: isActive})}>
                <SearchMobile />

                <ul className={s.mobileMenuList}>
                    {menus.map((menu, index) => {
                        const dept = 1;
                        const menuName = `sidebar-menu-${dept}-${index}`;

                        return (
                            <ListItem
                                dept={dept}
                                data={menu}
                                hasSubMenu={menu.submenu}
                                menuName={menuName}
                                key={menuName}
                                menuIndex={index}
                            />
                        );
                    })}
                </ul>

                <LanguageMobile />
            </nav>
        </div>
    );
};
