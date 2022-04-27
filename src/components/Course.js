import React, { Component } from 'react';

class Course extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: "React",
            author: "Robin",
            website: "Educative"
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <p>Author:{this.state.author} has written a  {this.state.name} course on {this.state.website}.</p>
          </div>
        );
    }
}

export default Course;