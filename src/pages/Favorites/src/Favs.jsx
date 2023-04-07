import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import DentistList from "../../../components/DentistsList";
import { useApp } from "../../../context/AppContext";

const namespace = "favorites-page";

const Favs = ({ className }) => {
  const componentClassnames = classNames(namespace, className);
  const { favorites: favoriteDentists } = useApp();

  return (
    <main className={componentClassnames}>
      <h1 className={`${namespace}__title`}>Dentists Favs</h1>
      <DentistList
        emptyMessage="The favorites list is empty"
        dentistsList={favoriteDentists}
      />
    </main>
  );
};

Favs.propTypes = {
  className: PropTypes.string,
};

Favs.defaultProps = {
  className: "",
};

export default Favs;
