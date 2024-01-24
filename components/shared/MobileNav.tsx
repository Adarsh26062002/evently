import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import NavItems from "./NavItems"
import React from "react"
import Link from "next/link"

type Props = {}

const MobileNav = (props: Props) => {
    return (
        <>
            <nav className="md:hidden">
                <Sheet>
                    <SheetTrigger>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </SheetTrigger>
                    <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
                        <Link href="/" className='w-36 font-bold text-2xl'>EVENTLY.</Link>
                        <hr className=" text-gray-800"/>
                        <NavItems/>
                    </SheetContent>
                </Sheet>
            </nav>
        </>
    )
}

export default MobileNav