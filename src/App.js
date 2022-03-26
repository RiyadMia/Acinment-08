
import './App.css';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className='App'>
      <h1>Mobile Shopping</h1>
      <Shop></Shop>
      <h1>How to react work ?</h1>
      <div>
        <p>
        React is a JavaScript library for building user interfaces.React is used to build single-page applications.React allows us to create reusable UI components.React creates a  virtual dom in memory.React creates a virtual dom in memory.The quickest way start learning React is to write React directly in your HTML files.React finds out what changes have been made, and changes only what needs to be changed.
        </p>
      </div>
      <h1>How to useState work ? </h1>
      <div>
        <p>The useState is a Hook that allows you to have state variables in functional components.The useState hook is a special function that takes the initial state as an argument and returns an array of two entries. The above function is oneline function which computes the sum of two numbers and will be set as the initial state.The only argument to the useState() Hook is the initial state. Unlike with classes, the state doesn’t have to be an object. We can keep a number or a string if that’s all we need. </p>
      </div>
    </div>
  );
}

export default App;
