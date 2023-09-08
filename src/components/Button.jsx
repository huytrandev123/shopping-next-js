import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';

const cx = classNames.bind(styles);

function Button({ text, url }) {
    return (
        <Link className={cx('link')} href={url}>
            <button className={cx('wrapper')}>{text}</button>
        </Link>
    );
}

export default Button;
