import { fromJS, List } from "immutable";
import { profileActions } from "../actions";
import { profileRducer } from "../reducer";

const initialState = List();

describe("profile reducer", () => {
  test("show initial state by default", () => {
    expect(profileRducer(void 0, {})).toMatchInlineSnapshot(`
Immutable.Map {
  "id": "",
  "firstName": "",
  "lastName": "",
  "avatar": "",
  "token": "",
}
`);
  });

  test("show handle FILL_PROFILE", () => {
    expect(profileRducer(void 0, profileActions.fillProfile(__.userProfile)))
      .toMatchInlineSnapshot(`
Immutable.Map {
  "id": "TEST_ID",
  "firstName": "Walter",
  "lastName": "White",
  "avatar": "TEST_AVATAR",
  "token": "TEST_TOKEN",
}
`);
  });
  test("show handle UPDATE_AVATAR", () => {
    expect(profileRducer(void 0, profileActions.updateAvatar(__.url)))
      .toMatchInlineSnapshot(`
Immutable.Map {
  "id": "",
  "firstName": "",
  "lastName": "",
  "avatar": "https://www.url.com",
  "token": "",
}
`);
  });

  test("show handle CLEAR_PROFILE", () => {
    expect(
      profileRducer(void 0, profileActions.cleaProfile())
    ).toMatchInlineSnapshot(`Immutable.Map {}`);
  });
});
