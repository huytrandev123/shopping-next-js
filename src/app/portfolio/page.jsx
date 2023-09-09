import React from 'react';
import styles from './Portfolio.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';

const cx = classNames.bind(styles);

function Portfolio() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('selectTitle')}>Choose a galery</h1>
            <div className={cx('items')}>
                <Link href="/portfolio/illustrations" className={cx('item')}>
                    <span className={cx('title')}>Illustrations</span>
                </Link>

                <Link href="/portfolio/websites" className={cx('item')}>
                    <span className={cx('title')}>Websites</span>
                </Link>

                <Link href="/portfolio/applications" className={cx('item')}>
                    <span className={cx('title')}>Applications</span>
                </Link>
            </div>
        </div>
    );
}

export default Portfolio;
