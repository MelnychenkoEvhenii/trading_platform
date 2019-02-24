import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from '../../base/pureComponent/PureComponent.jsx';
import styled from "styled-components";

const WrapperHeader = styled.div`
    //height: 80px;
    border: 1px double black;
    display: flex;
    justify-content: space-between;
`;

export default class Header extends PureComponent {
    static propTypes = {};
    static defaultProps = {};

    render() {

        const { balance, openModalWindow } = this.props;

        return (
            <WrapperHeader>
                <div className='name'>
                    ReactAppTeam
                </div>
                <div className='balance'>
                    {balance}$
                </div>
                <div className='logo'>
                    Logo
                </div>
                <div className='Notification'>
                    Notification
                </div>
                <div className='FullScreen'>
                    FullScreen
                </div>
                <button className='Settings' onClick={openModalWindow}>
                    Settings
                </button>
                <a href="https://deveducation.com/">Logout</a>
            </WrapperHeader>
        )
    }
}