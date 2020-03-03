import React from "react";
import { configure, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import serializer, { matchers } from "jest-emotion";
import List from "./";

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

configure({ adapter: new Adapter() });

expect.addSnapshotSerializer(serializer);
expect.extend(matchers);

describe("Testing <List", () => {
  it("should render", () => {
    expect(tree({ businesses: MOCK_BUSINESSES })).toHaveLength(1);
  });
  it("should match the snapshot", () => {
    expect(tree({ businesses: MOCK_BUSINESSES })).toMatchSnapshot();
  });
});

const tree = props => render(<List {...props} />);
