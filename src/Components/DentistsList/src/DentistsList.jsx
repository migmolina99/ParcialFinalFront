import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import DentistCard from "../../DentistCard";

const namespace = "dentists-list";

const DentistsList = ({ dentistsList, emptyMessage, className }) => {
  const componentClassnames = classNames(namespace, className);
  console.log('list ---> ', dentistsList);

  return (
    <div className={componentClassnames}>
      {dentistsList && dentistsList.length === 0 && (
        <span className={`${namespace}__empty-message`}>{emptyMessage}</span>
      )}
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
  emptyMessage: PropTypes.string.isRequired,
  className: PropTypes.string,
};

DentistsList.defaultProps = {
  className: "",
  emptyMessage: "Empty message"
};

export default DentistsList;
