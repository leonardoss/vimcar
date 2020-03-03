import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import { HashRouter as Router } from "react-router-dom";

import Layout from "./";

const MOCK_CHILDREN = <div>test</div>;

configure({ adapter: new Adapter() });

describe("Testing <Layout", () => {
  it("should render", () => {
    expect(tree({ children: MOCK_CHILDREN })).toHaveLength(1);
  });
  it("should match the snapshot", () => {
    expect(tree({ children: MOCK_CHILDREN })).toMatchSnapshot();
  });
});

const tree = props =>
  shallow(
    <Router>
      <Layout {...props} />
    </Router>
  );
