import Image from 'next/image';
import Link from 'next/link';

const About = () => {
    return (
        <section className='about'>
            <div className='about__images'>
                <Image
                    className='about__cover'
                    src='/assets/cover.png'
                    alt='cover'
                    height='353'
                    width='1000'
                />
                <Image
                    className='about__avatar'
                    src='/assets/avatar.png'
                    alt='avatar'
                    height='121'
                    width='120'
                    quality='100'
                />
            </div>
            <h1 className='about__title'>Codax</h1>
            <p className='about__description'>
                Hello world 👋
                <br /> I'm <b className='about__name'>Alexis Guzman</b>, a
                freelance web developer who has fun building websites like{' '}
                <br />
                <Link href='https://ax-covid-19-tracker.web.app/'>
                    <a
                        className='about__link'
                        target='_about'
                        rel='noopener noreferrer'
                    >
                        Covid Tracker
                    </a>
                </Link>{' '}
                y{' '}
                <Link href='https://ax-sayer-palette.herokuapp.com/'>
                    <a
                        className='about__link'
                        target='_about'
                        rel='noopener noreferrer'
                    >
                        Sayer Palette
                    </a>
                </Link>
            </p>

            <Link href='/portfolio'>
                <a className='about__seeMyWork'>
                    <button className='about__btn'>See my work</button>
                </a>
            </Link>
        </section>
    );
};

export default About;
