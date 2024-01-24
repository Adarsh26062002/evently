"use client"
import { SignIn, SignUp, SignedOut } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <SignUp/>
  )
}

export default Page