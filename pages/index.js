import About from '../components/About';
import Posts from '../components/Posts';

const Home = () => {
    return (
        <section className='home'>
            <About />

            <hr className='home__hr' />

            <Posts />
        </section>
    );
};

export default Home;
