import React, {Component, PropTypes} from 'react';

export default class PizzaMenuItem extends Component {

  // click add new item order
  onClick() {
    Meteor.call('pushUserOrder', this.props.pizzaDayId, this.props.loggedUser, this.props.menulist.name, this.props.menulist.price, this.refs.count.value);
  }

  render() {
    return  <li className='list-group-item'>
              <div className='row'>
                <div className='col-xs-6 col-sm-5 col-md-6 col-lg-6 text-center'>
                  <h5><b>{this.props.menulist.name}</b></h5>
                </div>
                <div className='col-xs-1 col-sm-2 col-md-2 col-lg-2 text-center'>
                  <h5><b>{this.props.menulist.price}</b></h5>
                </div>
                <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2 text-center'>
                  <input
                    type='text'
                    className=' form-control input-sm' defaultValue='1'
                    ref='count' />
                </div>
                <div className='col-xs-3 col-sm-3 col-md-2 col-lg-2 text-center'>
                  <a className='btn btn-xs' onClick={this.onClick.bind(this)}>
                    <span className="glyphicon glyphicon-ok text-success"  aria-hidden="true"></span>
                  </a>
                </div>
              </div>
            </li>
  }
}

PizzaMenuItem.propTypes = {
  menulist: PropTypes.object.isRequired,
  pizzaDayId: PropTypes.string.isRequired,
  loggedUser: PropTypes.string.isRequired,
}
