import { types } from './types';

export const profileActions = {
    fillProfile: (profile)=> {
        return {
            type: types.FILL_PROFILE,
            payload: profile,
        };
    },
    cleaProfile: ()=> {
        return {
            type: types.CLEAR_PROFILE,
        };
    },
};