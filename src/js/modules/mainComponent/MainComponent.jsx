import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from '../../base/pureComponent/PureComponent.jsx';
import Header from '../header/index';
import Footer from '../footer/index';
import Sidebar from '../sidebar/index';
import TradindComponent from '../tradingComponent/index'
import styled from 'styled-components';

const WrapperMain = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const WrapperContent = styled.div`
    display: flex;
    flex: 1;
`;

export default class MainComponent extends PureComponent {
    static propTypes = {};
    static defaultProps = {};

    constructor(props) {
        super(props);
    }

    render() {

        const { modules } = this.props;

        return (
            <WrapperMain>
                <Header/>
                <WrapperContent>
                    <Sidebar/>
                    <TradindComponent modules={modules}/>
                </WrapperContent>
                <Footer/>
            </WrapperMain>
        )
    }
}