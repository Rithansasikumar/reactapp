import React from 'react';
import Table from './Table';

const App = () => {
    // Sample dynamic data (could come from an API, for example)
    const data = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
        { id: 3, name: 'Sam Brown', email: 'sam@example.com' },
        { id: 4, name: 'Chris Johnson', email: 'chris@example.com' },
        { id: 5, name: 'Amanda White', email: 'amanda@example.com' },
        { id: 6, name: 'Tom Lee', email: 'tom@example.com' },
        { id: 7, name: 'Sara Black', email: 'sara@example.com' },
        { id: 8, name: 'James Wilson', email: 'james@example.com' },
        { id: 9, name: 'Patricia Moore', email: 'patricia@example.com' },
        { id: 10, name: 'Michael Davis', email: 'michael@example.com' },
        { id: 11, name: 'Linda Garcia', email: 'linda@example.com' },
        { id: 12, name: 'David Martinez', email: 'david@example.com' },
    ];

    const rowsPerPage = 5; // Number of rows per page

    return ( <
        div style = {
            { margin: '20px' }
        } >
        <
        h1 > Dynamic Table with Pagination < /h1> <
        Table data = { data }
        rowsPerPage = { rowsPerPage }
        /> < /
        div >
    );
};

export default App;