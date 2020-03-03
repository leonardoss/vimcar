import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, render } from "enzyme";
import Header from "./";

configure({ adapter: new Adapter() });

describe("Testing <Header", () => {
  it("should render", () => {
    expect(tree()).toHaveLength(1);
  });
  it("should match the snapshot", () => {
    expect(tree()).toMatchSnapshot();
  });
});

const tree = () => render(<Header />);
