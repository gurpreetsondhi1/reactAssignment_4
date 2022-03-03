import React, { Component } from 'react';
import './app.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StudentDetail from './StudentDetail';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('John', 26, 'MERN', "October", 'edit'),
    createData('Doq', 21, 'MERN', "November", 'edit'),
    createData('Biden', 25, 'MERN', "September", 'edit'),
    createData('Trump', 27, 'MERN', "September", 'edit'),
    createData('Novo', 22, 'MERN', "November", 'edit'),
    createData('Scout', 24, 'MERN', "October", 'edit'),
];

class Student extends Component {

    state = {
        val: true
    }
    handleClick=()=> {
        this.setState({
            val: !this.state.val
        })

    }
    render() {
        return (
            <>
                {this.state.val && (<>
                    <div>
                        <h1 className='stdText'>Student Details</h1>
                        <button className='stdButton' onClick={this.handleClick}>Add new Student</button>
                    </div>
                    <TableContainer component={Paper} className='table'>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Age</TableCell>
                                    <TableCell align="right">Course</TableCell>
                                    <TableCell align="right">Batch</TableCell>
                                    <TableCell align="right">Change</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>)}
                {!this.state.val && (
                    <StudentDetail />
                )}
            </>
        );
    }
}

export default Student