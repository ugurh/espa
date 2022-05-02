import './App.css';
import React from 'react';
import List from './components/List';
import Search from './components/Search';

function App() {
  const stories = [
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

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(story =>{
    return story.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
  });

  return (
    <div className="App">
  
    <h1>My Hacker Stories</h1>

    <Search search={handleSearch} />
    <p>{searchTerm}</p>
    <hr />
    <List list={searchedStories} />

    </div>
  );
}


export default App;
