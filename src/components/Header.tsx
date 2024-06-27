import Image from 'next/image'
import Logo from '@/../public/gpi.jpg'
import { List } from '@phosphor-icons/react/dist/ssr'

export function Header() {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between">
        <div>
          <Image alt="logo" src={Logo} width={50} className="rounded-lg" />
        </div>
        <div>
          <List size={40} className="text-green-900" />
        </div>
      </div>
    </div>
  )
}
