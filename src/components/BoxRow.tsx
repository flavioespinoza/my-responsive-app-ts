
import Box from './Box';

interface BoxRowProps {
  numBoxes: number;
  height: number;
  colors: string[];
}

export default function BoxRow({ numBoxes, height, colors }: BoxRowProps) {
  return (
    <div className={\`grid grid-cols-\${numBoxes} gap-4\`}>
      {colors.map((color, index) => (
        <Box key={index} color={color} height={height} />
      ))}
    </div>
  );
}
