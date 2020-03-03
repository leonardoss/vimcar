import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, render } from "enzyme";
import SectionMain from "./";

configure({ adapter: new Adapter() });

const MOCK_BUSINESSES = [
  {
    name: "test",
    image_url: "http://www.local.com/photo",
    url: "http://www.local.com",
    categories: ["burguer", "drinks"],
    rating: 5,
    price: "€€"
  },
  {
    name: "test 2 name",
    image_url: "http://www.local.com/photo2",
    url: "http://www.local.com/34",
    categories: ["sushi", "pizza"],
    rating: 4.5,
    price: "€"
  }
];

describe("Testing <SectionMain", () => {
  it("should render", () => {
    expect(tree({ businesses: MOCK_BUSINESSES })).toHaveLength(1);
  });
  it("should match the snapshot", () => {
    expect(tree({ businesses: MOCK_BUSINESSES })).toMatchSnapshot();
  });
});

const tree = props => render(<SectionMain {...props} />);
