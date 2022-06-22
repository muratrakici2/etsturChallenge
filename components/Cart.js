import React from "react";
import styles from "../styles/Cart.module.css";
import Image from "next/image";
import moment from "moment";
import { useRouter } from "next/router";
import Script from "next/script";

const Cart = ({ activity }) => {
  const router = useRouter();
  return (
    <div className={styles.cart}>
            <Script src="https://kit.fontawesome.com/2e57178062.js" />

      <div
        className={styles.imageContainer}
        onClick={() => router.push(`/details/${activity.id}`)}
      >
        <Image
          src={activity.image.length ? activity.image[0] :"/default.png"}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="resim"
        />
      </div>
      <div className={styles.text}>
        <p>{activity.title}</p>
        <p onClick={() => router.push(`/place/${activity.place}`)}><i style={{marginRight:5}} className="fa-solid fa-map-pin"></i>
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
