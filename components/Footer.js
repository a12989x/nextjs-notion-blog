import Image from 'next/image';
import Link from 'next/link';
import useDarkMode from 'use-dark-mode';

const Footer = () => {
    const darkMode = useDarkMode(false);

    const year = new Date().getFullYear();

    return (
        <footer className='footer'>
            <p className='footer__copyright'>
                Copyright &copy; {year} Alexis Guzman
            </p>
            <button type='button' className='footer__toggle'>
                <Image
                    src={`/assets/svg/${
                        darkMode.value ? 'sun' : 'moon'
                    }.min.svg`}
                    alt={`${darkMode.value ? 'sun' : 'moon'} icon`}
                    onClick={darkMode.toggle}
                    height='24'
                    width='24'
                />
            </button>
            <ul className='footer__links'>
                <li className='footer__item'>
                    <Link href='https://www.linkedin.com/in/codax/'>
                        <a
                            className='footer__link'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Image
                                src={`/assets/svg/linkedin${
                                    darkMode.value ? '-light' : '-dark'
                                }.min.svg`}
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
                            className='footer__link'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Image
                                src={`/assets/svg/github${
                                    darkMode.value ? '-light' : '-dark'
                                }.min.svg`}
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
                            className='footer__link'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Image
                                src={`/assets/svg/youtube${
                                    darkMode.value ? '-light' : '-dark'
                                }.min.svg`}
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
