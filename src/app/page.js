import Image from 'next/image'
import SobreMi from './portfolio/sobre-mi/page'
import Habilidades from './portfolio/habilidades/page'
import Proyectos from './portfolio/proyectos/page'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-10 font-serif">
      <SobreMi/>
      <Habilidades/>
      <Proyectos/>
    </main>
  )
}
