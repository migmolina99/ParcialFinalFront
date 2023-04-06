import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useApp } from "../components/utils/global.context";
import { useParams } from "react-router-dom";
import DentistCard from "../components/DentistCard";

const namespace = "detail-page";
const API_BASE_URL = "https://jsonplaceholder.typicode.com";

const Detail = ({ className }) => {
  const componentClassNames = classNames(namespace, className);
  const { id } = useParams();
  const { data: dentistData, getDentistsData } = useApp();

  useEffect(() => {
    getDentistsData(`${API_BASE_URL}/users/${id}`);
  }, []);

  return (
    <div className={componentClassNames}>
     <DentistCard type="detail" {...dentistData} /> 
    </div>
  );
};

Detail.propTypes = {
  className: PropTypes.string,
};

Detail.defaultProps = {
  className: "",
};

export default Detail;
