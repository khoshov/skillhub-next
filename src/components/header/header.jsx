import {Grid} from 'components/grid/grid';
import {SvgLogo} from 'components/logo/icons/logoIcon';
import {MenuAndMobileMenu} from 'components/menuAndMobileMenuData/menuAndMobileMenuData';
import {Search} from 'components/search/search';
import Link from 'next/link';
import React from 'react';

import s from './header.module.scss';

export const Header = () => (
    <header className={s.header}>
        <Grid>
            <div className={s.headerContentWrapper}>
                <Link href="/">
                    <a>
                        <SvgLogo />
                    </a>
                </Link>
                <MenuAndMobileMenu />
                {/*<Search /> TO-DO будет позже */}
            </div>
        </Grid>
    </header>
);
