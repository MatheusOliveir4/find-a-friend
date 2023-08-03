type FormInputProps = {
  title: string,
  type?: string
}

export function FormInput({ title, type = 'text' }: FormInputProps) {
  return (
    <label className="text-blue-500 font-bold">
      {title}
      <input type={type} className='w-full p-4 bg-gray-200 border border-gray-300 rounded-md'/>
    </label>
  )
}