import React, {useState, useRef, Fragment} from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import {LanguageMobile} from '../languageMobile/languageMobile';
import {SearchMobile} from '../searchMobile/searchMobile';

import s from './multiMenus.module.scss';
import {connect} from 'react-redux';

export const MultiMenus = ({list = []}) => {
    const [activeMenus, setActiveMenus] = useState([]);
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);

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

    const ListItem = ({dept, data, menuName, menuIndex}) => (
        <li className={classnames(s.linkWrapper, {[s.subMenu]: Boolean(data.children)})}>
            <Link dept={dept} href={`/${data.slug}`}>
                <Fragment>
                    <label>
                        <a href={`/${data.slug}`}>{data.name}</a>
                    </label>
                    {Boolean(data.children) && (
                        <span className={s.arrow} onClick={() => handleArrowClick(menuName)} />
                    )}
                </Fragment>
            </Link>
            <Link
                dept={dept}
                href={{
                    pathname: `/${data.slug}`,
                    query: `${data.slug}`,
                }}
            >
                <Fragment>
                    {Boolean(data.children) && (
                        <SubMenu
                            dept={dept}
                            data={data.children}
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
                    {list.map((menu, index) => {
                        const dept = 1;
                        const menuName = `sidebar-menu-${dept}-${index}`;

                        return (
                            <ListItem
                                dept={dept}
                                data={menu}
                                hasSubMenu={Boolean(menu.children)}
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

const mapStateToProps = (state) => ({
    list: state.categories.results,
});

export const MultiMenusConnected = connect(mapStateToProps)(MultiMenus);
