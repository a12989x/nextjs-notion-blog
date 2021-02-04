import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    return (
        <header className='header'>
            <Link href='/'>
                <a className='header__logo'>
                    <Image
                        src='/assets/svg/logo.min.svg'
                        height='30'
                        width='30'
                    />
                    Codax
                </a>
            </Link>

            <ul className='header__links'>
                <li className='header__item'>
                    <Link href='/about'>
                        <a className='header__link'>About</a>
                    </Link>
                </li>
                <li className='header__item'>
                    <Link href='/portfolio'>
                        <a className='header__link'>Portfolio</a>
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;
