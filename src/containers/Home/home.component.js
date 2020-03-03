import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { apiPath } from "../../api/apiClient";
import * as actions from "../../actions";

import Layout from "../../layouts";
import SectionTop from "../../components/sections/SectionTop";
import SectionMain from "../../components/sections/SectionMain";

const CSS_CLASS_ACTIVE = "active";
export const CATEGORIES = {
  ALL: "all",
  PIZZA: "pizza",
  BURGERS: "burgers",
  SUSHI: "sushi"
};

const filterArray = (businesses, term) =>
  businesses.filter(item => item.categories.find(item => item.alias === term));
const handleFilter = (businesses, term) =>
  term ? filterArray(businesses, term) : businesses;
const { PIZZA, BURGERS, SUSHI } = CATEGORIES;

const Home = props => {
  const { fetchBusinesses, setFilterSearch, loading, businesses } = props;
  // just to simlulate a possible user input, we could set these params in a onChange in a <select>
  const searchOptions = {
    params: {
      location: "Berlin-Germany",
      limit: 10,
      term: "restaurants",
      categories: `${PIZZA},${BURGERS},${SUSHI}`
    }
  };
  useEffect(() => {
    //here I pass the options to search in the API and a enum to the path we want
    fetchBusinesses(searchOptions, apiPath.BUSSINESS_SEARCH);
  }, []);

  const handleFilter = (e, filter) => {
    const eleActive = document.querySelector(`.${CSS_CLASS_ACTIVE}`);
    if (eleActive) {
      eleActive.classList.remove(CSS_CLASS_ACTIVE);
    }
    e.target.classList.add(CSS_CLASS_ACTIVE);

    setFilterSearch(filter);
  };

  return (
    <Layout>
      <>
        <SectionTop handleFilter={handleFilter} />
        <SectionMain businesses={businesses} loading={loading} />
      </>
    </Layout>
  );
};

Home.propTypes = {
  businesses: PropTypes.array,
  loading: PropTypes.bool
};

Home.defaultProps = {
  businesses: [],
  laoding: false
};

// here I applied the logic to filter results
export default connect(
  store => ({
    businesses: handleFilter(
      store.BusinessesReducer.businesses,
      store.BusinessesReducer.termFiltered
    ),
    loading: store.BusinessesReducer.loading
  }),
  {
    ...actions
  }
)(Home);
