import MainLayout from "../Layout/MainLayout";
import fetch from "isomorphic-unfetch";

const Post = props => (
  <MainLayout>
    <div className="post-col">
      <h1>{props.show.name}</h1>
      <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
      <img src={props.show.image.medium} alt={props.show.name} />
    </div>
  </MainLayout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);
  return { show };
};

export default Post;
