import React, { act, useReducer, useState }from 'react'
let initialState = {
    count: 0,
    msg: "neutral"
}
function dispatch(state,action) {
    switch (action.command) {
      case "increment":
        return {
          count: state.count + 1,
          msg: "increasing",
        };
      case "decreanent":
        return {
          count: state.count + 1,
          msg: "decresing",
        };
        default:
            return state
    }
}

function CounterNew() {
    // const [count,setcount] = useState(0);
    // const [msg, setMSG] = useState("neutral");
    const [state, setState] = useReducer(dispatch, initialState)
  return (
    <div>
      <div className="counter-parent">
        <div className="counter-child">
          <p>{msg}</p>
        </div>
        <div className="counter-child">
            <p>{count}</p>
          <button
            onClick={() => {
              setcount((prestate) => prestate + 1);
              setMSG("Increasing");
            }}
          >
            Increament
          </button>
          <button
            onClick={() => {
              setcount(count - 1);
              setMSG("Decreasing")
            }}
          >
            Decreament
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterNew