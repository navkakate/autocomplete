import React from 'react';
import { Component } from 'react';
import RepoList from './repo_list';
import AutoComplete from './autocomplete';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    };
  }

  render() {
    return (
      <div>
        <AutoComplete onSearchStiringChange={searchString => this.setState({searchString})} />
        <RepoList repoName={this.state.searchString} />
      </div>
    );
  }
}
