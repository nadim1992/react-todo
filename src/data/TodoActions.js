import TodoDispatcher from './TodoDispatcher';
import TodoActionTypes from './TodoActionTypes';

const Actions = {

    changeMode(mode) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.CHANGE_MODE,
            mode
        });
    },

    createTodo(todo) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.CREATE_TODO,
            todo
        });
    },

    updateDraft(todo) {
        TodoDispatcher.dispatch({
            type: TodoActionTypes.UPDATE_DRAFT,
            todo
        });
    }
};

export default Actions;