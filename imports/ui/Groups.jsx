import React, {Component, PropTypes} from 'react';

import GroupMemberElement from './GroupMemberElement.jsx';
import MenuItem from './MenuItem.jsx';

export default class Groups extends Component {
  // render group members list
  renderGroupMemberList() {
    return this.props.group.groupmembers.map((value, index) => {
      return <GroupMemberElement key={index} groupMember={value} />;
    });
  }

  // render menu item list
  renderMenuItemList() {
    return this.props.group.menuitems.map((value, index) => {
      return <MenuItem menuItem={value} key={index} id={this.props.group._id}/>
    })
  }

  // method for open edit group modal
  editGroup() {
    Session.set('groupmembers', this.props.group.groupmembers); // members of group
    Session.set('newgroup', false);                             // cheker new group or modify existing
    Session.set('groupname', this.props.group.groupname);       // group name
    Session.set('editinggroupId', this.props.group._id);        // id of group what we will be modify
  }

  //method for add menu item to base
  addMenuItem() {
    Session.set('editinggroupId', this.props.group._id);
    Session.set('editingmenuitem', {});
    Session.set('old', {});
  }

  // get component for edit group of members
  renderEditButton() {
    let editButton = (this.props.user === this.props.group.groupovner) ?
      <button
        className='btn btn-info btn-xs'
        type='button'
        data-toggle='modal'
        data-target='#modalGroup'
        onClick={this.editGroup.bind(this)}> edit group </button> : null;
    return editButton;
  }

  //get component for add menu item to group order
  renderAddMenuItemButton() {
    return(
      <button
        className='btn btn-info btn-xs'
        type='button'
        data-toggle='modal'
        data-target='#modalMenu'
        onClick={this.addMenuItem.bind(this)}> add menu item </button>
    );
  }


  // method for remove groups
  onClick() {
    Meteor.call('removeGroup', this.props.group._id);
  }

  onClickCreatePizza() {
    Session.set('editinggroupId', this.props.group._id);
  }

  render() {
    let classButtonDelete = this.props.user === this.props.group.groupovner ? 'btn' : "btn disabled";
    return(
      <div className='panel panel-default'>
        <div className='panel-heading' role='tab' id={`head_${this.props.group._id}`}>
          <div className='panel-title'>
            <div className='row'>
              <div className='text-left col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                <a role='button' className='collapsed' data-toggle='collapse' data-parent='#groupspanel' href={`#collapse_${this.props.group._id}`}
                  aria-expanded='false' aria-controls={`collapse_${this.props.group._id}`}>
                  <span className='lead'> {this.props.group.groupname} </span>
                </a>
              </div>
              <div className='text-right col-xs-5 col-sm-5 col-md-5 col-lg-5'>
                <span className='small'> {`Group owner: ${this.props.group.groupovner}`} </span>
              </div>

              <div className='text-right col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                  <a className={classButtonDelete} onClick={this.onClick.bind(this)}>
                    <span className="glyphicon glyphicon-remove text-danger"  aria-hidden="true"></span>
                  </a>
              </div>
            </div>
          </div>
        </div>
        <div id={`collapse_${this.props.group._id}`} className='panel-collapse collapse' role='tabpanel'
              aria-labelledby={`head_${this.props.group._id}`}>
          <div className='panel-body'>
            <div className='row'>
              {/*group members field*/}
              <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                <header className='lead text-center'> Group members </header>
                <ul className='list-group'>
                  {this.renderGroupMemberList()}
                </ul>
                <div className='text-right'>
                  {this.renderEditButton()}
                </div>
              </div>

              {/*menu items field*/}
              <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                <header className='lead text-center'> Menu items </header>

                <ul className='list-group'>
                  {this.renderMenuItemList()}
                </ul>

                <div className='text-right'>
                  {this.renderAddMenuItemButton()}
                </div>
              </div>

              {/*create PizzaDay event*/}
              <button
                className='btn btn-default btn-sm'
                data-toggle='modal'
                data-target='#createPizzaDayModal'
                onClick={this.onClickCreatePizza.bind(this)}> Create New PizzaDay </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Groups.propTypes = {
  group: PropTypes.object.isRequired,
  user: PropTypes.string.isRequired,
}
