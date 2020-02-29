import { Container } from 'flux/utils';
import AppView from '../views/AppView';
import TodoActions from '../data/TodoActions';
import FormModeStore from '../data/stores/FormModeStore';
import TodoDraftStore from '../data/stores/TodoDraftStore';
import TodoStore from '../data/stores/TodoStore';

function getStores() {
    return [
        FormModeStore,
        TodoDraftStore,
        TodoStore
    ];
}

function getState() {
    return {
        mode: FormModeStore.getState(),
        todo: TodoDraftStore.getState(),
        todos: TodoStore.getState(),

        onChangeMode: TodoActions.changeMode,
        onCreateTodo: TodoActions.createTodo,
        onUpdateDraft: TodoActions.updateDraft,
    };
}

export default Container.createFunctional(AppView, getStores, getState);