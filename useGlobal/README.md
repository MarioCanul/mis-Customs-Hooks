hook para el manejo de estado utilizando useState y aplicando la metodologia de redux para actions 
devolucion de estados..

example...
----------------------------
 const [globalState, globalActions] = useGlobal();

 return (
    <div className="Counter">
      <p>
        Counter:
        {globalState.counter}
      </p>
      <button type="button" onClick={() => globalActions.addToCounter(1)}>
        +1 to global
      </button>
      <p>{renderTime()}</p>
    </div>
  );
----------------------------
  archivo store:
import React from "react";
import useGlobalHook from "./useGlobalHook";

import * as actions from "../actions";

const initialState = {
  counter: 0
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;
------------------------------------
archivo actions
export const addToCounter = (store, amount) => {
  const counter = store.state.counter + amount;
  store.setState({ counter });
};