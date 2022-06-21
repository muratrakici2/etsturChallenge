import { URL } from "../../environment";

const Detail = ({ data }) => {
  console.log(data);
  return <div>Detail</div>;
};

export async function getServerSideProps(context) {
  const res = await fetch(
    `${URL}/api/events/${context.params.id}`
  );
  const data = await res.json();

  return { props: { data } };
}
export default Detail;
