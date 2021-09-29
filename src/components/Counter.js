import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
// import { Component } from 'react'; // This is for Class-Based Component Version
// import { connect } from 'react-redux // This is also for Class-Based Component

// -------- Functional Component Version ---------

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);
  const dispatch = useDispatch(); 

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const increaseHandler = () => {
    dispatch ({ type: 'increase', amount: 5 }); // we can add a "payload" to our action object (Store action). We hardcode a 5 but this is usually set to some user input.
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement'});
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle'}); 
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { showCounter && <div className={classes.value}>{counter}</div> }
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
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

