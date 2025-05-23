"use client"

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/ui/button'

interface AuthLayoutProps {
  children: React.ReactNode
}

const AuthLayout = ({
  children
} : AuthLayoutProps) => {
  const pathname = usePathname();

  return (
    <main className='bg-neutral-100 min-h-screen'>
      <div className='mx-auto max-w-screen-2xl p-4'>
        <nav className='flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <Image src="/logo.svg" height={40} width={40} alt='logo'/>
            <span className='font-bold tracking-tighter text-xl'>taskiFY</span>
          </div>
          <Button variant="secondary" asChild >
            <Link href={pathname === "/sign-in" ? "/sign-up" : "/sign-in"}>
              {pathname === "/sign-in" ? "Sign Up" : "Login"}
            </Link>
          </Button>
        </nav>
        <div className='flex flex-col items-center justify-center pt-4 md:pt-14'>
          {children}
        </div>
      </div>
    </main>
  )
}

export default AuthLayout