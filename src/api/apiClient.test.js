import axios from "axios";

import { get } from "./apiClient";

jest.mock("axios");

const successFn = jest.fn();
const errorFn = jest.fn();
const MOCK_ENDPOINT = "mock-endpoint";

axios.create = jest.fn().mockImplementation(() => axios);

describe("testing ApiClient", () => {
  beforeEach(() => {
    axios.get.mockClear();
    axios.post.mockClear();
    successFn.mockReset();
    errorFn.mockReset();
  });
  it("should perform a get", async () => {
    mockGet();
    const options = { data: "123" };

    await get(MOCK_ENDPOINT, options)
      .then(successFn)
      .catch(errorFn);

    expect(successFn).toHaveBeenCalledTimes(1);
    expect(errorFn).toHaveBeenCalledTimes(0);
  });
  it("should perform a failed get", async () => {
    mockGet(true);
    const options = { data: "123" };

    await get(MOCK_ENDPOINT, options)
      .then(successFn)
      .catch(errorFn);

    expect(errorFn).toHaveBeenCalledTimes(1);
    expect(successFn).toHaveBeenCalledTimes(0);
  });
});

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
