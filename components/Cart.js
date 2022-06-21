import React from "react";
import styles from "../styles/Cart.module.css";
import Image from "next/image";
import moment from "moment";
import { useRouter } from "next/router";
const Cart = ({ activity }) => {
  const router = useRouter();
  return (
    <div className={styles.cart}>
      <div
        className={styles.imageContainer}
        onClick={() => router.push(`/details/${activity.id}`)}
      >
        <Image
          src={activity.image[0]}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="resim"
        />
      </div>
      <div className={styles.text}>
        <p>{activity.title}</p>
        <p onClick={() => router.push(`/place/${activity.place}`)}>
          {activity.place}
        </p>
        <p>
          {moment(activity.startingDate).format("DD-MM-YYYY")}
          {moment(activity.startingDate).format("DD-MM-YYYY") !==
          moment(activity.endDate).format("DD-MM-YYYY")
            ? " / "+ moment(activity.endDate).format("DD-MM-YYYY")
            : null}
        </p>
      </div>
    </div>
  );
};

export default Cart;
