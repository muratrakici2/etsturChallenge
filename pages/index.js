import { useState } from "react";
import Filter from "../components/Filter";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Cart from "../components/Cart";
import Popular from "../components/Popular";
import { URL } from "../environment";
import SearchDate from "../components/SearchDate";
import Link from "next/link";

function Home({ data }) {
  const [activity, setActivity] = useState(data);
  return (
    <div>
      <Header />
      <SearchDate data={data} setActivity={(i) => setActivity(i)} />
      <Filter data={data} setActivity={(i) => setActivity(i)} />
      <Popular data={data} />
      <Link href="/old">
        <p
          style={{
            marginBottom: 0,
            float: "right",
            cursor: "pointer",
            marginRight: 10,
          }}
        >
          Geçmiş Etkinlikler
        </p>
      </Link>
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
export default Home;
