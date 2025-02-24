import Box from '@/components/Box'

interface BoxRowProps {
  numBoxes: number
  height: number
  colors: string[]
  labels: string[] // ✅ Add this property to the interface
}

export default function BoxRow({ numBoxes, height, colors, labels }: BoxRowProps) {
  return (
    <div
      className={`grid gap-4 ${
        numBoxes === 2
          ? 'grid-cols-1 md:grid-cols-2'
          : numBoxes === 3
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4'
      }`}
    >
      {colors.map((color, index) => (
        <Box key={index} color={color} height={height} label={labels[index]} />
      ))}
    </div>
  )
}
