import React, {Component, PropTypes} from 'react';

export default class ModalCreatePizzaDay extends Component {
  onClick() {
    let date = new Date(this.refs.date.value);
    if(date.getDay() != 3) {
      alert('Date must be Wednesday!')
    } else {
      Meteor.call('createPizzaDay', Session.get('editinggroupId'), this.refs.date.value, this.props.user);
    }
  }

  render()  {
    return(
      <div className='modal fade' tabindex='-1' id='createPizzaDayModal' aria-labelledby='pizzaDayModalLabel'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header text-center'>
              <span className='lead'> Create PizzaDay </span>
            </div>
            <div className='modal-body'>
              <input type='date' className='form-control' placeholder='Enter PizzaDay date' ref='date'/>
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

ModalCreatePizzaDay.propTypes = {
  user: PropTypes.string.isRequired,
}
