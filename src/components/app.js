import React from 'react';
import { Component } from 'react';
import RepoList from './repo_list';
import AutoComplete from './autocomplete';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      activeRepoName: ''
    };
  }

  render() {
    return (
      <div>
        <AutoComplete searchString={this.state.activeRepoName} onSearchStringChange={searchString => this.setState({searchString})} />
        <RepoList repoName={this.state.searchString} onActiveRepoSelect={activeRepoName => this.setState({activeRepoName})} />
      </div>
    );
  }
}
