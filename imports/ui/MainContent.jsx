import React, {Component, PropTypes} from 'react';

import GroupModal from './GroupModal.jsx';
import Groups from './Groups.jsx';

export default class MainContent extends Component {


  // handler for group create button click
  onClickGrCreate() {
    Session.set('groupmembers', []);
    Session.set('newgroup', true);
    Session.set('groupname', '');
  }

  renderAllGroups() {
    return this.props.allGroups.map(value =>
      <Groups
        user={this.props.user}
        group={value}
        key={value._id}
        employers={this.props.employers}
        groupMember={this.props.groupMember} />)
  }

  render () {
    return (
      <div>
        <ul className='nav nav-tabs' role='tablist'>
          <li role='presentation'>
            <a href='#pizzaDays' aria-controls='pizzaDays' role='tab' data-toggle='tab'> PizzaDays </a>
          </li>
          <li role='presentation' className='active'>
            <a href='#groups' aria-controls='groups' role='tab' data-toggle='tab'> Groups </a>
          </li>
        </ul>

        <div className='tab-content'>
          <div role='tabpanel' className='tab-pane' id='pizzaDays'>
            <span className='lead'>
              PizzaDays
            </span>
          </div>
          <div role='tabpanel' className='tab-pane active' id='groups'>
        {/*New Group Modal Button*/}
          <button
            type='button'
            className='btn btn-primary btn-xs'
            data-toggle='modal'
            data-target='#modalGroup'
            onClick={this.onClickGrCreate.bind(this)} > Add new group </button>

          {/*modal*/}
            <GroupModal
              employers={this.props.employers}
              groupMember={this.props.groupMember}
              user={this.props.user} />
            <hr />

            <div className='panel-group' id='groupspanel' role='tablist' aria-multiselectable='true'>
              {this.renderAllGroups()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MainContent.propTypes = {
  employers: PropTypes.array.isRequired,
  groupMember: PropTypes.array.isRequired,
  user: PropTypes.string.isRequired,
  allGroups: PropTypes.array.isRequired,
}
