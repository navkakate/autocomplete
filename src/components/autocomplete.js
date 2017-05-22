import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AutoComplete extends Component {
  constructor(props) {
      super(props);
      this.state = { 
          searchString: ''
        };
  }

  render() {
    return (
    <div className="auto-complete input-group">
      <input type="text" 
             className="form-control" 
             placeholder="Search for..."
             value={this.props.searchString ? this.props.searchString : this.state.searchString }
             onChange={event => this.onInputChange(event.target.value)} />
    </div>
    );
  }

  onInputChange(searchString) {
      this.setState({searchString});
      this.props.onSearchStringChange(searchString);
  }
}

function mapStateToProps(state) {
  return { repos: state.repos };
}

export default connect(mapStateToProps, actions)(AutoComplete);
