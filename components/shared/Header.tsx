import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Navbar from './NavItems'
import MobileNav from './MobileNav'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className='w-full border-b flex items-center'>
        <div className='max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full flex items-center justify-between'>
            <Link href="/" className='w-36 font-bold text-2xl'>EVENTLY.</Link>
        </div>

    <SignedIn>
        <nav className='md:flex-between hidden w-full max-w-xs'>
            <Navbar/>
            <MobileNav/>
        </nav>
    </SignedIn>
    <div className='mr-6 flex items-center gap-6'>
        <SignedIn>
            <UserButton afterSignOutUrl='/'/>
            <MobileNav/>
        </SignedIn>
        <SignedOut>
            <Button asChild className='rounded-full p-5'>
                <Link href="/sign-in">Login</Link>
            </Button>
        </SignedOut>
    </div>
    </header>

  )
}

export default Header