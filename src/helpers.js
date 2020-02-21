export function getTodaysDate() {
    const today = new Date();
    const day   = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');  // January is 0!

    return `${today.getFullYear()}-${month}-${day}`;
}

/**
 * Sort functions
 * ============== 
 */

export function sortByDateAsc(todos) {
    return todos.sort((a, b) => a.date > b.date ? 1 : -1);
}

export function sortByDateDesc(todos) {
    return todos.sort((a, b) => a.date > b.date ? -1 : 1);
}

export function sortByNameAsc(todos) {
    return todos.sort((a, b) => a.name > b.name ? 1 : -1);
}

export function sortByNameDesc(todos) {
    return todos.sort((a, b) => a.name > b.name ? -1 : 1);
}

export function sortByPriorityAsc(todos) {
    return todos.sort((a, b) => a.priority > b.priority ? 1 : -1);
}

export function sortByPriorityDesc(todos) {
    return todos.sort((a, b) => a.priority > b.priority ? -1 : 1);
}
