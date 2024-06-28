import { Carousel } from '@/components/Carousel'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <main>
      <Header />
      <Carousel />
      <div className="flex items-center justify-center gap-10 mt-20">
        <button className="text-green-800 text-lg">Jogos</button>
        <button className="text-green-800 text-lg">Consoles</button>
      </div>
    </main>
  )
}
