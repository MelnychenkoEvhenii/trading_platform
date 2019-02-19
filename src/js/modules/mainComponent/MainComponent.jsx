import React from 'react'
import './mainComponent.less'
import PropTypes from 'prop-types'
import PureComponent from '../../base/pureComponent/PureComponent.jsx'
import Chat from '../chat/'
import Header from '../header/'
import Footer from '../footer/'
import Sidebar from '../sidebar/'
// import { GlobalStyleComponent } from 'styled-components';

export default class MainComponent extends PureComponent {
  static propTypes = {
    modules: PropTypes.object.isRequired,
    activeBlocks: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props)
    this.props.initConnection()
  }

  render() {
    const { modules, activeBlocks } = this.props

    return (
      <div className="page-wrapper">
        {modules.header.isActive && (
          <header className="page-wrapper__header">
            <Header />
          </header>
        )}
        <main className="content page-wrapper__content">
          <div className="content__sidebar">
            {modules.sidebar.isActive && <Sidebar />}
          </div>
          {activeBlocks.chat ? (
            <div className="content__chat">
              {modules.chat.isActive && <Chat />}
            </div>
          ) : null}
        </main>
        {modules.footer.isActive && (
          <footer className="page-wrapper__footer">
            <Footer />
          </footer>
        )}
      </div>
    )
  }
}
