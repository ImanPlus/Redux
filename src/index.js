import React from "react";
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import Counter from './component/counter';
import './component/counter.css';
import UpdatedState from './reducers/index';

const store = createStore(UpdatedState);
const rootElement = document.getElementById('root');

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({type: "INCREMENT"})}
    onDecrement={() => store.dispatch({type: "DECREMENT"})}
  />,
  rootElement
)

render()

store.subscribe(render)
