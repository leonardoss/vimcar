module.exports = {
  bail: true,
  collectCoverage: false,
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: -10
    }
  },
  forceCoverageMatch: ["**/*.test.(jsx|js)"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/__mocks__/fileMock.js"
  },
  snapshotSerializers: ["jest-emotion", "enzyme-to-json/serializer"],
  testEnvironment: "jsdom",
  verbose: false
};
