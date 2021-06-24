import React from 'react';
import { connect } from "react-redux"

import {Grid} from 'components/grid/grid';
import {Promo} from 'components/promo/promo';
import {testAction} from '../../reducers/reducer';

import s from './main.module.scss';

export const MainComponent = ({state, testAction: testActionWow}) => {
    React.useEffect(() => {
        testActionWow()
    }, [])
    return (
        <main className={s.main}>
            <Grid>
                <Promo />
            </Grid>
        </main>
    );
};

const mapStateToProps = state => ({
    state,
})

export const Main = connect(mapStateToProps, {testAction})(MainComponent)