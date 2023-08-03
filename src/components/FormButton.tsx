type FormButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string,
  variant?: 'Primary' | 'Secondary'
}

export function FormButton({ title, variant = 'Primary', ...rest }: FormButtonProps) {
  return (
    <button 
      {...rest}
      className={`
        bg-blue-500
        text-white 
        w-full 
        rounded-2xl 
        p-4 
        font-bold 
        hover:opacity-80 
        transition-all 
        duration-200
        ${variant === 'Secondary' && 'text-blue-500 '}
      `}
    >
      {title}
    </button>
  )
}