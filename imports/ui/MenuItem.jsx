import React, {Component, PropTypes} from 'react';

export default class MenuItem extends Component {
  render() {
    return (
      <li className='list-group-item'>
        <div className='row'>
          <div className='col-xs-9 col-sm-9 col-md-9 col-lg-9'>
            {this.props.menuItem.name}
          </div>
          <div className='col-xs-2 col-sm-2 col-md-2 col-lg-2'>
            {this.props.menuItem.price}
          </div>
          <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
            <a className={classButtonDelete} onClick={this.onClick.bind(this)}>
              <span className="glyphicon glyphicon-pencil text-warning"  aria-hidden="true"></span>
            </a>
          </div>
        </div>
      </li>
    );
  }
}

MenuItem.propTypes = {
  menuItem: PropTypes.object.isRequired,
}
