import React from "react";
import styles from "./ProfileCard.module.css";

const ProfileCard = ({ name, description, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ProfileCard;
