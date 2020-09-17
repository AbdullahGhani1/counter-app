import React, { Component } from 'react';
class Counter extends Component {
  state = {
    count: 0,
  };

  // passing event arrgument
  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeclasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(product)}
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
