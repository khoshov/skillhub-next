import {MainMenu} from 'components/menu/menu';

import {MultiMenusConnected} from 'components/multiMenus/multiMenus';
import React from 'react';

export const MenuAndMobileMenu = () => {
    return (
        <>
            <MainMenu />
            <MultiMenusConnected />
        </>
    );
};
