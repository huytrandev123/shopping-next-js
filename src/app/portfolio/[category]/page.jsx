'use client';

import React from 'react';
import styles from './Cate.module.scss';
import classNames from 'classnames/bind';
import Button from '@/components/Button';
import Image from 'next/image';
const cx = classNames.bind(styles);

function Category({ params }) {
    console.log(params);
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('catTitle')}>{params.category}</h1>

            <div className={cx('item')}>
                <div className={cx('content')}>
                    <h1 className={cx('title')}>Create Portfolio</h1>

                    <p className={cx('desc')}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ipsum culpa rem eaque
                        incidunt veniam explicabo, ipsam est. Voluptates nam doloremque vitae pariatur illo atque ab
                        placeat omnis explicabo fuga?
                    </p>
                    <Button text="See more" url="#" />
                </div>

                <div className={cx('imgContainer')}>
                    <Image
                        className={cx('img')}
                        src="https://images.pexels.com/photos/6590699/pexels-photo-6590699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        fill={true}
                        alt="img cate"
                    />
                </div>
            </div>

            <div className={cx('item')}>
                <div className={cx('content')}>
                    <h1 className={cx('title')}>Create Portfolio</h1>

                    <p className={cx('desc')}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ipsum culpa rem eaque
                        incidunt veniam explicabo, ipsam est. Voluptates nam doloremque vitae pariatur illo atque ab
                        placeat omnis explicabo fuga?
                    </p>
                    <Button text="See more" url="#" />
                </div>

                <div className={cx('imgContainer')}>
                    <Image
                        className={cx('img')}
                        src="https://images.pexels.com/photos/6590699/pexels-photo-6590699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        fill={true}
                        alt="img cate"
                    />
                </div>
            </div>

            <div className={cx('item')}>
                <div className={cx('content')}>
                    <h1 className={cx('title')}>Create Portfolio</h1>

                    <p className={cx('desc')}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ipsum culpa rem eaque
                        incidunt veniam explicabo, ipsam est. Voluptates nam doloremque vitae pariatur illo atque ab
                        placeat omnis explicabo fuga?
                    </p>
                    <Button text="See more" url="#" />
                </div>

                <div className={cx('imgContainer')}>
                    <Image
                        className={cx('img')}
                        src="https://images.pexels.com/photos/6590699/pexels-photo-6590699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        fill={true}
                        alt="img cate"
                    />
                </div>
            </div>
        </div>
    );
}

export default Category;
