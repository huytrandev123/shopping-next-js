import Link from 'next/link';
import React from 'react';
import Navbar from './Navbar';

const links = [
    { id: 1, title: 'Home', url: '/' },
    { id: 2, title: 'Portofolio', url: '/portfolio' },
    { id: 3, title: 'Blog', url: '/blog' },
    { id: 4, title: 'About', url: '/about' },
    { id: 5, title: 'Contact', url: '/contact' },
    { id: 6, title: 'Dashboard', url: '/dashboard' },
];

function Header() {
    return (
        <div>
            <Link href="/">lamamia</Link>
            <div>
                {links.map((link) => (
                    <Navbar data={link} />
                ))}
            </div>
        </div>
    );
}

export default Header;
