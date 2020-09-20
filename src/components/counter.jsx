import React, { Component } from 'react';
class Counter extends Component {
  /*
  This method is called after component is updated
  ehic means we have bew state or props so we can
  compare this new state with the old state or 
  this new props with the old props and if there is 
  a change.we can make AJax request to get the new data 
  from serer */
  componentDidUpdate(prevProps, prevState) {
    console.log('App - componentDidUpdate');
    console.log('previouProps', prevProps);
    console.log('previousState', prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
    }
  }
  componentWillUnmount() {}
  render() {
    console.log('Counter - Render');
    return (
      <div>
        <span className={this.getBadgeclasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className='btn btn-danger btn-sm m-2'
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeclasses() {
    let classes = 'badge m-2 badge-';
    classes += this.props.counter.value === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    // object Destructuring
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }
}
export default Counter;
