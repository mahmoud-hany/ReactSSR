import Link from 'next/link';
import Layout from '../components/MyLayout';

const PostLink = (props) => {
  console.log(props.title);
  return (
    <li>
      <Link as={`/p/${props.title.replace(/ /g, '-').replace('.', '').toLowerCase()}`} href={`/post?title=${props.title}`}>
        <a>{props.title}</a>
      </Link>
    </li>
  )
};

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome"/>
      <PostLink title="Deploy apps with Zeit"/>
    </ul>
  </Layout>
)