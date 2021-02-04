import Image from 'next/image';
import Link from 'next/link';

const Home = () => {
    return (
        <section className='home'>
            <div className='home__images'>
                <Image
                    className='home__cover'
                    src='/assets/cover.png'
                    alt='cover'
                    height='353'
                    width='1000'
                />
                <Image
                    className='home__avatar'
                    src='/assets/avatar.png'
                    alt='avatar'
                    height='121'
                    width='120'
                    quality='100'
                />
            </div>
            <h1 className='home__title'>Codax</h1>
            <p className='home__description'>
                Hello world 👋
                <br /> I'm <b className='home__name'>Alexis Guzman</b>, a
                freelance web developer who has fun building websites like{' '}
                <br />
                <Link href='https://ax-covid-19-tracker.web.app/'>
                    <a
                        className='home__link'
                        target='_about'
                        rel='noopener noreferrer'
                    >
                        Covid Tracker
                    </a>
                </Link>{' '}
                y{' '}
                <Link href='https://ax-sayer-palette.herokuapp.com/'>
                    <a
                        className='home__link'
                        target='_about'
                        rel='noopener noreferrer'
                    >
                        Sayer Palette
                    </a>
                </Link>
            </p>

            <Link href='/portfolio'>
                <a className='home__seeMyWork'>
                    <button className='home__btn'>See my work</button>
                </a>
            </Link>

            <hr className='home__hr' />
        </section>
    );
};

export default Home;
