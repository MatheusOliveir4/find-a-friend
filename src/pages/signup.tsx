import { FormInput } from "@/components/FormInput";
import Image from "next/image";
import authImg from '@/assets/auth-img.svg'
import Head from "next/head";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Find a Friend | Cadastrar</title>
      </Head>

      <main className="h-screen container mx-auto flex items-start px-4 py-8">
        <Image src={authImg} alt="" />

        <section className='flex-1 flex justify-center py-8 '>
          <div className='w-full max-w-[480px]'>
            <h1 className='text-blue-500 font-bold text-5xl text-center'>Cadastre sua organização</h1>

            <form action="" className='flex flex-col gap-6 mt-24'>
              <FormInput title="Nome do responsável"/>
              <FormInput title="Email"/>
              <FormInput title="CEP" type="number"/>
              <FormInput title="Endereço"/>
              <FormInput title="Número de telefone" type="number"/>
              <FormInput title="Senha" type='password'/>
              <FormInput title="Confirmar senha" type='password'/>
            </form>

            <button className="bg-blue-500 text-white w-full rounded-2xl mt-14 p-4 font-bold hover:opacity-80 transition-all duration-200">
              Cadastrar
            </button>

            <button className="bg-gray-200 text-blue-500 w-full rounded-2xl mt-5 p-4 font-bold hover:opacity-70 transition-all duration-200">
              Já possui conta?
            </button>
          </div>
        </section>
      </main>
    </>
  )
}