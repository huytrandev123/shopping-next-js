'use client';
import Link from 'next/link';
import React from 'react';
import Navbar from './Navbar';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const links = [
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'Portofolio', url: '/portfolio' },
    { id: 3, title: 'Blog', url: '/blog' },
    { id: 4, title: 'About', url: '/about' },
    { id: 5, title: 'Contact', url: '/contact' },
    { id: 6, title: 'Dashboard', url: '/dashboard' },
];

function Header() {
    return (
        <div className={cx('wrapper')}>
            <Link className={cx('logo')} href="/">
                lamamia
            </Link>

            <div className={cx('links')}>
                {links.map((link) => (
                    <Navbar className={cx('link')} data={link} key={link.id} />
                ))}
                <button
                    className={cx('logout')}
                    onClick={() => {
                        console.log('log out');
                    }}
                >
                    Log out
                </button>
            </div>
        </div>
    );
}

export default Header;
