import React from 'react';
import Link from 'next/link';

const name = () => {
    return (
       <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <h1>About page is Here</h1>
       </div>
    );
};

export default name;