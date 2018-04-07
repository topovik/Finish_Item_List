const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOOGLE_TODO = 'TOOGLE_TODO'
export const FILTER_TODO = 'FILTER_TODO'

const FETCH_TODOS_LOADING = 'FETCH_TODOS_LOADING';
const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
const FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR';

function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

export const addTodo = (text) => {
    return ({type: ADD_TODO, text, id: guid()})
}

export const removeTodo = (id) => {
    return ({type: REMOVE_TODO, id})
}

export const toogleTodo = (id) => {
    return ({type: TOOGLE_TODO, id})
}

export const filterTodo = (text) => {
    return ({type: FILTER_TODO, text})
}

const loadingTodos = () => {
    return ({type: FETCH_TODOS_LOADING})
}

const loadedTodos = (todos) => {
    return ({type: FETCH_TODOS_SUCCESS, todos})
}

const errorTodos = () => {
    return ({type: FETCH_TODOS_ERROR})
}

export const load = (dispatch) => {
    return (dispatch) => {
        dispatch(loadingTodos());
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => todos.map(t => ({
            id: t.id,
            text: t.title,
            done: t.completed
        })))
        .then(todos => dispatch(loadedTodos(todos)))
        .catch(e => dispatch(errorTodos()))
    }
}