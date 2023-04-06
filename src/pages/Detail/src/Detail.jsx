import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import { useApp } from "../../../components/utils/global.context";
import DentistCard from "../../../components/DentistCard";
import Loading from "../../../components/Loading";

const namespace = "detail-page";
const API_BASE_URL = "https://jsonplaceholder.typicode.com";

const Detail = ({ className }) => {
  const componentClassNames = classNames(namespace, className);
  const { id } = useParams();
  const { data: dentistData, loading, getDentistsData } = useApp();

  useEffect(() => {
    getDentistsData(`${API_BASE_URL}/users/${id}`);
  }, []);

  return (
    <main className={componentClassNames}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <h1 className={`${namespace}__title`}>Detail Dentist {id}</h1>
          <DentistCard type="detail" {...dentistData} />
        </>
      )}
    </main>
  );
};

Detail.propTypes = {
  className: PropTypes.string,
};

Detail.defaultProps = {
  className: "",
};

export default Detail;
