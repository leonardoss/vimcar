import React from "react";

import Loading from "../../../components/common/Loading";
import List from "../../widgets/List";

const SectionMain = props => {
  const { businesses, loading } = props;
  return (
    <main role="main" className="section-main">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 col-md-offset-1">
            {loading ? <Loading /> : <List businesses={businesses} />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SectionMain;
