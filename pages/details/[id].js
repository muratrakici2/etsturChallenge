const Detail = ({ data }) => {
  console.log(data);
  return <div>Detail</div>;
};
export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/events`);
  const data = await res.json();
  const paths = data.map((event) => {
    return {
      params: { id: event.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:3000/api/events/${context.params.id}`
  );
  const data = await res.json();

  return { props: { data } };
}
export default Detail;
