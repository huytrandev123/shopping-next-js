import React from 'react';
import styles from './About.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Button from '@/components/Button';

const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx('container')}>
            <div className={cx('imgContainer')}>
                <Image
                    src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    fill={true}
                    className={cx('img')}
                    alt="img about"
                />
                <div className={cx('imgText')}>
                    <h1 className={cx('imgTitle')}>Digital Storytellers</h1>
                    <h2 className={cx('imgDescription')}>Handcrafting award winning digital experiences</h2>
                </div>
            </div>

            <div className={cx('textContainer')}>
                <div className={cx('item')}>
                    <h1 className={cx('title')}>Who are we?</h1>
                    <p className={cx('desc')}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem quod doloremque praesentium,
                        exercitationem enim suscipit nisi in minus error sint magnam, deleniti laborum voluptatibus
                        dignissimos! Et, perspiciatis laboriosam? Itaque, voluptatem.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero eum sed, dolores numquam maiores
                        qui tempore aliquid sunt in beatae cum fugit sequi iure. Eaque in velit quo ex ad.
                    </p>
                </div>

                <div className={cx('item')}>
                    <h1 className={cx('title')}>What we do?</h1>
                    <p className={cx('desc')}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque nisi ab quasi veritatis,
                        corporis sapiente blanditiis aut voluptates quo quidem asperiores? Recusandae, hic provident
                        excepturi sapiente libero illum omnis nemo.
                        <br />
                        <br /> - Dynamic Website
                        <br />
                        <br />
                        - Fast and Handy Mobile
                        <br />
                        <br />
                        - Mobile Apps
                    </p>

                    <Button url="/contact" text="Contact" />
                </div>
            </div>
        </div>
    );
}

export default About;
