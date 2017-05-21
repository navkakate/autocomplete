import React from 'react';
import { Component } from 'react';
import RepoList from './repo_list';
import AutoComplete from './autocomplete';

export default class App extends Component {
  searchRepo(searchString) {
    console.log(searchString);
  }

  render() {
    return (
      <div>
        <AutoComplete onSearchStiringChange={searchString => this.searchRepo(searchString)} />
        <RepoList />
      </div>
    );
  }
}
