import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, render } from "enzyme";
import ButtonFilter from ".";

configure({ adapter: new Adapter() });

const MOCK_PROPS = {
  term: "burger",
  handleFilter: jest.fn()
};

describe("Testing <ButtonFilter", () => {
  it("should render", () => {
    expect(tree(MOCK_PROPS)).toHaveLength(1);
  });
  it("should match the snapshot", () => {
    expect(tree(MOCK_PROPS)).toMatchSnapshot();
  });
  it("should render all button with expected", () => {
    const wrapper = tree({ term: "all" });
    expect(wrapper.prop("class")).toMatch(/active/);
    expect(wrapper.text()).toBe("all");
  });
  it("should render other buttons with expected", () => {
    const wrapper = tree({ term: "pizza" });
    expect(wrapper.prop("class")).not.toMatch(/active/);
    expect(wrapper.text()).toBe("pizza");
  });
});

const tree = props => render(<ButtonFilter {...props} />);
