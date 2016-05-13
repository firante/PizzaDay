import React, {Component, PropTypes} from 'react';

import PizzaUserMembers from './PizzaUserMembers.jsx';

import { getGroupMenu } from '../api/findDataFromDB.jsx';
import PizzaMenuItem from './PizzaMenuItem.jsx';

export default class PizzaDays extends Component {

  renderUserList() {
    return this.props.pizzaDay.users.map((value, index) => {
      return <PizzaUserMembers
                pizzaDayId={this.props.pizzaDay._id}
                loggedUser={this.props.loggedUser}
                user={value}
                key={index}
                index={index} />
    });
  }

  renderList() {
    return getGroupMenu(this.props.pizzaDay.groupID).menuitems.map((value, index) => {
      return <PizzaMenuItem
              loggedUser={this.props.loggedUser}
              pizzaDayId={this.props.pizzaDay._id}
              menulist={value}
              key={index} />
    });
  }

  renderMunuList() {
    return this.props.pizzaDay.users.map((value, index) => {
      if(value.name === this.props.loggedUser && value.confirmed === true) {
        let menulist = getGroupMenu();
        return  <ul className='list-group' key={index}>
                  <li className='list-group-item'>
                    <div className='row'>
                      <div className='col-xs-6 col-sm-5 col-md-6 col-lg-6 text-center'> Name </div>
                      <div className='col-xs-1 col-sm-2 col-md-2 col-lg-2 text-center'> Price </div>
                      <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 text-center'> Count </div>
                      <div className='col-xs-3 col-sm-3 col-md-2 col-lg-2 text-center'> Confirm</div>
                    </div>
                  </li>
                  {this.renderList()}
                </ul>
      } else {
        return null;
      }
    });
  }

  onClick() {
    // ...
  }

  render() {
    return (
      <div className='panel panel-default'>
        <div className='panel-heading' role='tab' id={`head_${this.props.pizzaDay._id}`}>
          <div className='panel-title'>
            <div className='row'>
              <div className='text-left col-xs-7 col-sm-7 col-md-7 col-lg-7'>
                <a role='button' className='collapsed' data-toggle='collapse' data-parent='#pizzaDays' href={`#collapse_${this.props.pizzaDay._id}`}
                  aria-expanded='false' aria-controls={`collapse_${this.props.pizzaDay._id}`}>
                  <span className='lead'> Pizza Day ({this.props.pizzaDay.status})</span>
                </a>
              </div>
              <div className='text-right col-xs-4 col-sm-4 col-md-4 col-lg-4'>
                  <small>{`Owner: ${this.props.pizzaDay.owner} | Data: ${this.props.pizzaDay.date}`}</small>
              </div>
              <div className='text-center col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                <a className='btn btn-xs' onClick={this.onClick.bind(this)}>
                  <span className="glyphicon glyphicon-remove text-danger"  aria-hidden="true"></span>
                </a>
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
                <header className='lead text-center'> Menu </header>
                {this.renderMunuList()}
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
}
