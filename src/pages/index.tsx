import Head from "next/head"
import Image from "next/image"

import logo from '@/assets/logo.svg'
import animalsImg from '@/assets/animals.svg'
import { MagnifyingGlass } from "phosphor-react"

export default function Home() {
  return (
    <>
      <Head>
        <title>Find a Friend | Home</title>
      </Head>

      <main className="h-screen bg-red-500 text-white">
        <div className="container mx-auto px-4 h-full flex justify-center flex-col gap-28">
          <Image src={logo} alt="Logo com um rosto de um cachorro com o nome FindAFriend ao lado esquerdo"/>

          <section className="flex justify-between items-center">
            <h1 className="text-7xl font-bold">
              Leve <br/>
              a felicidade <br/>
              para o seu lar
            </h1>

            <Image src={animalsImg} alt="" />
          </section>

          <footer className="flex items-center justify-between ">
            <p className="text-xl">Encontre o animal de estimação ideal <br/> para seu estilo de vida!</p>

            <form action="" className="flex items-center gap-4">
              <span>Busque um amigo:</span>

              <select name="select" className="bg-transparent border border-white rounded-2xl px-2 py-4 flex items-center cursor-pointer">
                <option value="valor1" className="bg-transparent text-black">SP</option>
                <option value="valor2" selected className="bg-transparent text-black">PE</option>
                <option value="valor3" className="bg-transparent text-black">RJ</option>
              </select>

              <select name="select" className="bg-red-700 font-bold py-4 w-64 text-center rounded-2xl cursor-pointer">
                <option value="valor1">Jaboatão</option>
                <option value="valor2" selected >Recife</option>
                <option value="valor3">Olinda</option>
              </select>

              <button
                type="submit" 
                className="bg-yellow-500 text-black py-4 w-16 rounded-2xl flex items-center justify-center hover:opacity-75"
              >
                <MagnifyingGlass size={22}/>
              </button>
            </form>
          </footer>
        </div>
      </main>
    </>
  )
}
