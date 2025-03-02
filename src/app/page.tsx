'use client'

import { Carousel } from '@/components/Carousel'
import { ProductCard } from '@/components/ProductCard'

import f1Logo from '@/../public/f1-2024-thumb.jpg'
import aloneInTheDarkLogo from '@/../public/alone-in-the-dark-thumb.jpg'
import spidermanLogo from '@/../public/spider-man-2-thumb.jpeg'
import outlastLogo from '@/../public/outlast-thumb.jpg'

import ps4Thumb from '@/../public/ps4-thumb.jpg'
import ps5Thumb from '@/../public/ps5-thumb.jpg'
import xboxXThumb from '@/../public/xbox-thumb.png'
import xboxSThumb from '@/../public/xbox-s-thumb.webp'

import Image from 'next/image'

import Logo from '@/../public/gpi.jpg'

import { useState } from 'react'

const gamesList = [
  {
    imageSrc: spidermanLogo,
    title: 'Spider Man 2',
    description:
      'Os Spiders Peter Parker e Miles Morales estão de volta em mais uma aventura eletrizante da famosa franquia Marvel.',
    price: 350,
    quantity: 0,
  },
  {
    imageSrc: f1Logo,
    title: 'F1 2024',
    description:
      'Faça parte do grid mais célebre do automobilismo com o EA SPORTS F1 24.',
    price: 350,
    quantity: 0,
  },
  {
    imageSrc: aloneInTheDarkLogo,
    title: 'Alone in the dark',
    description:
      'Alone in the Dark é um jogo de terror de sobrevivência e é um remake do jogo de computador de 1992.',
    price: 300,
    quantity: 0,
  },
  {
    imageSrc: outlastLogo,
    title: 'The Outlast Trials',
    description:
      'The Outlast Trials é um jogo eletrônico vindouro de tiro em primeira pessoa e survival horror psicológico',
    price: 100,
    quantity: 0,
  },
]

const consolesList = [
  {
    imageSrc: ps4Thumb,
    title: 'Playstation 4',
    description:
      'Armazene seus jogos, aplicativos, capturas de tela e vídeos com até 1TB de espaço no console PS4.',
    price: 2600,
    quantity: 0,
  },
  {
    imageSrc: ps5Thumb,
    title: 'Playstation 5',
    description:
      'Curta o carregamento ultrarrápido com o SSD de altíssima velocidade e maior imersão com os recursos de resposta tátil.',
    price: 3600,
    quantity: 0,
  },
  {
    imageSrc: xboxSThumb,
    title: 'Xbox Series S',
    description:
      'O Xbox Series S é um console de entrada da Microsoft lançado em 2020. Ele é uma versão mais acessível e compacta do Xbox Series X.',
    price: 4500,
    quantity: 0,
  },
  {
    imageSrc: xboxXThumb,
    title: 'Xbox Series X',
    description:
      'Descubra o Xbox mais rápido e potente de todos os tempos com o Xbox Series X. Aproveite os jogos em 4K em até 120 quadros por segundo.',
    price: 3500,
    quantity: 0,
  },
]

export default function Home() {
  const [tabSelected, setTabSelected] = useState('games')
  return (
    <div>
      <div className="px-8 xl:px-28 2xl:px-48">
        <Carousel />
      </div>
      <div className="flex items-center justify-center gap-10 mt-12">
        <button
          className={`px-4 py-2 border border-green-800 w-28 xl:w-40 xl:text-lg text-green-800 rounded-xl hover:bg-green-800 hover:text-zinc-100 transition duration-150 ${tabSelected === 'games' && 'bg-green-800 text-zinc-100'}`}
          onClick={() => setTabSelected('games')}
        >
          Jogos
        </button>
        <button
          className={`px-4 py-2 border border-green-800 w-28 xl:w-40 xl:text-lg text-green-800 rounded-xl hover:bg-green-800 hover:text-zinc-100 transition duration-150 ${tabSelected === 'consoles' && 'bg-green-800 text-zinc-100'}`}
          onClick={() => setTabSelected('consoles')}
        >
          Consoles
        </button>
      </div>
      {tabSelected === 'games' ? (
        <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:place-items-center items-center gap-20 px-10 xl:px-28 2xl:px-48 pt-12 pb-20">
          {gamesList.map((game) => {
            return (
              <ProductCard
                key={game.title}
                imageSrc={game.imageSrc}
                title={game.title}
                description={game.description}
                price={game.price}
                quantity={game.quantity}
              />
            )
          })}
        </div>
      ) : (
        <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 md:place-items-center items-center gap-20 px-10 xl:px-28 2xl:px-48 pt-12 pb-20">
          {consolesList.map((console) => {
            return (
              <ProductCard
                key={console.title}
                imageSrc={console.imageSrc}
                title={console.title}
                description={console.description}
                price={console.price}
                quantity={console.quantity}
              />
            )
          })}
        </div>
      )}
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
          <span className="text-xl font-semibold text-green-700">
            Ponte Games
          </span>
        </div>
        <span className="text-zinc-300 text-sm">
          Teste Técnico - NextGen Development
        </span>
      </footer>
    </div>
  )
}
