import React, {Component, PropTypes} from 'react';

import EmployerListElement from './EmployerListElement.jsx';

export default class GroupModal extends Component {

  // event to save group
  onClickGrSave() {
    if(this.refs.groupnames.value != '') {
      if(Session.get('newgroup')) {
        Meteor.call('addNewGroup', this.refs.groupnames.value, this.props.user, Session.get('groupmembers'));
      } else {
        Meteor.call('updateGroup', this.refs.groupnames.value, Session.get('groupmembers'), Session.get('editinggroupId'));
      }
    } else {
      alert('Group name should be entered!');
    } 
    Session.set('groupname', '');
  }

  // render employer list (is reactive)
  renderEmployerList() {
    return this.props.employers.map((value) => {
      return <EmployerListElement employer={value.profile.name} key={value._id} isGroupMember={false} />
    });
  }

  // render group members (is reactive)
  renderGroupMember() {
    return this.props.groupMember.length != 0 ? this.props.groupMember.map((value, index) => {
      return <EmployerListElement employer={value} key={index} isGroupMember={true} />
    }) : null;
  }

  onClickGrClosed() {
    Session.set('groupname', '');
  }

  onChange(e) {
    Session.set('groupname', e.target.value);
  }

  render() {
    return (
      <div className='modal fade' id='modalGroup' tabindex='-1' aria-labelledby='myModalLabel'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header text-center'>
              <input
                type='text'
                className='form-control'
                ref='groupnames'
                placeholder='Enter new group name...'
                value={this.props.groupname}
                onChange={this.onChange.bind(this)} />
            </div>

            <div className="modal-body">
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">
                  <span className='lead'> Employer list </span>
                  <div className='list-group'>
                    {this.renderEmployerList()}
                  </div>
                </div>

                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-center">
                <span className='lead'> Group members </span>
                  <div className='list-group'>
                    {this.renderGroupMember()}
                  </div>
                </div>
              </div>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-default' data-dismiss='modal' onClick={this.onClickGrClosed.bind(this)}> Close </button>
              <button type='button' className='btn btn-primary' data-dismiss='modal' onClick={this.onClickGrSave.bind(this)}> Save </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

GroupModal.propTypes = {
  employers: PropTypes.array.isRequired,
  groupMember: PropTypes.array.isRequired,
  user: PropTypes.string.isRequired,
  groupname: PropTypes.string.isRequired,
}
