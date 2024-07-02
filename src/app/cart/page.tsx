'use client'

import { ProductCard } from '@/components/ProductCard'
import { CartContext } from '@/contexts/cartContextProvider'
import { useContext } from 'react'

export default function Cart() {
  const { cartProducts } = useContext(CartContext)

  return (
    <div className="flex flex-col gap-6 px-10">
      {cartProducts.length === 0 && (
        <span className="text-green-800 text-lg font-semibold text-center mt-20">
          Nenhum produto adicionado
        </span>
      )}
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
  )
}
