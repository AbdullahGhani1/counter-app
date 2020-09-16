import React, { Component } from 'react';
class Counter extends Component {
  state = {
    count: 0,
  };
  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }
  // handleIncrement() {
  //   console.log('InCrement', this);
  // obj.method();
  // function(); this by default return window object but if stict mode enable this return undefined

  // }

  handleIncrement = () => {
    console.log('InCrement', this);
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeclasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgeclasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    // object Destructuring
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}
export default Counter;
