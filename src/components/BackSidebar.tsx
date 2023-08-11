import Image from "next/image";

import logoMinImg from '@/assets/logo-min.svg'
import { ArrowLeft } from "phosphor-react";


export function BackSidebar() {
  return (
    <aside className="w-[96px] bg-red-500 h-full py-8 flex flex-col justify-between items-center fixed left-0 top-0">
      <Image src={logoMinImg} alt=""/>

      <button
        type="submit" 
        className="bg-yellow-500 text-black py-4 w-16 rounded-2xl flex items-center justify-center hover:opacity-75"
      >
        <ArrowLeft size={22}/>
      </button>
    </aside>
  )
}