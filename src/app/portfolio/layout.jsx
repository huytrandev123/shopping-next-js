import React from 'react';
import classNames from 'classnames/bind';
import styles from './Portfolio.module.scss';


const cx = classNames.bind(styles);

function Layout({ children }) {
    return (
        <div>
            <h1 className={cx('mainTitle')}>Our Works</h1>
            {children}
        </div>
    );
}

export default Layout;
