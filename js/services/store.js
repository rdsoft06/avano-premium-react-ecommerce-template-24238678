import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import thunkMiddleware from 'redux-thunk'
import reducers from './reducers';

function saveState(state) {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch (e) {
        console.log(e);
    }
}

function loadState() {
    try {
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) return {
            Intl: {
                locale: "en"
            }
        }
        return JSON.parse(serializedState)
    } catch (e) {
        console.log(e)
        return undefined
    }
}

const persistedState = loadState()

const store = createStore(reducers, persistedState, compose(
    applyMiddleware(thunkMiddleware),
));

store.subscribe(() => {
    const state = store.getState();
    saveState(state);
});

export default store;