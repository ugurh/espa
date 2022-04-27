import './App.css';
import Course from './components/Course';
import React from 'react';
import Search from './components/Search';

class Developer {

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getName() {
    return this.firstName + ' ' + this.lastName;
  }

}


const welcome = {
  greeting: 'Hey',
  title: 'React',
};

const authors = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const handleChange = (event) =>{
  console.log(event.target.value)
}


function App() {
  return (
    <div className="App">
      <hr />
      <h1> {welcome.greeting}, {welcome.title} </h1>
      <hr />
      <Search onSearch={handleChange} />
      <hr />
      {/* creating an instance of List component */}
      <List />
      <hr />
      <Author authors={authors}/>
      <hr />
      <Course />
      <hr />
    </div>
  );
}

function List() {
    // class instantiation
    const robin = new Developer('Robin', 'Wieruch');

    // another class instantiation
    const dennis = new Developer('Dennis', 'Wieruch');

    return (
      <div>
        {robin.getName()};
        {dennis.getName()};
      </div>
    );
}


const Author = (props) =>
  props.authors.map(item => (
    <div key={item.objectID}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </div>
  ));
export default App;
