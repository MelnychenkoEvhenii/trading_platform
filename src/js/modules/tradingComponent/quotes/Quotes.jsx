import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from '../../../base/pureComponent/PureComponent.jsx';
import styled from "styled-components";

const WrapperQuotes = styled.div`
    border: 1px double black;
    width: 100%;
`;

export default class Quotes extends PureComponent {
    static propTypes = {};
    static defaultProps = {};

    render() {
        const { hideQuotesBlock } = this.props;

        return (
            <WrapperQuotes>
            QUOTES
                <button onClick={hideQuotesBlock}>X</button>
            </WrapperQuotes>
        )
    }
}