interface BoxProps {
	color: string
	height: number
}

export default function Box({ color, height }: BoxProps) {
	return <div className={`${color} h-[${height}px] rounded-lg`}></div>
}
