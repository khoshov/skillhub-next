import {MainMenu} from 'components/menu/menu';

import {MultiMenus} from 'components/multiMenus/multiMenus';
import React from 'react';

const edges = [];

export const MenuAndMobileMenu = () => {
    return (
        <>
            <MainMenu edges={edges} />
            <MultiMenus edges={edges} />
        </>
    );
};
