import { put, apply } from "redux-saga/effects";
import { cloneableGenerator } from "redux-saga/utils";

import { api } from "../../../REST";
import { usersActions } from "../actions";
import { uiActions } from "../../ui/actions";
import { fetchUsers } from "../saga/workers";

const fetchUsersAction = usersActions.fetchUsersAsync();
const saga = cloneableGenerator(fetchUsers)(fetchUsersAction);

let clone = null;

describe("fetchUsers saga", () => {
    describe("should pass until response received", () => {
        test('should dispatch "startFetching" action', () => {
            expect(saga.next().value).toEqual(put(uiActions.startFetching()));
        });
        test("should call a fetch request", () => {
            expect(saga.next().value).toEqual(
                apply(api, api.users.fetch)
            );
            clone = saga.clone();
        });
    });

    describe("should handle a 400 status response", () => {
        test("a fetch request should return 400 status response", () => {
            expect(clone.next(__.fetchResponseFail400).value).toEqual(
                apply(__.fetchResponseFail400, __.fetchResponseFail400.json)
            );
        });
        test("should contain a response data object", () => {
            expect(clone.next(__.responseDataFail).value).toEqual(
                put(uiActions.emitError(__.error, "fetchUsers worker"))
            );
        });
        test('should dispatch "stopFetching" action', () => {
            expect(clone.next().value).toEqual(put(uiActions.stopFetching()));
        });

        test("should finish", () => {
            expect(clone.next().done).toBe(true);
        });
    });

    describe("should handle a 200 status response", () => {
        test("a fetch request should return 200 status response data object", () => {
            expect(saga.next(__.fetchResponseSuccess).value).toEqual(
                apply(__.fetchResponseSuccess, __.fetchResponseSuccess.json)
            );
        });

        test('should dispatch "fillUsers" action', () => {
            expect(saga.next(__.responseDataSuccess).value).toMatchInlineSnapshot();
        });

        test('should dispatch "stopFetching" action', () => {
            expect(saga.next().value).toMatchInlineSnapshot();
        });

        test("should finish", () => {
            expect(saga.next().done).toBe(true);
        });
    });
});
