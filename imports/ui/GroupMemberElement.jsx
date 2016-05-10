import React, {Component, PropTypes} from 'react';

export default class GroupMemberElement extends Component {
  render() {
    return (
      <li className='list-group-item'> {this.props.groupMember} </li>
    );
  }
}


GroupMemberElement.propTypes = {
  groupMember: PropTypes.string.isRequired,
}
