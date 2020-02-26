import { createStore } from 'redux'
import rootReducer from '../reducers'
import { loadState, saveState } from '../helpers'
import { throttle } from 'lodash'

const persistedState = loadState()
const store = createStore(rootReducer, persistedState)

store.subscribe( throttle( () => saveState({
    settings: store.getState().settings
}), 5000 ) )

export default store
