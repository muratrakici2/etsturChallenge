import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "../styles/Popular.module.css";
import { useRouter } from "next/router";

const Popular = ({ data }) => {
  const datas = data
  const [number, setNumber] = useState(1);
  const [popular, setPopular] = useState(datas[1]);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      if (number < 1) {
        setNumber(3);
        setPopular(datas[3]);
      } else if (number >= 3) {
        setNumber(1);
        setPopular(datas[1]);
      } else {
        setNumber((s) => s + 1);
        setPopular(datas[number + 1]);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [number, popular,datas]);
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
          alt="poster"
          onClick={() => router.push(`/details/${popular.id}`)}
        />
        <div
          onClick={() => router.push(`/details/${popular.id}`)}
          className={styles.title}
        >
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
