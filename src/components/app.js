import React from 'react';
import { Component } from 'react';
import RepoList from './repo_list';
import AutoComplete from './autocomplete';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRepo: {
        name: ''
      }
    };
  }

  render() {
    return (
      <div>
        <AutoComplete  searchString={this.state.activeRepo.name}
                       onSearchStringChange={searchString => this.setState({activeRepo: {
                         name: searchString
                       }})} />
        <RepoList activeRepo={this.state.activeRepo} 
                  onActiveRepoSelect={activeRepo => this.setState({activeRepo: activeRepo})} />
                  
      </div>
    );
  }
}
