import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useApp } from "../components/utils/global.context";
import DentistsList from "../components/DentistsList";

const namespace = "home-page";
const API_BASE_URL = "https://jsonplaceholder.typicode.com";

const Home = ({ className }) => {
  const componentClassNames = classNames(namespace, className);
  const { 
    data: dentistData, 
    getDentistsData 
  } = useApp();

  useEffect(() => {
    getDentistsData(`${API_BASE_URL}/users`);
  }, []);

  return (
    <main className={componentClassNames}>
      <DentistsList dentistsList={dentistData} />
    </main>
  );
};

Home.propTypes = {
  className: PropTypes.string,
};

Home.defaultProps = {
  className: "",
};

export default Home;
