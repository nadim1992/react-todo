import Immutable from 'immutable';

const Todo = Immutable.Record({
    id: 0,
    complete: false,
    date: '',
    name: '',
    priority: ''
});

export default Todo;