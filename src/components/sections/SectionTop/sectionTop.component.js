import React from "react";

import ButtonFilter from "../../common/ButtonFilter";

import { CATEGORIES } from "../../../containers/Home";

const SectionTop = props => {
  const { handleFilter } = props;
  const { ALL, PIZZA, BURGERS, SUSHI } = CATEGORIES;
  return (
    <section className="section-top">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 col-md-offset-1">
            <h2 className="main-title">Top 10 restaurants in Berlin</h2>
            <div className="box-filter">
              <span>Filter by: </span>
              <ButtonFilter handleFilter={handleFilter} term={ALL} />
              <ButtonFilter handleFilter={handleFilter} term={PIZZA} />
              <ButtonFilter handleFilter={handleFilter} term={BURGERS} />
              <ButtonFilter handleFilter={handleFilter} term={SUSHI} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTop;
