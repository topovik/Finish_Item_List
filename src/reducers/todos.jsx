export const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, {id: action.id, text: action.text, done: false}]

        case 'REMOVE_TODO':
            const index = state.findIndex(todo => todo.id === action.id)
            return index >= 0
                ? [...state.slice(0, index), ...state.slice(index + 1)]
                : state;
              
        case 'TOOGLE_TODO':
            return state.map(todo => {
                if(action.id !== todo.id) {
                    return todo
                }
            return {...todo, done: !todo.done}                
            })

        case 'FETCH_TODOS_SUCCESS':
            return [...state, ...action.todos]

        default:
            return state
    }
}