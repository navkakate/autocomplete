import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class RepoList extends Component {
  componentWillMount() {
    this.props.fetchRepos();
  }

  renderRepo(repo) {
    return (
      <div className="card card-block" key={repo.id}>
        <h4 className="card-title">{repo.name}</h4>
        <p className="card-text">{repo.description}</p>        
        <p className="card-text">{repo.owner.login}</p>
        <a className="btn btn-primary" href={repo.url}>Go to Repo</a>
      </div>
    );
  }

  render() {
    return (
      <div className="repo-list">
        {this.props.repos.map(this.renderRepo)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { repos: state.repos };
}

export default connect(mapStateToProps, actions)(RepoList);
