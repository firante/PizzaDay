import React, {Component, PropTypes} from 'react';

import EmployerListElement from './EmployerListElement.jsx';

export default class NewGroup extends Component {

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

  // handler for group create button click
  onClickGrCreate() {
    Session.set('groupmembers', []);
  }

  render() {
    return (
      <div>
        {/*New Group Modal Button*/}

        <button
          type='button'
          className='btn btn-primary btn-xs'
          data-toggle='modal'
          data-target='#modalGroup'
          onClick={this.onClickGrCreate.bind(this)} > Add new group </button>

          {/*modal */}

        <div className='modal fade' id='modalGroup' tabindex='-1' aria-labelledby='myModalLabel'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header text-center'>
                <input type='text' className='form-control' ref='groupname' placeholder='Enter new group name...'/>
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
                <button type='button' className='btn btn-primary' data-dismiss='modal'> Save </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

NewGroup.propTypes = {
  employers: PropTypes.array.isRequired,
  groupMember: PropTypes.array.isRequired,
}
