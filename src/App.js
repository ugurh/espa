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

  const [searchTerm, setSearchTerm] = React.useState(
    localStorage.getItem('search') || 'React'
  ); // initial state : React


  // React’s useEffect Hook
  React.useEffect(() => {
    localStorage.setItem('search', searchTerm);
  }, [searchTerm]);


  const handleSearch = event => {
    setSearchTerm(event.target.value);
    //  localStorage.setItem('search', searchTerm);
  };

  const searchedStories = stories.filter(story => {
    return story.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  return (
    <div className="App">

      <h1>My Hacker Stories</h1>

      <Search search={handleSearch} searchTerm={searchTerm} />
      <hr />

      <List list={searchedStories} />

    </div>
  );
}


export default App;
