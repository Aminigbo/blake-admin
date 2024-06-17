import React, { useState } from 'react';
import '../style/table.css';
import { IoArrowForward } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

// const data = [
//     { id: 1, firstName: 'Jon', lastName: 'Snow', age: 35, fullName: 'Jon Snow' },
//     { id: 2, firstName: 'Cersei', lastName: 'Lannister', age: 42, fullName: 'Cersei Lannister' },
//     { id: 3, firstName: 'Jaime', lastName: 'Lannister', age: 45, fullName: 'Jaime Lannister' },
//     { id: 4, firstName: 'Arya', lastName: 'Stark', age: 16, fullName: 'Arya Stark' },
//     { id: 5, firstName: 'Daenerys', lastName: 'Targaryen', age: 43, fullName: 'Daenerys Targaryen' },
//     { id: 1, firstName: 'Jon', lastName: 'Snow', age: 35, fullName: 'Jon Snow' },
//     { id: 2, firstName: 'Cersei', lastName: 'Lannister', age: 42, fullName: 'Cersei Lannister' },
//     { id: 3, firstName: 'Jaime', lastName: 'Lannister', age: 45, fullName: 'Jaime Lannister' },
//     { id: 4, firstName: 'Arya', lastName: 'Stark', age: 16, fullName: 'Arya Stark' },
//     { id: 5, firstName: 'Daenerys', lastName: 'Targaryen', age: 43, fullName: 'Daenerys Targaryen' },
//     { id: 1, firstName: 'Jon', lastName: 'Snow', age: 35, fullName: 'Jon Snow' },
//     { id: 2, firstName: 'Cersei', lastName: 'Lannister', age: 42, fullName: 'Cersei Lannister' },
//     { id: 3, firstName: 'Jaime', lastName: 'Lannister', age: 45, fullName: 'Jaime Lannister' },
//     { id: 4, firstName: 'Arya', lastName: 'Stark', age: 16, fullName: 'Arya Stark' },
//     { id: 5, firstName: 'Daenerys', lastName: 'Targaryen', age: 43, fullName: 'Daenerys Targaryen' },
//     // Add more data here...
// ];

const Table = ({
    users
}) => {
    const [selectedIds, setSelectedIds] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const data = users.filter(e => e.isVendor == true)

    const handleSelectAll = (event) => {
        if (event.target.checked) {
            setSelectedIds(data.map((row) => row.id));
        } else {
            setSelectedIds([]);
        }
    };

    const handleSelectRow = (event, id) => {
        if (event.target.checked) {
            setSelectedIds([...selectedIds, id]);
        } else {
            setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
        }
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setCurrentPage(1);
    };

    const handleChangePage = (newPage) => {
        setCurrentPage(newPage);
    };

    const totalPages = Math.ceil(data.length / rowsPerPage);
    const currentData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    return (
        <div className="table-container">
            {/* {console.log(AllVendors)} */}
            <table>
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox" onChange={handleSelectAll} checked={selectedIds.length === data.length} />
                        </th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((row) => (
                        <tr key={row.id}>
                            <td>
                                <input
                                    type="checkbox"
                                    checked={selectedIds.includes(row.id)}
                                    onChange={(event) => handleSelectRow(event, row.id)}
                                />
                            </td>
                            <td>{row.userID.slice(-5)}</td>
                            <td>{row.name}</td>
                            <td>{row.phone}</td>
                            <td>....{row.email.slice(-15)}</td>
                            <td style={{}} >
                                <div style={{ height: 20, width: 20, backgroundColor: row.allowedVendor ? "mediumseagreen" : "crimson", borderRadius: 10, margin: "auto" }} /></td>
                            <td
                                onClick={() => {
                                    console.log(row.userID)

                                }}
                                style={{
                                    cursor: 'pointer'
                                }} >
                                <NavLink to='/vendor-profile' className='link' activeclassName='active'>
                                    <IoArrowForward />
                                </NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination-controls">
                <label>
                    Rows per page:
                    <select value={rowsPerPage} onChange={handleChangeRowsPerPage}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                        <option value={25}>25</option>
                        <option value={30}>30</option>
                    </select>
                </label>
                <button onClick={() => handleChangePage(Math.max(currentPage - 1, 1))} disabled={currentPage === 1}>
                    Previous
                </button>
                <button onClick={() => handleChangePage(Math.min(currentPage + 1, totalPages))} disabled={currentPage === totalPages}>
                    Next
                </button>
                <div>
                    {currentPage} of {totalPages}
                </div>
            </div>
        </div>
    );
};

export default Table;