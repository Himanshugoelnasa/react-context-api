import React, { createContext, useState, useContext } from "react";

export const CounterContext = createContext(0);

export const useCounter = () => {
     const counter = useContext(CounterContext);
     return counter;
}

const CounterProvider = (props) => {
    const [count, setCount] = useState(0);
    return (
        <CounterContext.Provider value={{count, setCount}}>
            {props.children}
        </CounterContext.Provider>
    );
}

export default CounterProvider;

