import React, {Component, PropTypes} from 'react';

export default class MainContent extends Component {
  render () {
    return (
      <div>
        <ul className='nav nav-tabs' role='tablist'>
          <li role='presentation'>
            <a href='#pizzaDays' aria-controls='pizzaDays' role='tab' data-toggle='tab'> PizzaDays </a>
          </li>
          <li role='presentation' className='active'>
            <a href='#groups' aria-controls='groups' role='tab' data-toggle='tab'> Groups </a>
          </li>
        </ul>

        <div className='tab-content'>
          <div role='tabpanel' className='tab-pane' id='pizzaDays'> <span className='lead'> PizzaDays </span> </div>
          <div role='tabpanel' className='tab-pane active' id='groups'> <span className='lead'> Groups </span> </div>
        </div>
      </div>
    );
  }
}
