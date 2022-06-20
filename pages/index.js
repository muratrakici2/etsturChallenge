import Image from "next/image";
import { useState } from "react";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import { DatePicker, Space } from "antd";
import moment from "moment";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Cart from "../components/Cart";

const { RangePicker } = DatePicker;

function Home({ data }) {
  const [activity, setActivity] = useState(data);
  console.log(activity);

  const tarihSirala = (e) => {
    const first = new Date(e[0].format("YYYY-MM-DD"));
    const second = new Date(e[1].format("YYYY-MM-DD"));
    const deneme = new Date("2022-06-24");
    if (first <= deneme && deneme <= second) {
      console.log("uygundur");
    } else {
      console.log("uygun değil");
    }
  };
  const disabledDate = (current) => {
    return current && current < moment().subtract(1, "days");
  };
  console.log(moment("2022-06-28").format("DD-MM-YYYY"))
  return (
    <div>
      <Header data={data} />
      <div className={styles.date}>
        <p>Tarihe Göre Ara:</p>
        <Space size={12}>
          <RangePicker
            disabledDate={disabledDate}
            onChange={tarihSirala}
            format="DD-MM-YYYY"
            className={styles.datePicker}
            placeholder={["Başlangıç Tarihi", "Bitiş Tarihi"]}
          />
        </Space>
      </div>
      <Filter data={data} setActivity={(i) => setActivity(i)} />

      <div className={styles.cartContainer}>
        {activity.map((event, index) => (
          <Cart key={index} activity={event} />
        ))}
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/events`);
  const data = await res.json();

  return { props: { data } };
}
export default Home;
