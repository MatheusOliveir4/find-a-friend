import Head from "next/head";

import logo from '@/assets/logo-min.svg'
import Image from "next/image";
import { MagnifyingGlass } from "phosphor-react";
import { AnimalCard } from "@/components/AnimalCard";

import logoMinImg from '@/assets/logo-min.svg'

export default function Dashboard() {
  return (
    <>
      <Head >
        <title>Find a Friend | Dashboard</title>
      </Head>

      <main className="h-screen flex bg-gray-400">
        <aside className="bg-red-500 w-full max-w-[392px] overflow-auto text-white">
          <div className="h-[241px] flex flex-col justify-end bg-red-700 px-10 py-8">
            <Image src={logo} alt="Desenho de rosto de um cachorro representando a marca do Find a Friend"/>

            <form action="" className="flex items-center gap-4 mt-8 ">
              <select name="select" className="bg-transparent border border-white  rounded-2xl px-2 py-4 flex items-center cursor-pointer">
                <option value="valor1" className="bg-transparent text-black">SP</option>
                <option value="valor2" selected className="bg-transparent text-black">PE</option>
                <option value="valor3" className="bg-transparent text-black">RJ</option>
              </select>

              <select name="select" className="bg-red-700 font-bold py-4 w-52 text-center rounded-2xl cursor-pointer">
                <option value="valor1">Jaboatão</option>
                <option value="valor2" selected >Recife</option>
                <option value="valor3">Olinda</option>
              </select>

              <button
                type="submit" 
                className="bg-yellow-500 text-blue-500 py-4 w-16 rounded-2xl flex items-center justify-center hover:opacity-75"
              >
                <MagnifyingGlass size={22}/>
              </button>
            </form>
          </div>

          <section className="px-10 py-8 flex flex-col gap-8">
            <strong className="text-xl font-bold">Filtros</strong>

            <label>
              Idade
              <select name="select" className="bg-red-700 font-bold py-4 px-8 w-full rounded-2xl cursor-pointer">
                <option value="valor2" selected >Filhote</option>
              </select>
            </label>
           
            <label>
              Nível de energia
              <select name="select" className="bg-red-700 font-bold py-4 px-8 w-full rounded-2xl cursor-pointer">
                <option value="valor2" selected >03</option>
              </select>
            </label>

            <label>
              Porte do animal
              <select name="select" className="bg-red-700 font-bold py-4 px-8 w-full rounded-2xl cursor-pointer">
                <option value="valor2" selected >Pequenino</option>
              </select>
            </label>

            <label>
              Nível de independência
              <select name="select" className="bg-red-700 font-bold py-4 px-8 w-full rounded-2xl cursor-pointer">
                <option value="valor2" selected >Médio</option>
              </select>
            </label>
          </section>
        </aside>

        <article className="flex-1 text-blue-500 container mx-auto px-8 overflow-auto">
          <nav className="flex items-center justify-between mt-20">
            <strong className="font-normal text-lg">Encontre <span className="font-bold">324 amigos</span> na sua cidade</strong>
            
            <select name="select" className="focus:border-0 bg-gray-100 bg-opacity-50 p-2 rounded-xl cursor-pointer">
              <option value="valor1">Jaboatão</option>
              <option value="valor2">Gatos e Cachorros</option>
              <option value="valor3">Olinda</option>
            </select>
          </nav>

          <section className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 my-14">
            <AnimalCard
              name="Aquiles"
              imgUrl={logoMinImg}
              status="UNAVAILABLE"
            />

            <AnimalCard
              name="Josefino"
              imgUrl={logoMinImg}
              status="AVAILABLE"
            />

            <AnimalCard
              name="Zeus"
              imgUrl={logoMinImg}
              status="UNAVAILABLE"
            />

            <AnimalCard
              name="Kratos"
              imgUrl={logoMinImg}
              status="AVAILABLE"
            />
          </section>
        </article>
      </main>
    </>
  )
}