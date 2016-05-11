import React, {Component, PropTypes} from 'react';

import PizzaUserMembers from './PizzaUserMembers.jsx';

export default class PizzaDays extends Component {

  renderUserList() {
    return this.props.pizzaDay.users.map((value, index) => {
      return <PizzaUserMembers
                pizzaDayId={this.props.pizzaDay._id}
                loggedUser={this.props.loggedUser}
                user={value}
                key={index} />
    });
  }

  render() {
    return (
      <div className='panel panel-default'>
        <div className='panel-heading' role='tab' id={`head_${this.props.pizzaDay._id}`}>
          <div className='panel-title'>
            <div className='row'>
              <div className='text-left col-xs-9 col-sm-9 col-md-9 col-lg-9'>
                <span className='lead'> Pizza Day ({this.props.pizzaDay.status})</span>
              </div>
              <div className='text-right col-xs-3 col-sm-3 col-md-3 col-lg-3'>
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                  <span className='small'>{this.props.pizzaDay.owner}</span>
                </div>
                <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                  <span className='small'>{this.props.pizzaDay.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id={`collapse_${this.props.pizzaDay._id}`} className='panel-collapse collapse' role='tabpanel'
              aria-labelledby={`head_${this.props.pizzaDay._id}`} >
          <div className='panel-body'>
            <div className='row'>

              {/*members list*/}
              <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                <header className='lead text-center'> Pizza day members </header>
                <ul className='list-group'>
                  {this.renderUserList()}
                </ul>
              </div>

              {/*menu items*/}
              <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                <header className='lead text-center'> Munu </header>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PizzaDays.propTypes = {
  pizzaDay: PropTypes.object.isRequired,
  loggedUser: PropTypes.string.isRequired,
