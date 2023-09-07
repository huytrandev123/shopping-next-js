import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

import Image from 'next/image';
import Facebook from 'public/facebook-icon.png'
import Instagram from 'public/insta-icon.png'
import Twitter from 'public/twitter-icon.png'
// khi muốn sử dụng hình ảnh từ bên ngoài , phải vào next.config.js để config 

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div>2023 Lamamia. All rights reserved</div>
            <div className={cx('social')}>
                <Image 
                    className={cx('icon')} 
                    src={Facebook} 
                    width={15} 
                    height={15} 
                    alt="facebook" 
                />

                <Image 
                    className={cx('icon')} 
                    src={Instagram}
                    width={15} 
                    height={15} 
                    alt="insta" 
                />

                <Image 
                    className={cx('icon')} 
                    src={Twitter}
                    width={15} 
                    height={15} 
                    alt="twitter" 
                />
            </div>
        </div>
    );
}

export default Footer;
