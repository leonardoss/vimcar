import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, render } from "enzyme";
import Card from "./";

configure({ adapter: new Adapter() });

const MOCK_BUSINESSES = {
  name: "test",
  image_url: "http://www.local.com/photo",
  url: "http://www.local.com",
  categories: ["burguer", "drinks"],
  rating: 5,
  price: "€€"
};

describe("Testing <Card", () => {
  it("should render", () => {
    expect(tree({ item: MOCK_BUSINESSES })).toHaveLength(1);
  });
  it("should match the snapshot", () => {
    expect(tree({ item: MOCK_BUSINESSES })).toMatchSnapshot();
  });
});

const tree = props => render(<Card {...props} />);
