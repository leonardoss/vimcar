import React from "react";

const ButtonFilter = props =>
  props.term === "all" ? (
    <button className="btn active" onClick={e => props.handleFilter(e, "")}>
      {props.term}
    </button>
  ) : (
    <button className="btn" onClick={e => props.handleFilter(e, props.term)}>
      {props.term}
    </button>
  );

export default ButtonFilter;
