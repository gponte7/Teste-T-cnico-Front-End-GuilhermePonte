import Image from 'next/image'

import Logo from '@/../public/gpi.jpg'

export function Footer() {
  return (
    <footer className="py-10 bg-zinc-800 flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Image
          alt="logo"
          src={Logo}
          width={50}
          className="rounded-lg"
          quality={100}
          priority
        />
        <span className="text-xl font-semibold text-green-800">
          Ponte Games
        </span>
      </div>
      <span className="text-zinc-300 text-sm">
        Teste Técnico - NextGen Development
      </span>
    </footer>
  )
}
