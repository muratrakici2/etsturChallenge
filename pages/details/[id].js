import { URL } from "../../environment";
import styles from "../../styles/Detail.module.css";
import moment from "moment";
import Slider from "../../components/Slider";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import Link from "next/link";
import Script from "next/script";

const Detail = ({ data, params }) => {
  const router = useRouter();
  return (
    <>
      <Script src="https://kit.fontawesome.com/2e57178062.js" />
      <Header />
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
            <p onClick={() => router.push(`/place/${data.place}`)}>
              {data.place}
            </p>
            <p>{data.address}</p>
            <p>
              {data.city.province}/{data.city.district}
            </p>
            <div className={styles.social}>
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=${URL}/detail/${params}`}
              >
                <i className="fab fa-facebook fa-2x"></i>
              </Link>
              <Link
                href={`https://twitter.com/share?url=${URL}/detail/${params}&text=Güzel Etkinlik`}
              >
                <i className="fab fa-twitter fa-2x"></i>
              </Link>
              <Link href={`whatsapp://send?text=${URL}/detail/${params}`}>
                <i className="fab fa-whatsapp fa-2x"></i>
              </Link>
              <Link
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${URL}/detail/${params}`}
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(`${URL}/api/events/${context.params.id}`);
  const data = await res.json();
  const params = context.params.id;
  return { props: { data, params } };
}
export default Detail;
