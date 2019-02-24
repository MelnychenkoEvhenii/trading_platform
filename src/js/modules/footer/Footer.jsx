import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from '../../base/pureComponent/PureComponent.jsx';
import styled from "styled-components";

const WrapperMain = styled.div`
    border: 1px double black;
    height: 50px;
    display: flex;
`;

export default class Header extends PureComponent {
    static propTypes = {};
    static defaultProps = {};

    render() {

        return (
            <WrapperMain>
               FOOTER
            </WrapperMain>
        )
    }
}