import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/index';
// import { Component } from 'react'; // This is for Class-Based Component Version
// import { connect } from 'react-redux // This is also for Class-Based Component

// -------- Functional Component Version ---------

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);
  const dispatch = useDispatch(); 

  const incrementHandler = () => {
    dispatch(counterActions.increment()); // With Redux toolkit, we have automation for creating our action method / object and can just invoke the individual action that we need 
  };

  const increaseHandler = () => {
    dispatch (counterActions.increase(10)); // we can pass our payload / amount as an argument when invoking our Redux Toolkit automated action { type: SOME_UNIQUE_IDENTIFIER, payload: 10 } --> payload is the default toolkit name
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter()); 
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { showCounter && <div className={classes.value}>{counter}</div> }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// ----------- Class-Based Component Version -------------

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment(); // props will have an increment key-value since we mapped it below!
//   }

//   decrementHandler() {
//     this.props.decrement(); // same logic for decrement 
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//           {/* note: we have to call "bind(this)" and pass this since its JS class-based components */}
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );

//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// };

// const mapDispatchToProps = dispatchFunc => {
//   return {
//     increment: () => dispatchFunc({ type: 'increment'}),
//     decrement: () => dispatchFunc({ type: 'decrement'}),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter); 
// this is for "class-based components" ^
// this syntax looks extremely weird, bc it is !!! connect is a built-in component that 

