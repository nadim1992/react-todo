import { ReduceStore } from 'flux/utils';
import Immutable from 'immutable';
import TodoActionTypes from '../TodoActionTypes';
import TodoDispatcher from '../TodoDispatcher';
import Counter from '../Counter';
import Todo from '../Todo';

class TodoStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case TodoActionTypes.CREATE_TODO:
                if (! action.todo.name) {
                    return state;
                }

                const id = Counter.increment();

                return state.set(id, new Todo({
                    id,
                    complete: false,
                    name    : action.todo.name,
                    date    : action.todo.date,
                    priority: action.todo.priority
                }));

            default:
                return state;
        }
    }
}

export default new TodoStore();