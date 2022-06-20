import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Popular.module.css";

const Popular = ({ data }) => {
  const [number, setNumber] = useState(1);
  const [popular, setPopular] = useState(data[number]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (number < 1) {
        setNumber(3);
        setPopular(data[3]);
      } else if (number >= 3) {
        setNumber(1);
        setPopular(data[1]);
      } else {
        setNumber((s) => s + 1);
        setPopular(data[number + 1]);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [number]);
  const change = (e) => {
    if (number === 1 && e === -1) {
      setNumber(3);
      setPopular(data[3]);
    } else if (number === 3 && e === +1) {
      setNumber(1);
      setPopular(data[1]);
    } else {
      setNumber((s) => s + e);
      setPopular(data[number + e]);
    }
  };
  return (
    <>
      <p className={styles.popular}>Haftalık Popüler Etkinlikler</p>
      <div className={styles.container}>
        <Image
          src={popular.image}
          width={697}
          height={392}
          layout="responsive"
        />
        <div className={styles.title}>
          <p>{popular.title}</p>
          <p>{popular.place}</p>
        </div>
        <div onClick={() => change(-1)} className={styles.arrowLeft}>
          &#10094;
        </div>
        <div onClick={() => change(+1)} className={styles.arrowRight}>
          &#10095;
        </div>
      </div>
    </>
  );
};

export default Popular;
