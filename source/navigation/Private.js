// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// Pages
import { Profile, Feed, NewPassword } from '../pages';

import { book } from './book'

import { socket } from '../bus/init/socket'

export default class Private extends Component {
    componentDidMount () {
        console.log(this.props)
        const { listeningPosts } = this.props;

        listeningPosts();
    }

    componentWillUnmount () {
        socket.removeListener('create');
    }

    render () {
        return (
            <Switch>
                <Route path={book.profile} component={Profile} />
                <Route path={book.feed} component={Feed} />
                <Route path = { book.newPassword } component = { NewPassword } />
                <Redirect to = { book.feed } />
            </Switch>
        );
    }
}
