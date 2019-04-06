import { groupId, invite, MAIN_URL } from './config';

export const api = {
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