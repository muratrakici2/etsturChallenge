import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { URL } from "../environment";

function Old({ data }) {
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    const today = new Date();
    const filter = data.filter((event) => today > new Date(event.endDate));
    setActivity(filter);
  }, [data]);

  return (
    <div>
      <Header/>
      <h1 style={{ textAlign: "center" }}>Geçmiş Etkinlikler</h1>
      {activity.length ? (
        <div className={styles.cartContainer}>
          {activity.map((event, index) => (
            <Cart key={index} activity={event} />
          ))}
        </div>
      ) : (
        <h1 style={{ textAlign: "center", fontSize: 40 }}>
          Etkinlik Bulunamadı
        </h1>
      )}
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch(`${URL}/api/events`);
  const data = await res.json();

  return { props: { data } };
}
export default Old;
