import React, {useContext} from 'react';
import {useCounter} from '../Context/CounterProvider';


export default function Counter() {

    const counterContext = useCounter();
  return (
    <>
        <button onClick={() => counterContext.setCount(counterContext.count + 1)} type="button">Increament</button>
        {" "}
        <button onClick={() => counterContext.setCount(counterContext.count - 1)} type="button">Decreament</button>
    </>
  )
}
