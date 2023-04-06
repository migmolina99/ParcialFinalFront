import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import DentistCard from "../../DentistCard";

const namespace = "dentists-list";

const DentistsList = ({ dentistsList, className }) => {
  const componentClassnames = classNames(namespace, className);

  return (
    <div className={componentClassnames}>
      {dentistsList &&
        dentistsList.length > 0 &&
        dentistsList.map((dentist) => (
          <DentistCard key={dentist.id} {...dentist} />
        ))}
    </div>
  );
};

DentistsList.propTypes = {
  dentistsList: PropTypes.arrayOf(PropTypes.shape({})),
  className: PropTypes.string,
};

DentistsList.defaultProps = {
  className: "",
};

export default DentistsList;
