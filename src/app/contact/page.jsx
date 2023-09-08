'use client';
import React from 'react';
import styles from './Contact.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Button from '@/components/Button';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('container')}>
            <h1 className={cx('title')}>Let's keep in touch</h1>
            <div className={cx('content')}>
                {/* Img */}
                <div className={cx('imgContainer')}>
                    <Image 
                        src="/contact.png"
                        alt="contact img"
                        fill={true}
                        sizes={15}
                        className={cx('image')}
                    /> 
                </div>  

                {/* Form */}
                <form className={cx('form')}>
                    <input  
                        className={cx('input')}
                        type='text'
                        placeholder='name'
                    /> 

                    <input  
                        className={cx('input')}
                        type='email'
                        placeholder='email'
                    /> 

                    <textarea 
                        className={cx('textArea')} 
                        placeholder='message'
                        cols="30" 
                        rows="10">    
                    </textarea>
                    <Button url="#" text="Send" />
                </form>
            </div>
        </div>
    );
}

export default Contact;
