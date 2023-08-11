import { BackSidebar } from "@/components/BackSidebar";
import Head from "next/head";
import Image from "next/image";

import dogImg from '@/assets/dog.jpg'
import catImg from '@/assets/cat.jpg'
import logoMinImg from '@/assets/logo-min.svg'

import { Info, Lightning, WhatsappLogo } from "phosphor-react";

export default function Perfil() {
  return (
    <>
      <Head>
        <title>Find a Friend | Perfil</title>
      </Head>

      <main className="h-full bg-gray-400">
        <BackSidebar />

        <section className="flex flex-col items-center justify-center w-full py-8">
          <span className="text-gray-500">Seu novo amigo</span>

          <article className="w-[704px] rounded-2xl my-8 bg-white overflow-hidden">
            <Image src={dogImg} alt="" className="w-full h-[336px] object-cover"/>

            <div className="px-16 mt-8">
              <div className="grid grid-cols-6 ">
                <Image src={catImg} alt="" className="rounded-2xl h-[80px] w-[80px] object-cover"/>
                <Image src={catImg} alt="" className="rounded-2xl h-[80px] w-[80px] object-cover"/>
                <Image src={catImg} alt="" className="rounded-2xl h-[80px] w-[80px] object-cover"/>
                <Image src={catImg} alt="" className="rounded-2xl h-[80px] w-[80px] object-cover"/>
                <Image src={catImg} alt="" className="rounded-2xl h-[80px] w-[80px] object-cover"/>
                <Image src={catImg} alt="" className="rounded-2xl h-[80px] w-[80px] object-cover"/>
              </div>

              <div className="mt-16 text-blue-500 space-y-4">
                <strong className="text-5xl font-bold">Alfredo</strong>
                <p className="font-semibold">Eu sou um lindo doguinho de 3 anos, um jovem bricalhão que adora fazer companhia, uma bagunça mas também ama uma soneca.</p>
              </div>

              <div className="grid grid-cols-3 gap-6 text-blue-500 my-16 font-bold">
                <div className="rounded-2xl border-2 border-gray-400 p-6 space-y-2">
                  <Lightning size={20}/>
                  <span className="inline-block">Muita energia</span>
                </div>

                <div className="rounded-2xl border-2 border-gray-400 p-6 space-y-2">
                  <Lightning size={20}/>
                  <span className="inline-block">Muita energia</span>
                </div>

                <div className="rounded-2xl border-2 border-gray-400 p-6 space-y-2">
                  <Lightning size={20}/>
                  <span className="inline-block">Muita energia</span>
                </div>
              </div>

              <div className="pb-12 border-b border-gray-300">
                <div className="h-[291px] bg-red-500 rounded-2xl "></div>
              </div>

              <div className="my-8 flex gap-4 pb-12 border-b border-gray-300">
                <span className='w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center'>
                  <Image src={logoMinImg} alt="" className="w-5 h-5"/>
                </span>

                <div className="text-blue-500">
                  <strong className="text-xl">Seu Cãopanheiro</strong>
                  <p>Rua do meio, 123 , Boa viagem, Recife - PE </p>
                  <button className="flex items-center justify-center gap-4 p-3 rounded-md mt-4 bg-gray-200 border border-transparent ">
                    <WhatsappLogo size={24} weight='fill'/>
                    81 1234.4567
                  </button>
                </div>
              </div>

              <div className="pb-12 border-b border-gray-300">
                <strong className="text-2xl text-blue-500">Requesitos para adoção</strong>

                <div className="space-y-2 my-8">
                  <span className="w-full text-red-500 border border-red-500 rounded p-3 bg-gradient-to-r from-[#F75F601A] to-[#F1515600] flex gap-4">
                    <Info size={24}/>
                    Local grande para o animal correr e brincar
                  </span>

                  <span className="w-full text-red-500 border border-red-500 rounded p-3 bg-gradient-to-r from-[#F75F601A] to-[#F1515600] flex gap-4">
                    <Info size={24}/>
                    Proibido apartamento
                  </span>

                  <span className="w-full text-red-500 border border-red-500 rounded p-3 bg-gradient-to-r from-[#F75F601A] to-[#F1515600] flex gap-4">
                    <Info size={24}/>
                    Ambiente frio, pois possui muito pelo.
                  </span>
                </div>
              </div>

              <button className="w-full text-center bg-green-500 rounded-2xl p-4 text-white font-bold my-12">
                Entrar em contato
              </button>
            </div>
          </article>
        </section>
      </main>
    </>

  )
}