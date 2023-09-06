import Link from 'next/link';
import React from 'react';

function Navbar({ data }) {
    return (
        <Link key={data.id} href={data.url}>
            {data.title}
        </Link>
    );
}

export default Navbar;
