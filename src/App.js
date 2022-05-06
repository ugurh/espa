import './App.css';
import React from 'react';
import List from './components/List';
import Search from './components/Search'
import useSemiPersistentState from './hooks/UseSemiPersistentState'
import Counter from './components/Counter';
import UrlList from './components/UrlList'
import OpenClose from './hooks/OpenClose'

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

  const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
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

      <hr />
      <Counter />
      <hr />
      <UrlList />
      <hr />
      <OpenClose />
    </div>
  );
}


export default App;
