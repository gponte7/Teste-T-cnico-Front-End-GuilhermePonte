import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react/dist/ssr'
import Image, { StaticImageData } from 'next/image'

interface ProductCardProps {
  imageSrc: StaticImageData
  title: string
  description: string
  price: number
}

export function ProductCard({
  imageSrc,
  title,
  description,
  price,
}: ProductCardProps) {
  return (
    <div className="flex flex-col items-center gap-6 text-zinc-100">
      <Image
        alt=""
        src={imageSrc}
        className="h-52 rounded-xl"
        width={1920}
        height={1080}
        quality={100}
      />
      <div className="flex flex-col gap-3">
        <div className="w-full flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-lg">{`R$ ${price
            .toFixed(2)
            .replace('.', ',')
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
            .toLocaleString()}`}</span>
        </div>
        <p className="text-sm text-zinc-300">{description}</p>
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="w-fit flex items-center h-11 gap-3 px-3 py-2 bg-green-800 rounded-lg">
          <Minus weight="bold" size={20} />
          <span className="text-lg">0</span>
          <Plus weight="bold" size={20} />
        </div>
        <div className="w-fit flex items-center px-3 py-2 h-11 bg-green-800 rounded-lg">
          <ShoppingCart size={25} />
        </div>
      </div>
    </div>
  )
}
