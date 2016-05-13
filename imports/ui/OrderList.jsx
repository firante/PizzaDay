import React, {Component, PropTypes} from 'react';

export default class OrderList extends Component {

  onClick() {

  }

  render() {
    return (
      <li className='list-group-item'>
        <div className='row'>
          <div className='col-xs-8 col-sm-8 col-md-8 col-lg-8'>
            {this.props.orderItem.name}
          </div>
          <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
            {this.props.orderItem.count}
          </div>
          <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
            {this.props.orderItem.price}
          </div>
          <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
            <a className='btn btn-xs' onClick={this.onClick.bind(this)}>
              <span className="glyphicon glyphicon-remove text-danger"  aria-hidden="true"></span>
            </a>
          </div>
        </div>
      </li>
    );
  }
}

OrderList.propTypes = {
  orderItem: PropTypes.object.isRequired,
  loggedUser: PropTypes.string.isRequired,
}
