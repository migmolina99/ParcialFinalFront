import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import DentistCard from "../../DentistCard";
import Message from "../../Message";

const namespace = "dentists-list";

const DentistsList = ({ dentistsList, emptyMessage, className }) => {
  const componentClassnames = classNames(namespace, className, {
    [`${namespace}--empty`]: dentistsList && dentistsList.length === 0,
  });

  return (
    <div className={componentClassnames}>
      {dentistsList &&
        dentistsList.length > 0 &&
        dentistsList.map((dentist) => (
          <DentistCard key={dentist.id} {...dentist} />
        ))}
      {dentistsList && dentistsList.length === 0 && (
        <Message>{emptyMessage}</Message>
      )}
    </div>
  );
};

DentistsList.propTypes = {
  className: PropTypes.string,
  emptyMessage: PropTypes.string,
  dentistsList: PropTypes.arrayOf(PropTypes.shape({})),
};

DentistsList.defaultProps = {
  className: "",
};

export default DentistsList;
