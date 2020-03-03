import axios from "axios";
import { runSaga } from "redux-saga";

import { fetchBusinesses } from "./home";

jest.mock("axios");

const { get } = axios;
const initialAction = {
  searchOptions: {
    location: "Berlin-Germany",
    limit: 10,
    term: "restaurants",
    categories: `categories`
  },
  apiPath: "/mock"
};
const MOCK_URL = "/mock";

describe("testing Sagas", () => {
  beforeEach(() => {
    axios.get.mockClear();
  });
  it("should call fetchBusinesses with success", async () => {
    mockGet();
    const dispatched = await recordSaga(fetchBusinesses, initialAction);
    expect(get.mock.calls).toHaveLength(1);
    expect(get.mock.calls[0]).toContainEqual(MOCK_URL);
  });
  it("should handle error in fetchBusinesses in case of fail", async () => {
    mockGet(true);
    const dispatched = await recordSaga(fetchBusinesses, initialAction);
    expect(get.mock.calls).toHaveLength(1);
    expect(get.mock.calls[0]).toContainEqual(MOCK_URL);
  });
});

const recordSaga = async (saga, payload) => {
  const dispatched = [];
  await runSaga(
    {
      dispatch: action => dispatched.push(action)
    },
    saga,
    payload
  ).toPromise();
  return dispatched;
};
const mockSuccessResponse = { body: "bodyText", data: "12345" };
const mockErrorResponse = { error: "error" };
const mockXhrImplementation = reject => {
  return reject
    ? Promise.reject(mockErrorResponse)
    : Promise.resolve({ data: mockSuccessResponse });
};
const mockGet = (reject = false) => {
  axios.get.mockImplementation(() => mockXhrImplementation(reject));
};
