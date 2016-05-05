import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import MainContent from './MainContent.jsx';
import {getAllUsers} from '../api/findDataFromDB.jsx';

class App extends Component {
  componentWillMount() {
    Session.set('groupmembers', []);
  }

  renderMainContent() {
    if(this.props.user) {
      let empdif = this.props.employers.filter(x => this.props.groupMember.indexOf(x.profile.name) == -1);
      return <MainContent employers={empdif} groupMember={this.props.groupMember}/>;
    } 
    //return this.props.user ? <MainContent /> : null;
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
    employers: getAllUsers(),
    groupMember: Session.get('groupmembers'),
  };
}, App);
