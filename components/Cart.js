import React from "react";
import styles from "../styles/Cart.module.css";
import Image from "next/image";
import moment from "moment";
import { useRouter } from 'next/router'
const Cart = ({ activity }) => {
  const router = useRouter()
  return (
    <div onClick={() => router.push(`/details/${activity.id}`)} className={styles.cart}>
      <div className={styles.imageContainer}>
        <Image
          src={activity.image}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="resim"
        />
      </div>
      <div className={styles.text}>
        <p>{activity.title}</p>
        <p>{activity.place}</p>
        <p>{moment(activity.startingDate).format("DD-MM-YYYY")}</p>
      </div>
    </div>
  );
};

export default Cart;
