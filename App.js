/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import CounterContainer  from './containers/CounterContainer';
import MovieContainer from './containers/MovieContainer';
import createSagaMiddleWare from 'redux-saga';
//redux saga
const sagaMiddleWare = createSagaMiddleWare();

import rootSaga from './sagas/rootSaga'


let store = createStore(allReducers, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);
export default class App extends Component {
  render() {
    return (
   <Provider store= {store}>
      <MovieContainer/>
   </Provider>
    );
  }
}


