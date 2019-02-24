import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from '../../base/pureComponent/PureComponent.jsx';
import styled from "styled-components";

const WrapperSidebar = styled.div`
    border: 1px double black;
    width: 70px;
    height: 100%;
`;

export default class Sidebar extends PureComponent {
    static propTypes = {};
    static defaultProps = {};

    render() {
        const { showRaceBlock, showQuotesBlock } = this.props;

        return (
            <WrapperSidebar>
                SIDEBAR
                <button onClick={showRaceBlock}>Race</button>
                <button onClick={showQuotesBlock}>Quotes</button>
            </WrapperSidebar>
        );
    }
}