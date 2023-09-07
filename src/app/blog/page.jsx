import React from 'react'
import styles from './Blog.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function Blog() {
  return (
    <div className={cx('blog')}>Blog</div>
  )
}

export default Blog