import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    const darkMode = false;

    const year = new Date().getFullYear();

    return (
        <footer className='footer'>
            <p className='footer__copyright'>
                Copyright &copy; {year} Alexis Guzman
            </p>
            <button type='button' className='footer__toggle'>
                <Image
                    src={`/assets/${darkMode ? 'sun' : 'moon'}.svg`}
                    alt={`${darkMode ? 'sun' : 'moon'} icon`}
                    height='24'
                    width='24'
                />
            </button>
            <ul className='footer__links'>
                <li className='footer__item'>
                    <Link href='https://www.linkedin.com/in/codax/'>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            className='footer__link'
                        >
                            <Image
                                src='/assets/linkedin.svg'
                                alt='linkedin icon'
                                height='24'
                                width='24'
                            />
                        </a>
                    </Link>
                </li>
                <li className='footer__item'>
                    <Link href='https://github.com/a12989x/'>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            className='footer__link'
                        >
                            <Image
                                src='/assets/github.svg'
                                alt='github icon'
                                height='24'
                                width='24'
                            />
                        </a>
                    </Link>
                </li>
                <li className='footer__item'>
                    <Link href='https://www.youtube.com/channel/UCMY0GhV1HuX4XdbgalC77VQ'>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            className='footer__link'
                        >
                            <Image
                                src='/assets/youtube.svg'
                                alt='youtube icon'
                                height='24'
                                width='24'
                            />
                        </a>
                    </Link>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
