import React from 'react'
import {Provider} from 'react-redux'
import {store, persistor} from '../store/store'
import FastifyApp from './FastifyApp'
import {PersistGate} from 'redux-persist/integration/react'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FastifyApp/>
      </PersistGate>
    </Provider>
  )
};

export default App