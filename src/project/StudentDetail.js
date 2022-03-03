import React, { Component } from 'react'

class StudentDetail extends Component {

    state = {
        name: "",
        age: '',
        course: '',
        batch: '',
        user: []
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <>
                <div className='stddiv'>
                    <label className="label" for="name">Name : </label>
                    <input type="text" id="name" className='inp' name="name" placeholder='Enter your name' onChange={this.handleChange} value={this.state.name} />
                    <br></br><br></br>
                    <label className="label" for="dept">Age : </label>
                    <input type="text" id="age" className='inp' name="age" placeholder='Your Age' onChange={this.handleChange} value={this.state.dept} />
                    <br></br><br></br>
                    <label className="label" for="rating">Course : </label>
                    <input type="text" id="course" className='inp' name="course" placeholder='Course' onChange={this.handleChange} value={this.state.rating} />
                    <br></br><br></br>
                    <label className="label" for="rating">Batch : </label>
                    <input type="text" id="batch" className='inp' name="batch" placeholder='Batch' onChange={this.handleChange} value={this.state.rating} />
                    <br></br><br></br>

                </div>
                <div className='btndiv'>
                <button className='stdButton'>Cancel </button>
                <button className='stdButton'>Update </button>
                </div>
            </>
        )
    }
}

export default StudentDetail