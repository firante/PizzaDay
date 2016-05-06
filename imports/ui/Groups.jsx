import React, {Component, PropTypes} from 'react';

import GroupMemberElement from './GroupMemberElement.jsx';

export default class Groups extends Component {

  renderGroupMemberList() {
    return this.props.group.groupmembers.map((value, index) => {
      return <GroupMemberElement key={index} groupMember={value} />;
    });
  }

  editGroup() {
    Session.set('groupmembers', this.props.group.groupmembers);
    Session.set('newgroup', false);
    Session.set('groupname', this.props.group.groupname);
    Session.set('editinggroupId', this.props.group._id);
  }

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

  render() {
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
              <div className='text-right col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                <span className='small'> {`Group owner: ${this.props.group.groupovner}`} </span>
              </div>
            </div>
          </div>
        </div>
        <div id={`collapse_${this.props.group._id}`} className='panel-collapse collapse' role='tabpanel'
              aria-labelledby={`head_${this.props.group._id}`}>
          <div className='panel-body'>
            <ul className='list-group'>
              {this.renderGroupMemberList()}
            </ul>
            <div className='text-right'>
              {this.renderEditButton()}
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
