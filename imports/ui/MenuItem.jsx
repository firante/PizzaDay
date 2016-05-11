import React, {Component, PropTypes} from 'react';

export default class MenuItem extends Component {

  //event for modify munu item
  onClickModify() {
    Session.set('editingmenuitem', {'name': this.props.menuItem.name, 'price': this.props.menuItem.price});
    Session.set('old', {'name': this.props.menuItem.name, 'price': this.props.menuItem.price});
  }

  //event for remove munu item
  onClickRemove() {
    Meteor.call('removeMenuItem', this.props.id, {'name' : this.props.menuItem.name, 'price': this.props.menuItem.price});
  }

  render() {
    return (
      <li className='list-group-item'>
        <div className='row'>
          <div className='col-xs-9 col-sm-9 col-md-9 col-lg-9'>
            {this.props.menuItem.name}
          </div>
          <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
            {this.props.menuItem.price}
          </div>
          <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
            <a
              className='btn'
              data-toggle='modal'
              data-target='#modalMenu'
              onClick={this.onClickModify.bind(this)} >
                <span className="glyphicon glyphicon-pencil text-primary"  aria-hidden="true"></span>
            </a>
          </div>
          <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1'>
            <a className='btn' onClick={this.onClickRemove.bind(this)}>
              <span className="glyphicon glyphicon-remove text-warning"  aria-hidden="true"></span>
            </a>
          </div>
        </div>
      </li>
    );
  }
}

MenuItem.propTypes = {
  menuItem: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
}
