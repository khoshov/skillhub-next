import {Menu} from 'components/menu/menu';

import {MultiMenus} from 'components/multiMenus/multiMenus';
import React from 'react';

const edges = [];

export const MenuAndMobileMenu = () => {
    return (
        <>
            <Menu edges={edges} />
            <MultiMenus edges={edges} />
        </>
    );
};
