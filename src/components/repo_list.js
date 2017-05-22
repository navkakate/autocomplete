import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class RepoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRepo: {}
    }
  }

  componentWillMount() {
    this.props.fetchRepos();
  }

  renderRepo = (repo) => {
    return (
      <li className="list-group-item list-group-item-action" 
         key={repo.id} 
         onClick={this.handleClick.bind(this, repo)} >
        <h4>{repo.name}</h4>
        <p>{repo.description}</p>        
        <p><strong>Author:</strong> {repo.owner.login}</p>
      </li>
    );
  }

  handleClick(activeRepo) {
    this.setState({activeRepo});
    this.props.onActiveRepoSelect(activeRepo);
  }

  render() {
    if(!this.props.repoName) {
      return null;
    }

    const { repos, repoName }  = this.props;

    const reposFiltered = repos.filter(repo => repo.name.indexOf(repoName) > -1);
    
    if(reposFiltered.length === 1) {
      return null;
    }
 
    return (
      <ul className="repo-list list-group">
        {reposFiltered.map(this.renderRepo)}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return { repos: state.repos };
}

export default connect(mapStateToProps, actions)(RepoList);
