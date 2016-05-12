import React, {Component, PropTypes} from 'react';

import GroupModal from './GroupModal.jsx';
import ModalMenuItem from './ModalMenuItem.jsx';
import Groups from './Groups.jsx';
import ModalCreatePizzaDay from './ModalCreatePizzaDay.jsx';
import PizzaDays from './PizzaDays.jsx';

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
        groupMember={this.props.groupMember} />);
  }

  renderAllPizzaDays() {
    return this.props.allPizzaDays.map(value =>
    <PizzaDays pizzaDay={value} loggedUser={this.props.user} key={value._id} /> );
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

            {this.renderAllPizzaDays()}

          </div>
          <div role='tabpanel' className='tab-pane active' id='groups'>
        {/*New Group Modal Button*/}
          <button
            type='button'
            className='btn btn-primary btn-xs'
            data-toggle='modal'
            data-target='#modalGroup'
            onClick={this.onClickGrCreate.bind(this)} > Add new group </button>

          {/* group modal*/}
            <GroupModal
              employers={this.props.employers}
              groupMember={this.props.groupMember}
              user={this.props.user}
              groupname={this.props.groupname} />

          {/*menu item modal*/}
            <ModalMenuItem editingMenuObject={this.props.editingMenuObject} />
          {/*create PizzaDay modal*/}
            <ModalCreatePizzaDay user={ this.props.user } />

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
  allPizzaDays: PropTypes.array.isRequired,
  groupname: PropTypes.string.isRequired,
  editingMenuObject: PropTypes.object.isRequired,
}
