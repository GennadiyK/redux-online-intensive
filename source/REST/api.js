import { groupId, invite, MAIN_URL } from './config';

export const api = {
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
    },
    posts: {
        fetch () {
            return fetch(`${MAIN_URL}/feed`, {
                method:   'GET',
                headers: {
                    'x-no-auth': groupId,
                },
            }
            );
        },
        create (comment) {
            return fetch(`${MAIN_URL}/feed`, {
                method:   'POST',
                body:    JSON.stringify({comment}),
                headers: {
                    'Authorization': invite,
                    'x-no-auth': groupId,
                    'Content-Type': 'application/json',
                },
                }
            );
        },
    },
};