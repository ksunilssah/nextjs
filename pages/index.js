import MainLayout from "../Layout/MainLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

const Index = props => (
  <MainLayout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({ show }) => (
        <li key = {show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>
        {`
            li {
                list-style:none;
                margin: 5px 0;
            }
            a{
                text-decoration: none;
                color:blue;
            }
            a:hover{
                opacity: 0.6;
            }
        `}
    </style>
    
  </MainLayout>
);


Index.getInitialProps = async function() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
  const data = await res.json();
  //console.log(`Fetched show: ${data}`);
  return {
    shows: data
  };
};

export default Index;
