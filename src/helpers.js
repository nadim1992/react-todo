export function getTodaysDate() {
    const today = new Date();
    const day   = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');  // January is 0!

    return `${today.getFullYear()}-${month}-${day}`;
}

