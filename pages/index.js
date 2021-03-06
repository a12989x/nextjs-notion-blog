import About from '../components/About';
import Posts from '../components/Posts';

import { getPosts } from '../lib/strapi';

export const getStaticProps = async () => {
    const posts = await getPosts();

    return { props: { posts } };
};

const Home = ({ posts }) => {
    console.log(posts);

    return (
        <section className='home'>
            <About />

            <hr className='home__hr' />

            <Posts />
        </section>
    );
};

export default Home;
