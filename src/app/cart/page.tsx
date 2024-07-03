'use client'

import { CheckoutDialog } from '@/components/CheckoutDialog'
import { ProductCard } from '@/components/ProductCard'
import { CartContext } from '@/contexts/cartContextProvider'
import {
  Check,
  CircleNotch,
  ShoppingCart,
} from '@phosphor-icons/react/dist/ssr'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'

export default function Cart() {
  const { cartProducts } = useContext(CartContext)
  const [isFinishing, setIsFinishing] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  const { setCartProducts } = useContext(CartContext)

  const route = useRouter()

  const totalItemsPrice = cartProducts.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0,
  )

  function handleCheckout() {
    setIsFinishing(true)
    setTimeout(() => {
      setIsFinished(true)
      setIsFinishing(false)
    }, 2000)
  }

  function handleCheckoutDialog() {
    setIsFinished(false)
    setCartProducts([])
    route.push('/')
  }

  return (
    <div className="flex flex-col h-screen gap-6 px-10 pb-20">
      {cartProducts.length === 0 ? (
        <span className="text-green-800 text-lg font-semibold text-center mt-20">
          Seu carrinho está vazio
        </span>
      ) : (
        <span className="text-green-800 text-lg font-semibold flex items-center gap-2">
          <ShoppingCart size={22} />
          Carrinho de compras
        </span>
      )}
      <div className="flex flex-col md:grid md:grid-cols-2 md:place-items-center gap-10">
        {cartProducts.map((product) => {
          return (
            <ProductCard
              key={product.title}
              imageSrc={product.imageSrc}
              title={product.title}
              description={product.description}
              price={product.price}
              quantity={product.quantity}
            />
          )
        })}
      </div>
      {cartProducts.length > 0 && (
        <div className="flex flex-col gap-4 mt-10">
          <div className="w-full flex items-center justify-between">
            <span className="text-zinc-100 text-lg">Total:</span>
            <span className="text-zinc-100">
              R${' '}
              {totalItemsPrice
                .toFixed(2)
                .replace('.', ',')
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
                .toLocaleString()}
            </span>
          </div>
          <button
            className="text-zinc-100 px-4 py-2 w-full h-11 flex items-center justify-center bg-green-800 rounded-lg"
            onClick={handleCheckout}
          >
            {isFinishing ? (
              <CircleNotch className="animate-spin" size={25} />
            ) : (
              'Finalizar pedido'
            )}
          </button>
        </div>
      )}
      <CheckoutDialog
        open={isFinished}
        title="Compra finalizada com sucesso!"
        icon={<Check size={60} weight="bold" className="text-green-800" />}
        action={
          <button
            onClick={handleCheckoutDialog}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-green-800 text-zinc-100 rounded-lg"
          >
            Voltar
          </button>
        }
      />
    </div>
  )
}
