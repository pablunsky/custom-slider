import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import * as React from 'react';

interface Props {
  min: number,
  max: number
}

const getMarks = (lower: number, upper: number) => {
  let marks = []

  for (let i = lower; i < upper + 1; i++) {
    marks.push({
      value: i,
      label: i
    })
  }

  return marks
}

export default function CustomSlider({ min, max }: Props) {
  const marks = getMarks(min, max)

  const [value, setValue] = React.useState<number>(0)

  return (
    <Box>
      <Slider
        value={value}
        onChange={(_, value) => setValue(value as number)}
        aria-label='custom-slider'
        min={min}
        max={max}
        defaultValue={0}
        step={1}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box >
  );
}
