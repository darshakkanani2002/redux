
import './App.css';

import React, { Component } from 'react'
import Counter from './Counter';
import Button from './Button';
import Checkout from './Checkout';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <Counter Counter={this.props.counter}></Counter>
        <div className='container d-flex justify-content-between mt-5'>
          <Button data="+1" click={() => this.props.modifyHandler("inc", 1)}></Button>
          <Button data="-1" click={() => this.props.modifyHandler("dec", 1)}></Button>
          <Button data="+2" click={() => this.props.modifyHandler("inc", 2)}></Button>
          <Button data="-2" click={() => this.props.modifyHandler("dec", 2)}></Button>
        </div>
        <Checkout price={this.props.price} Counter={this.props.counter}></Checkout>
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    price: state.price
  }
}
const mapActionToProps = (dispatch) => {
  return {
    modifyHandler: (action, value) => {
      dispatch({
        type: action,
        value: value,
      })
    }
  }
}
export default connect(mapStateToProps, mapActionToProps)(App);



