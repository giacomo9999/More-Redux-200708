import React, { Component } from "react";
import { connect } from "react-redux";

// import * as actionTypes from "../../store/actions/actions";
import {
  increment,
  decrement,
  add,
  subtract,
  storeResult,
  deleteResult,
} from "../../store/actions/actions";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store Result
        </button>
        <ul>
          {this.props.storedResults.map((element) => (
            <li
              key={element.id}
              onClick={() => this.props.onDeleteResult(element.id)}
            >
              {element.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ctr: state.ctr.counter, storedResults: state.res.results };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddCounter: () => dispatch(add()),
    onSubtractCounter: () => dispatch(subtract()),
    onStoreResult: (result) => {
      dispatch(storeResult(result));
    },
    onDeleteResult: (elementId) => {
      dispatch(deleteResult(elementId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
