import { FILTER_TODO } from '../actions'

export const filter = (state = '', action) => {
    if (action.type === FILTER_TODO) {
        return action.text
    }
        return state
}
