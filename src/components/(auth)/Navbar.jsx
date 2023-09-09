import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function Navbar({ data }) {
    return (
        <Link key={data.id} href={data.url}>
            <span className={cx('title')}>{data.title}</span>
        </Link>
    );
}

export default Navbar;
