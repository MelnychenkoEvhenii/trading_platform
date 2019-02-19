import React from 'react';
import PropTypes from 'prop-types';
import PureComponent from '../../base/pureComponent/PureComponent.jsx';
import './footer.less';

export default class Header extends PureComponent {
    static propTypes = {
        strings: PropTypes.object.isRequired,
    };

    render() {
        const {
            strings,
        } = this.props;

        return (
            <div className="info-container footer__info-container">
                <span className="info-container__copyright">{'@Copyright by ...'}</span>
            </div>
        )
    }
}