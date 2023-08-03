import authImg from '@/assets/auth-img.svg'
import { FormInput } from '@/components/FormInput'
import Image from 'next/image'

export default function Login() {
  return (
    <main className="h-screen container mx-auto flex items-center px-4">
      <Image src={authImg} alt="" />

      <section className='flex-1 flex justify-center '>
        <div className='w-full max-w-[480px]'>
          <h1 className='text-blue-500 font-bold text-5xl'>Boas vindas!</h1>

          <form action="" className='flex flex-col gap-6 mt-24'>
            <FormInput title="Email"/>
            <FormInput title="Senha" type='password'/>
          </form>

          <button className="bg-blue-500 text-white w-full rounded-2xl mt-14 p-4 font-bold hover:opacity-80 transition-all duration-200">
            Login
          </button>

          <button className="bg-gray-200 text-blue-500 w-full rounded-2xl mt-5 p-4 font-bold hover:opacity-70 transition-all duration-200">
            Cadastrar minha organização
          </button>
        </div>
      </section>
    </main>
  )
}