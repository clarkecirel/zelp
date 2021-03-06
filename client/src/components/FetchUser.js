import React from 'react';
import axios from 'axios'
import { AuthConsumer } from '../providers/AuthProvider'

class FetchUser extends React.Component {
  state = { loaded: false };

  componentDidMount() { 
    if (this.props.auth.authentication) {
      this.loaded();
    } else {
      if (this.checkLocalToken()) {
        axios.get('/api/auth/validate_token')
        .then ( res => {
          this.props.auth.setUser(res.data.data);
          this.loaded();
        })
        .catch ( err => {
          this.loaded();
        })
      }
          else {
            this.loaded()
      } 
    }
  }

  loaded = () => {
    this.setState({ loaded: true })
  }

  checkLocalToken = () => {
    const token = localStorage.getItem('access-token')
    return token;
  }

  render () {
    return this.state.loaded ? this.props.children : null
  };
};

const ConnectedFetchUser = (props) => (
  <AuthConsumer>
    { auth => (
      <FetchUser {...props} auth={auth} />
    )}
  </AuthConsumer>
)

export default ConnectedFetchUser;