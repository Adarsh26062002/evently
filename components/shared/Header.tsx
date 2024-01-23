import Link from 'next/link'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='w-full border-b'>
        <div className='max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full flex items-center justify-between'>
            <Link href="/" className='w-36'>EVENTLY.</Link>
        </div>
    </header>
  )
}

export default Header