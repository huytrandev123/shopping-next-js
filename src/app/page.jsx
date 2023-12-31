import React from 'react';
import classNames from 'classnames/bind';
import styles from './page.module.scss';
import Hero from 'public/hero.png'
import Image from 'next/image';
import Button from '@/components/Button';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('container')}>
            <div className={cx('item')}>
                <h1 className={cx('title')}>Better design for you digital products</h1>
                <p className={cx('description')}>Turning your idea intro Reality. We bring together the teams from the global tech industry</p>
                <Button 
                    className={cx('button')} 
                    url="/portfolio" 
                    text="See our works" 
                />
            </div>
            <div className={cx('item')}>
                <Image src={Hero} className={cx('img')} /> 
            </div>
        </div>
    );
}

export default Home;
