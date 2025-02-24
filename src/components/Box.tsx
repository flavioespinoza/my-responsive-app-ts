interface BoxProps {
  color: string
  height: number
  label: string
}

export default function Box({ color, height, label }: BoxProps) {
  return (
    <div
      id={label.replace(/\s+/g, '-').toLowerCase()}
      className={`${color} h-[${height}px] rounded-lg p-4 flex items-start text-left text-white font-bold text-lg`}
    >
      {label}
    </div>
  )
}
