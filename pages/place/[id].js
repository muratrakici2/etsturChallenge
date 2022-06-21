import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import Header from "../../components/Header";
import Cart from "../../components/Cart";
import { URL } from "../../environment";

function Place({ data ,place }) {
  const [activity, setActivity] = useState([]);
  useEffect(() => {
    const filter = data.filter((event) => event.place === place);
    setActivity(filter);
  }, [data]);

  return (
    <div>
      <Header/>
      <h3 style={{fontSize:35,textAlign:"center"}}>{place}</h3>
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
export async function getServerSideProps(context) {
  const res = await fetch(`${URL}/api/events`);
  const data = await res.json();
    const place = context.params.id
  return { props: { data ,place } };
}
export default Place;
