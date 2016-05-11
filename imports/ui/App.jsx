import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';

import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import MainContent from './MainContent.jsx';

import { groups } from '../collections/collections.jsx';
import {getAllUsers, getAllGroups} from '../api/findDataFromDB.jsx';

class App extends Component {
  componentWillMount() {
    Session.set('groupmembers', []);
    Session.set('newgroup', true);
    Session.set('editgroupId', '');
    Session.set('groupname', '');
    Session.set('editingmenuitem', {})
  }

  componentDidUpdate() {
    // stop all subscribe when user logged out
    if(!this.props.user) {
      Meteor.subscribe('groups').stop();
      Meteor.subscribe('allUsers').stop();
    }
  }

  renderMainContent() {
    if(this.props.user) {
      let empdif = this.props.employers.filter(x => this.props.groupMember.indexOf(x.profile.name) == -1);
      return <MainContent
                employers={empdif}
                groupMember={this.props.groupMember}
                user={this.props.user.profile.name}
                allGroups={this.props.allGroups}
                groupname={this.props.groupname}
                editingMenuObject={this.props.editingMenuItem}/>;
    } else {

    }
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
    allGroups: getAllGroups(),
    groupname: Session.get('groupname'),
    editingMenuItem: Session.get('editingmenuitem'),
  };
}, App);
