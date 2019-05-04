// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


import Private from './Private';
import Public from './Public';
import { authAction} from "../bus/auth/actions";
import { soketActions } from "../bus/socket/actions";

import { Loading } from '../components';

import { socket, joinSocketChannel } from '../bus/init/socket';

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.get('isAuthenticated'),
        isInitialized: state.auth.get('isInitialized')
    };
}

const mapDispatchToProps = {
    initializeAsync: authAction.initializeAsync,
    ...soketActions,
}

@hot(module)
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
    componentDidMount() {
        const { listenConnection, initializeAsync } = this.props;

        initializeAsync();
        listenConnection();
        joinSocketChannel();
    }
    componentWillUnmount() {
        socket.removeListener('connect');
        socket.removeListener('disconnect');
    }

    render () {
        const { isAuthenticated, isInitialized, listeningPosts } = this.props;

        if (!isInitialized) {
            return <Loading/>;
        }

        return isAuthenticated ? <Private listeningPosts = { listeningPosts }/> : <Public />;
    }
}
