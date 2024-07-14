function setTableWidth(table) {
    const columns = table.rows[0].cells.length;

    let maxWidth = 0;
    const row = table.rows[0];

    // Calculate the maximum width
    for (let i = 0; i < columns; i++) {
        const cell = row.cells[i];
        const cellWidth = cell.offsetWidth;
        if (cellWidth > maxWidth) {
            maxWidth = cellWidth;
        }
    }

    // Set each column to the maximum width
    for (let row of table.rows) {
        for (let i = 0; i < columns; i++) {
            row.cells[i].style.width = `${maxWidth}px`;
        }
    }
};


async function eventListener() {
    let tables =  document.getElementsByClassName("table")
    for (let table of tables) {
        console.log(`table: ${table}`)
        setTableWidth(table);
    }
};

export { eventListener } 

document.addEventListener('DOMContentLoaded', eventListener);
