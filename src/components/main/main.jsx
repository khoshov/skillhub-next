import React from 'react';
import { connect } from "react-redux"

import {Grid} from 'components/grid/grid';
import {Promo} from 'components/promo/promo';
import {testAction, testAction1, menuAction} from '../../reducers/reducer';

import s from './main.module.scss';

export const MainComponent = ({state, testAction: testActionWow, testAction1: testActionWow1, menuAction: testMenuAction}) => {
    React.useEffect(() => {
        // testActionWow()
        // testActionWow1('Test')
        // testMenuAction([{hui: 2}, {pizda: 'daaa'}])
    }, [])
    // console.log('state', state)
    return (
        <main className={s.main}>
            <Grid>
                <Promo />
            </Grid>
        </main>
    );
};

const mapStateToProps = state => ({
    state: state
})

export const Main = connect(mapStateToProps, {testAction, testAction1, menuAction})(MainComponent)