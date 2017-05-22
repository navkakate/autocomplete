import React from 'react';
import { Component } from 'react';
import RepoList from './repo_list';
import AutoComplete from './autocomplete';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      activeRepo: ''
    };
  }

  render() {
    return (
      <div>
        <AutoComplete  searchString={this.state.searchString}
                       onSearchStringChange={searchString => this.setState({searchString})} />
        <RepoList repoName={this.state.searchString} 
                  onActiveRepoSelect={activeRepo => this.setState({searchString: activeRepo.name})} />
      </div>
    );
  }
}
