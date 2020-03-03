import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import * as actions from "../../actions";
import { initialState } from "../../reducers/homeReducer";

import Home from "./";

const mockStore = configureStore();
const store = mockStore(initialState, actions);

configure({ adapter: new Adapter() });

describe("Testing <Home container", () => {
  it("should render", () => {
    expect(tree()).toHaveLength(1);
  });
  it("should match the snapshot", () => {
    expect(tree()).toMatchSnapshot();
  });
});

const tree = () =>
  shallow(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  );
