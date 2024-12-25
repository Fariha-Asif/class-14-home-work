import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
        <div className=' flex flex-col lg:flex-row bg-blue-950 text-white'>
            <h4 className='text-xl font-black underline mt-8 mb-3 w-auto lg:w-56'>Class-14 Home Work</h4><br/>
            <ul className='w-full flex flex-col md:flex-row text-xl text-center font-bold gap-x-5 mt-8 lg:ml-96'>
                <li className='hover:underline'>
                    <Link href="./">
                        Home
                    </Link>
                </li>
                <li className='hover:underline'>
                    <Link href="/Book">
                        Books
                    </Link>
                </li>
                <li className='hover:underline'>
                    <Link href="/Posts">
                        Posts    
                    </Link>
                </li>
                <li className='hover:underline'>
                    <Link href="/Comments">
                        Comments    
                    </Link>
                </li>
                <li className='hover:underline'>
                    <Link href="/Albums">
                        Albums    
                    </Link>
                </li>
                <li className='hover:underline'>
                    <Link href="/Photos">
                        Photos    
                    </Link>
                </li>
                <li className='hover:underline'>
                    <Link href="/Todos">
                        Todos   
                    </Link>
                </li>
            </ul>
        </div>
        
        
        
        
    </div>
  )
}
