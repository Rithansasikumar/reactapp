import React, { useState } from 'react';

const Table = ({ data, rowsPerPage }) => {
    // State for current page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the number of pages
    const totalPages = Math.ceil(data.length / rowsPerPage);

    // Function to go to the next page
    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    // Function to go to the previous page
    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    // Calculate the index of the first item on the current page
    const firstIndex = (currentPage - 1) * rowsPerPage;

    // Get the data for the current page
    const currentData = data.slice(firstIndex, firstIndex + rowsPerPage);

    return ( <
        div >
        <
        table border = "1"
        cellPadding = "10" >
        <
        thead >
        <
        tr >
        <
        th > ID < /th> <
        th > Name < /th> <
        th > Email < /th> < /
        tr > <
        /thead> <
        tbody > {
            currentData.map((item) => ( <
                tr key = { item.id } >
                <
                td > { item.id } < /td> <
                td > { item.name } < /td> <
                td > { item.email } < /td> < /
                tr >
            ))
        } <
        /tbody> < /
        table >

        { /* Pagination Controls */ } <
        div style = {
            { marginTop: '20px' }
        } >
        <
        button onClick = { prevPage }
        disabled = { currentPage === 1 } >
        Prev <
        /button> <
        span style = {
            { margin: '0 10px' }
        } >
        Page { currentPage }
        of { totalPages } <
        /span> <
        button onClick = { nextPage }
        disabled = { currentPage === totalPages } >
        Next <
        /button> < /
        div > <
        /div>
    );
};

export default Table;