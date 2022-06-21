import { URL } from "../../environment";
import styles from "../../styles/Detail.module.css";
import moment from "moment";
import Slider from "../../components/Slider";
import { useRouter } from "next/router";
import Header from "../../components/Header";

const Detail = ({ data }) => {
  const router = useRouter();

  return (
    <>
    <Header/>
    <div className={styles.container}>
      <Slider data={data} />
      <div className={styles.textContainer}>
        <h2>{data.title}</h2>
        <p>{data.description}</p>
        <div>
          {data.persons.map((people, index) => (
            <p key={index} className={styles.people}>
              {people}
            </p>
          ))}
        </div>
        <p className={styles.date}>
          {moment(data.startingDate).format("DD-MM-YYYY")} /{" "}
          {moment(data.startingDate).format("DD-MM-YYYY") !==
          moment(data.endDate).format("DD-MM-YYYY")
            ? moment(data.endDate).format("DD-MM-YYYY")
            : null}
        </p>
        <p>
          {data.price.price === "free"
            ? " Ücretsiz "
            : "Ön:" +
              " " +
              data.price.front +
              "₺" +
              " " +
              "Arka:" +
              " " +
              data.price.back +
              "₺"}
        </p>
      </div>
      <div className={styles.location}>
        <iframe
          src={data.location}
          className={styles.iframe}
          loading="lazy"
        ></iframe>
        <div className={styles.address}>
          <p onClick={() => router.push(`/place/${data.place}`)}>{data.place}</p>
          <p>{data.address}</p>
          <p>
            {data.city.province}/{data.city.district}
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(`${URL}/api/events/${context.params.id}`);
  const data = await res.json();

  return { props: { data } };
}
export default Detail;
