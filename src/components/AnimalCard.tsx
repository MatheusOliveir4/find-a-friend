import Image from "next/image";
import Link from "next/link";

import catImg from '@/assets/cat.jpg'

type AnimalCardProps = {
  name: string,
  imgUrl: string,
  status: 'AVAILABLE' | 'UNAVAILABLE'
}

export function AnimalCard({ name, imgUrl, status }: AnimalCardProps) {
  return (
    <Link
      href="/dashboard"
      className="w-full h-[209px] bg-white p-1 rounded-3xl flex flex-col items-center hover:opacity-50 transition-all duration-300 focus:border-0"
    >
      <Image src={catImg} alt="" className="rounded-3xl object-cover h-[135px]"/>

      <span className={`w-11 h-11 rounded-2xl  ${status === 'AVAILABLE' ? 'bg-yellow-500' : 'bg-red-500'} flex items-center justify-center -mt-6 border-4 border-white box-content`}>
        <Image src={imgUrl} alt="" className="w-4 h-4"/>
      </span>
      
      <strong className="text-lg">{name}</strong>
    </Link>
  )
}