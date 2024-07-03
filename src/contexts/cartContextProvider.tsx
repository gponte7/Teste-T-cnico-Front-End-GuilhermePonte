'use client'

import { ProductCardProps } from '@/components/ProductCard'
import { createContext, useState } from 'react'

interface CartContextType {
  cartProducts: ProductCardProps[]
  setCartProducts(cartCoffees: ProductCardProps[]): void
  handleIncreaseProductQuantity(product: ProductCardProps): void
  handleDecreaseProductQuantity(product: ProductCardProps): void
  handleRemoveProduct(product: ProductCardProps): void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [cartProducts, setCartProducts] = useState<ProductCardProps[]>([])

  function handleIncreaseProductQuantity(product: ProductCardProps) {
    setCartProducts((prevState) => [...prevState, { ...product, quantity: 1 }])

    const productAlreadyAddedToCart = cartProducts.findIndex(
      ({ title }) => title === product.title,
    )

    if (productAlreadyAddedToCart !== -1) {
      const updatedProducts = cartProducts.map((currentProduct) => {
        if (currentProduct.title === product.title) {
          return {
            ...currentProduct,
            quantity: currentProduct.quantity + 1,
          }
        }
        return currentProduct
      })
      setCartProducts(updatedProducts)
    }
  }

  function handleDecreaseProductQuantity(product: ProductCardProps) {
    const updatedProducts = cartProducts.map((currentProduct) => {
      if (
        currentProduct.title === product.title &&
        currentProduct.quantity > 0
      ) {
        return {
          ...currentProduct,
          quantity: currentProduct.quantity - 1,
        }
      }
      return currentProduct
    })

    setCartProducts(updatedProducts.filter((product) => product.quantity !== 0))
  }

  function handleRemoveProduct(product: ProductCardProps) {
    const productsWithoutDeletedOne: ProductCardProps[] = cartProducts.filter(
      (productToRemove) => productToRemove.title !== product.title,
    )

    setCartProducts(productsWithoutDeletedOne)
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        handleIncreaseProductQuantity,
        handleDecreaseProductQuantity,
        handleRemoveProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
