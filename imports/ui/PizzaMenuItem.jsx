import React, {Component, PropTypes} from 'react';

export default class PizzaMenuItem extends Component {

  // click add new item order
  onClick() {

  }

  render() {
    return  <li className='list-group-item'>
              <div className='row'>
                <div className='col-xs-9 col-sm-9 col-md-9 col-lg-9'>
                  {this.props.menulist.name}
                </div>
                <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                  {this.props.menulist.price}
                </div>
                <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                  <input
                    type='number'
                    className='form-control' defaultValue='1'
                    ref='count' />
                </div>
                <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
                  <a className='btn' onClick={this.onClick.bind(this)}>
                    <span className="glyphicon glyphicon-ok text-success"  aria-hidden="true"></span>
                  </a>
                </div>
              </div>
            </li>
  }
}

PizzaMenuItem.propTypes = {
  menulist: PropTypes.object.isRequired,
}
