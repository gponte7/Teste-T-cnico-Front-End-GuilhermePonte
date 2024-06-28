import Image from 'next/image'
import Logo from '@/../public/gpi.jpg'
import { ShoppingCart } from '@phosphor-icons/react/dist/ssr'

export function Header() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <div>
          <Image
            alt="logo"
            src={Logo}
            width={50}
            className="rounded-lg"
            quality={100}
            priority
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-end">
            <div className="w-fit px-1.5 py-0.5 text-xs text-zinc-100 bg-green-800 rounded-full">
              <span>10</span>
            </div>
          </div>
          <ShoppingCart size={40} className="text-green-900" />
        </div>
      </div>
    </div>
  )
}
