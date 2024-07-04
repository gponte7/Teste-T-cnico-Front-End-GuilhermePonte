import { CartContext } from '@/contexts/cartContextProvider'
import {
  Minus,
  Plus,
  ShoppingCart,
  Trash,
} from '@phosphor-icons/react/dist/ssr'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'

export interface ProductCardProps {
  imageSrc: StaticImageData
  title: string
  description: string
  price: number
  quantity: number
}

export function ProductCard(product: ProductCardProps) {
  const {
    cartProducts,
    handleIncreaseProductQuantity,
    handleDecreaseProductQuantity,
    handleRemoveProduct,
  } = useContext(CartContext)

  const pathname = usePathname()

  const productAlreadyAddedToCart = cartProducts.find(
    (cartProduct) => cartProduct.title === product.title,
  )

  return (
    <div className="md:w-80 flex flex-col items-center gap-6 text-zinc-100">
      <Image
        alt=""
        src={product.imageSrc}
        className="h-52 md:w-80 rounded-xl"
        width={1920}
        height={1080}
        quality={100}
      />
      <div
        className={`w-full flex ${pathname === '/' && 'flex-col'} items-center justify-between gap-6`}
      >
        {pathname === '/' ? (
          <div className="flex flex-col gap-3">
            <div className="w-full flex items-center justify-between">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <span className="text-lg">{`R$ ${product.price
                .toFixed(2)
                .replace('.', ',')
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                .toLocaleString()}`}</span>
            </div>
            <p className="text-sm text-zinc-300">{product.description}</p>
          </div>
        ) : (
          <div className="w-full flex flex-col">
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <span className="text-sm">{`R$ ${product.price
              .toFixed(2)
              .replace('.', ',')
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
              .toLocaleString()}`}</span>
          </div>
        )}
        <div className="w-full flex items-center justify-between gap-3 xl:gap-6">
          <div className="w-fit flex items-center h-11 gap-3 px-3 py-2 bg-green-800 rounded-lg">
            <button
              className="hover:text-white transition duration-75"
              onClick={() => handleDecreaseProductQuantity(product)}
            >
              <Minus weight="bold" size={20} />
            </button>
            {productAlreadyAddedToCart ? (
              <span>{productAlreadyAddedToCart.quantity}</span>
            ) : (
              <span>{product.quantity}</span>
            )}
            <button
              className="hover:text-white transition duration-75"
              onClick={() => handleIncreaseProductQuantity(product)}
            >
              <Plus weight="bold" size={20} />
            </button>
          </div>

          {pathname === '/cart' ? (
            <button
              className="w-fit flex items-center px-3 py-2 h-11 bg-green-800 rounded-lg hover:bg-red-800 hover:text-white transition duration-200 cursor-pointer"
              onClick={() => handleRemoveProduct(product)}
            >
              <Trash size={25} />
            </button>
          ) : (
            <Link
              className="w-fit flex items-center px-3 py-2 h-11 bg-green-800 rounded-lg hover:bg-green-700 hover:text-white transition duration-200 cursor-pointer"
              href={'/cart'}
            >
              <ShoppingCart size={25} />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
