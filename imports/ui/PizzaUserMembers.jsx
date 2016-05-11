import React, {Component, PropTypes} from 'react';

export default class PizzaUserMembers extends Component {

  // event for confirmed present user
  onClickConfirm() {

  }

  // event for denial from pizza
  onClickDenial() {

  }

  renderPizzaUser() {
    if(this.props.user.name === this.props.loggedUser) {
      if(this.props.user.confirmed === true) {
        return <li className='list-group-item'> { this.props.user.name }  </li>
      } else {
        return  <li className='list-group-item'>
                  <div className='row'>
                    <div className='col-xs-10 col-sm-10 col-md-10 col-lg-10'>
                      { this.props.user.name }
                    </div>

                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                      <a className='btn' onClickConfirm={this.onClickConfirm.bind(this)}>
                        <span className="glyphicon glyphicon-ok text-success"  aria-hidden="true"></span>
                      </a>
                    </div>

                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                      <a className='btn' onClick={this.onClickDenial.bind(this)}>
                        <span className="glyphicon glyphicon-remove text-danger"  aria-hidden="true"></span>
                      </a>
                    </div>
                  </div>
                </li>
      }
    } else {
      return <li className='list-group-item'> { this.props.user.name } </li>
    }
  }

  render() {
    return (

    );
  }
}

PizzaUserMembers.propTypes = {
  loggedUser: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  pizzaDayId: PropTypes.string.isRequired,
}
