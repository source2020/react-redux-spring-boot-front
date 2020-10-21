import { createStore, applyMiddleware } from "redux";
import tareas from '../reducers/tareas';
import thunk from 'redux-thunk';

export default () => {
    return createStore(tareas, applyMiddleware(thunk));
};
