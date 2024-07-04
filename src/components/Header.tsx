'use client'

import Image from 'next/image'
import Logo from '@/../public/gpi.jpg'
import { House, ShoppingCart } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'
import { CartContext } from '@/contexts/cartContextProvider'

export function Header() {
  const pathname = usePathname()

  const { cartProducts } = useContext(CartContext)

  return (
    <div className="sticky top-0 z-50 p-8 bg-zinc-900">
      <div className="flex items-center justify-between">
        <Link href={'/'}>
          <Image
            alt="logo"
            src={Logo}
            width={50}
            className="rounded-lg"
            quality={100}
            priority
          />
        </Link>
        <div className="flex flex-col">
          <div className="flex items-center justify-end">
            {pathname === '/' && (
              <div className="w-fit px-1.5 py-0.5 text-xs text-zinc-100 absolute bg-green-800 rounded-full">
                <span>{cartProducts.length}</span>
              </div>
            )}
          </div>
          {pathname === '/cart' ? (
            <Link href={'/'}>
              <House
                size={40}
                className="text-green-800 hover:text-green-700 transition duration-200"
              />
            </Link>
          ) : (
            <Link href={'/cart'}>
              <ShoppingCart
                size={40}
                className="text-green-800 hover:text-green-700 transition duration-200"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
