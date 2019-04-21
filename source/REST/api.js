import { groupId, invite, MAIN_URL } from './config';

export const api = {
    get token () {
        return localStorage.getItem('token');
    },
    auth: {
        signup (userinfo) {
            return fetch(`${MAIN_URL}/user/${groupId}`, {
                method:   'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-no-auth': groupId,
                },
                body:    JSON.stringify(userinfo),
            });
        },
        login (userinfo) {
            return fetch(`${MAIN_URL}/user/login`, {
                method:   'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-no-auth': groupId,
                },
                body:    JSON.stringify(userinfo),
            });
        },
        logout () {
            return fetch(`${MAIN_URL}/user/logout`, {
                method:   'GET',
                headers: {
                    'Authorization': this.token,
                },
            });
        },
        authenticate () {
            return fetch(`${MAIN_URL}/user/login`, {
                method:   'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-no-auth': groupId,
                },
                body:    JSON.stringify({token: this.token}),
            });
        },
    },
    posts: {
        fetch () {
            return fetch(`${MAIN_URL}/feed`, {
                method:   'GET',
                headers: {
                    'Authorization': this.token,
                },
            }
            );
        },
        create (comment) {
            return fetch(`${MAIN_URL}/feed`, {
                method:   'POST',
                body:    JSON.stringify({comment}),
                headers: {
                    'Authorization': this.token,
                    'Content-Type': 'application/json',
                },
                }
            );
        },
        remove (id) {
            return fetch(`${MAIN_URL}/feed/${id}`, {
                method:   'DELETE',
                headers: {
                    'Authorization': this.token,
                },
                }
            );
        },
        like (postId) {
            return fetch(`${MAIN_URL}/feed/like/${postId}`, {
                    method:   'PUT',
                    headers: {
                        'Authorization': this.token,
                    },
                }
            );
        },
    },
};