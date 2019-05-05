import { uiActions } from "../actions";
import { uiReducer } from "../reducer";

describe("ui reducer", () => {
  test("show initial state by default", () => {
    expect(uiReducer(void 0, {})).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
}
`);
  });

  test("show handle START_FETCHING", () => {
    expect(uiReducer(void 0, uiActions.startFetching())).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": true,
  "isOnline": false,
}
`);
  });

  test("show handle STOP_FETCHING", () => {
    expect(uiReducer(void 0, uiActions.stopFetching())).toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
}
`);
  });

  test("show handle EMIT_ERROR", () => {
    expect(uiReducer(void 0, uiActions.emitError(__.error, null)))
      .toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
}
`);
  });

  test("show handle SET_ONLINE_STATE", () => {
    expect(uiReducer(void 0, uiActions.setOnlineState()))
      .toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": true,
}
`);
  });

  test("show handle SET_OFFLINE_STATE", () => {
    expect(uiReducer(void 0, uiActions.setOfflineState()))
      .toMatchInlineSnapshot(`
Immutable.Map {
  "isFetching": false,
  "isOnline": false,
}
`);
  });
});
