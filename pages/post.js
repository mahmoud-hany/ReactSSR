import { withRouter } from 'next/router';
import Layout from '../components/MyLayout';

const Page = (props) => {
    console.log('[Router] : ', props.router);
    console.log('[Query] :', props.router.query);
    

    return (
        <Layout>
        <h1>{props.router.query.title}</h1>
        <p>This is the blog post content.</p>
        </Layout>
    )
}

export default withRouter(Page); // this will inject the Next.js router as a property