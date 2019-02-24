import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from '../../../base/pureComponent/PureComponent.jsx';
import styled from "styled-components";

const WraperRace = styled.div`
    border: 1px double black;
    width: 100%;
    height: 100%;
`;

export default class Race extends PureComponent {
    static propTypes = {};
    static defaultProps = {};

    render() {

        const { hideRaceBlock } = this.props;

        return (
            <WraperRace>
                RACE
                <button onClick={hideRaceBlock}>X</button>
            </WraperRace>
        )
    }
}