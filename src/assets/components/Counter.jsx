const Counter = ({ counter, setCounter }) => {
    return (
      <div>
        <p >{counter}</p>
        <button
          onClick={() => {
            setCounter(counter + 1); // counter = counter+1
          }}
        >
          +
        </button>
      </div>
    );
  };
  
  export default Counter;