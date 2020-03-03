const mockAxios = jest.genMockFromModule("axios");

mockAxios.create = jest.fn(() => mockAxios);

export default {
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: jest.fn(() => Promise.resolve({ data: {} })),
  defaults: {
    baseURL: "http://mock.endpoint.com",
    headers: {
      common: {
        Authorization: "API_TOKEN"
      }
    }
  }
};
