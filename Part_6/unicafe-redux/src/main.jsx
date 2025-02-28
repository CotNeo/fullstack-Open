import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import { Provider, useDispatch, useSelector } from 'react-redux'
import counterReducer from './reducer'

const store = createStore(counterReducer)

const App = () => {
  const dispatch = useDispatch()
  const feedback = useSelector(state => state)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => dispatch({ type: 'GOOD' })}>Good</button>
      <button onClick={() => dispatch({ type: 'OK' })}>Ok</button>
      <button onClick={() => dispatch({ type: 'BAD' })}>Bad</button>
      <button onClick={() => dispatch({ type: 'ZERO' })}>Reset</button>

      <h2>Statistics</h2>
      <p>Good: {feedback.good}</p>
      <p>Ok: {feedback.ok}</p>
      <p>Bad: {feedback.bad}</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
