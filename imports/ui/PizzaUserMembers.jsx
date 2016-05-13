import React, {Component, PropTypes} from 'react';

import OrderList from './OrderList.jsx';

export default class PizzaUserMembers extends Component {

  // event for confirmed present user
  onClickConfirm() {
    Meteor.call('confirmedParticipate', this.props.pizzaDayId, this.props.loggedUser);
  }

  // event for denial from pizza
  onClickDenial() {
    Meteor.call('removeFromParticipate', this.props.pizzaDayId, this.props.loggedUser);
  }

  // render order list of user
  renderOrder() {
    return this.props.user.order.map((value, index) => {
      return <OrderList loggedUser={this.props.loggedUser} orderItem={value} key={index} />
    });
  }

  renderPizzaUser() {
    if(this.props.user.name === this.props.loggedUser) {
      if(this.props.user.confirmed === true) {
        return  <li className='list-group-item'>
                  <div className='panel panel-default'>
                    <div className='panel-heading' role='tab' id={`head_${this.props.index}`}>
                      <div className='panel-title'>
                        <a role='button' className='collapsed' data-toggle='collapse' data-parent='#groupspanel' href={`#collapse_${this.props.index}`}
                          aria-expanded='false' aria-controls={`collapse_${this.props.index}`}>
                          {this.props.user.name}
                        </a>
                      </div>
                    </div>
                    <div id={`collapse_${this.props.index}`} className='panel-collapse collapse' role='tabpanel'
                      aria-labelledby={`head_${this.props.index}`}>
                      <div className='panel-body'>
                        <ul className='list-group'>
                          {this.renderOrder()}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
      } else {
        return  <li className='list-group-item'>
                  <div className='row'>
                    <div className='col-xs-9 col-sm-9 col-md-10 col-lg-10'>
                      { this.props.user.name }
                    </div>

                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                      <a className='btn btn-xs' onClick={this.onClickConfirm.bind(this)}>
                        <span className="glyphicon glyphicon-ok text-success"  aria-hidden="true"></span>
                      </a>
                    </div>

                    <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                      <a className='btn btn-xs' onClick={this.onClickDenial.bind(this)}>
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
    return this.renderPizzaUser();
  }
}

PizzaUserMembers.propTypes = {
  loggedUser: PropTypes.string.isRequired,    // logged user
  user: PropTypes.object.isRequired,          // pizza day member
  pizzaDayId: PropTypes.string.isRequired,    // pizza day Id
  index: PropTypes.number.isRequired,         // index user list array
}
