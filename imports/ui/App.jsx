import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import MainContent from './Body.jsx';

class App extends Component {

  renderMainContent() {
    return this.props.user ? <MainContent /> : null;
  }

  render() {
    return (
      <div>
        <header>
          <AccountsUIWrapper />
        </header>
        <section>
          {this.renderMainContent()}
        </section>
      </div>
    );
  }
}

export default createContainer (()  => {
  return {
    user: Meteor.user(),
  };
}, App);
