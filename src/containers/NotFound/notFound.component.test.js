import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import { HashRouter as Router } from "react-router-dom";

import NotFound from "./";

configure({ adapter: new Adapter() });

describe("Testing <NotFound container", () => {
  it("should render", () => {
    expect(tree()).toHaveLength(1);
  });
  it("should match the snapshot", () => {
    expect(tree()).toMatchSnapshot();
  });
});

const tree = () =>
  shallow(
    <Router>
      <NotFound />
    </Router>
  );
