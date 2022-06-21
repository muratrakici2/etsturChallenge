import Image from "next/image";
import {  useState } from "react";
import styles from "../styles/Slider.module.css";

const Slider = ({ data }) => {
  const [number, setNumber] = useState(0);
  const changeImage = (e) => {
    const imageNumber = data.image.length - 1
    if (number === 0 && e === -1) {
      setNumber(imageNumber);
    } else if (number === imageNumber && e === +1) {
      setNumber(0);
    } else {
      setNumber((s) => s + e);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <Image
          src={data.image[number]}
          width={697}
          height={392}
          layout="responsive"
          alt="poster"
        />
        <div onClick={()=>changeImage(-1)} className={styles.arrowLeft}>
          &#10094;
        </div>
        <div onClick={()=>changeImage(+1)} className={styles.arrowRight}>
          &#10095;
        </div>
      </div>
    </>
  );
};

export default Slider;
