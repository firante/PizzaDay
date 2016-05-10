import React, {Component, PropTypes} from 'react';

import EmployerListElement from './EmployerListElement.jsx';

export default class GroupModal extends Component {

  // event to save group
  onClickGrSave() {
    if(Session.get('newgroup')) {
      Meteor.call('addNewGroup', this.refs.groupname.value, this.props.user, Session.get('groupmembers'));
    } else {
      Meteor.call('updateGroup', this.refs.groupname.value, Session.get('groupmembers'), Session.get('editinggroupId'));
    }
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
                ref='groupname'
                placeholder='Enter new group name...'
                defaultValue={Session.get('groupname')} />
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
              <button type='button' className='btn btn-default' data-dismiss='modal'> Close </button>
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
}
