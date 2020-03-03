import React from "react";

import Card from "../Card";

const renderList = itens =>
  itens.map((item, index) => <Card key={index} item={item} />);

const List = props => (
  <div className="list" aria-label="Bussiness">
    {renderList(props.businesses)}
  </div>
);

export default List;
