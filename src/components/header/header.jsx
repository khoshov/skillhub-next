import {Grid} from 'components/grid/grid';
import {SvgLogo} from 'components/logo/icons/logoIcon';
import {MenuAndMobileMenu} from 'components/menuAndMobileMenuData/menuAndMobileMenuData';
import {Search} from 'components/search/search';
import Link from 'next/link';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {setCategories} from 'reducers/categories/categories';

import s from './header.module.scss';

export const Header = ({fetchCategories}) => {
    useEffect(() => {
        if (fetchCategories) {
            fetchCategories();
        }
    }, []);
    return (
        <header className={s.header}>
            <Grid>
                <div className={s.headerContentWrapper}>
                    <Link href="/">
                        <a>
                            <SvgLogo />
                        </a>
                    </Link>
                    <MenuAndMobileMenu />
                    <Search />
                </div>
            </Grid>
        </header>
    );
};

export const HeaderConnected = connect(null, {fetchCategories: setCategories})(Header);
