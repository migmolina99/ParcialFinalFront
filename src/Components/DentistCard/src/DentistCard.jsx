import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import doctorInage from "../../../assets/images/doctor.jpg";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../utils/global.context";
import icons from "../../icons";

const namespace = "dentist-card";

const DentistCard = ({
  id,
  type,
  name,
  email,
  phone,
  website,
  username,
  className,
}) => {
  const componentClassNames = classNames(namespace, className, {
    [`${namespace}--detail`]: type === "detail",
  });

  const { Heart, HeartFill } = icons;
  const navigate = useNavigate();

  const { 
    favorites: favoriteDentists, 
    addFavoriteDentist,
    deleteFavoriteDentist, 
  } = useApp();

  const handleClickCard = () => {
    navigate(`/detail/${id}`);
  };

  const handleClickFavorite = () => {
    const isFavorite = isFavoriteDentist();
    if (!isFavorite) {
      addFavoriteDentist({
        id,
        name,
        username,
        phone,
        website,
      });
    } else {
      deleteFavoriteDentist(id);
    }
  };

  const isFavoriteDentist = () => {
    return favoriteDentists.find((dentist) => dentist.id === id);
  };

  return (
    <div className={componentClassNames}>
      <div className={`${namespace}__header`}>
        <button
          className={`${namespace}__button-icon`}
          onClick={handleClickFavorite}
        >
          {isFavoriteDentist() ? <HeartFill /> : <Heart />}
        </button>
        <img src={doctorInage} alt={name} className={`${namespace}__image`} />
      </div>
      <div className={`${namespace}__body`}>
        <h2 className={`${namespace}__name`} onClick={handleClickCard}>
          {name}
        </h2>
        {type === "detail" ? (
          <ul className={`${namespace}__list`}>
            <li className={`${namespace}__list-item`}>
              <span className={`${namespace}__list-item-text`}>Email: </span>
              {email}
            </li>
            <li className={`${namespace}__list-item`}>
              <span className={`${namespace}__list-item-text`}>Phone: </span>
              {phone}
            </li>
            <li className={`${namespace}__list-item`}>
              <span className={`${namespace}__list-item-text`}>Website: </span>
              {website}
            </li>
          </ul>
        ) : (
          <p className={`${namespace}__username`}>{username}</p>
        )}
      </div>
    </div>
  );
};

DentistCard.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
  username: PropTypes.string.isRequired,
  className: PropTypes.string,
};

DentistCard.defaultProps = {
  type: "",
  className: "",
};

export default DentistCard;
