import React, {Component, PropTypes} from 'react';

export default class ModalMenuItem extends Component {

  onClick() {
    let menuitemprice = this.refs.itemprice.value;
    if(+menuitemprice) {
      if(Object.keys(Session.get('old')).length == 0) {
        Meteor.call ('addMenuItem', Session.get('editinggroupId'), Session.get('editingmenuitem') );
      } else {
        Meteor.call ('modifyMenuItem', Session.get('editinggroupId'), Session.get('editingmenuitem'), Session.get('old') );
      }
      this.refs.itemname.value = '';
      this.refs.itemprice.value = '';
    } else {
      alert(`Field 'price' must be numeric!`);
    }
  }

  onChangeName(e) {
    Session.set('editingmenuitem', {'name': e.target.value, 'price': this.refs.itemprice.value});
  }

  onChangePrice(e) {
    Session.set('editingmenuitem', {'name': this.refs.itemname.value, 'price': e.target.value});
  }

  render() {

    let itemname='', itemprice='';
    if(Object.keys(this.props.editingMenuObject).length != 0) {
      itemname = this.props.editingMenuObject.name;
      itemprice = this.props.editingMenuObject.price;
    }

    return(
      <div className='modal fade' id='modalMenu' tabindex='-1' aria-labelledby='menuModalLabel'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header text-center'>
              <span className='lead'> Add menu item </span>
            </div>
            <div className='modal-body'>
              <div className='row'>
                <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                  <input
                    type='text'
                    className='form-control'
                    ref='itemname'
                    placeholder='Enter menu item name ...'
                    value={itemname}
                    onChange={this.onChangeName.bind(this)} />
                </div>
                <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                  <input
                    type='text'
                    className='form-control'
                    ref='itemprice'
                    placeholder='Enter menu item price ...'
                    value={itemprice}
                    onChange={this.onChangePrice.bind(this)}/>
                </div>
              </div>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-default' data-dismiss='modal' > Close </button>
              <button type='button' className='btn btn-primary' data-dismiss='modal' onClick={this.onClick.bind(this)}> Add </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ModalMenuItem.propTypes = {
  editingMenuObject: PropTypes.object.isRequired,
}
