import React, {Component, PropTypes} from 'react';

export default class EmployerListElement extends Component {

  onClick() {
    if(this.props.isGroupMember) {
      let member = Session.get('groupmembers');
      member.splice(member.indexOf(this.refs.emp.innerText), 1);
      Session.set('groupmembers', member);
    } else {
      let member = Session.get('groupmembers');
      member.push(this.refs.emp.innerText);
      Session.set('groupmembers', member);
    }
  }

  render() {
    return (
      <a
        href='#'
        ref='emp'
        className='list-group-item'
        onClick={this.onClick.bind(this)} > {this.props.employer} </a>
    );
  }
}

EmployerListElement.propTypes = {
  isGroupMember: PropTypes.bool.isRequired,
  employer: PropTypes.string.isRequired,
}
