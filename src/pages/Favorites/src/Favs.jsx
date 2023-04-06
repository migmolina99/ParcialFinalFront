import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { useApp } from "../../../components/utils/global.context";
import DentistList from "../../../components/DentistsList";

const namespace = "favorites-page";

const Favs = ({ className }) => {
  const componentClassnames = classNames(namespace, className);
  const { favorites: favoriteDentists } = useApp();

  return (
    <main className={componentClassnames}>
      <h1 className={`${namespace}__title`}>Dentists Favs</h1>
      <DentistList dentistsList={favoriteDentists} />
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
