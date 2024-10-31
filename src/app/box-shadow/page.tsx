'use client';
import { Button, Checkbox, Slider } from '@radix-ui/themes';
import { useState } from 'react';

export default function BoxShadowPage() {
  const [isInset, setIsInset] = useState<boolean | 'indeterminate'>(false);
  const [offsetX, setOffsetX] = useState([0]);
  const [offsetY, setOffsetY] = useState([0]);
  const [blurRadius, setBlurRadius] = useState([0]);
  const [spreadRadius, setSpreadRadius] = useState([0]);

  const reset = () => {
    setIsInset(false);
    setOffsetX([0]);
    setOffsetY([0]);
    setBlurRadius([0]);
    setSpreadRadius([0]);
  };

  const boxShadow = `${
    isInset ? 'inset' : ''
  } ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRadius}px var(--blue-5)`;
  return (
    <div className="flex flex-col gap-8 p-16 items-center">
      <div
        className="h-48 w-96 rounded-2xl border flex justify-center items-center"
        style={{ boxShadow }}
      >
        box shadow
      </div>
      <div className="w-full grid grid-cols-[auto,48px,1fr] gap-4 items-center justify-start">
        <Button onClick={reset}>reset</Button>
        <span></span>
        <span>box-shadow:{boxShadow}</span>

        <span>inset</span>
        <span></span>
        <Checkbox checked={isInset} onCheckedChange={setIsInset} />

        <span>offset-x</span>
        <span>{offsetX}</span>
        <Slider
          value={offsetX}
          onValueChange={setOffsetX}
          min={-100}
          max={100}
        />

        <span>offset-y</span>
        <span>{offsetY}</span>
        <Slider
          value={offsetY}
          onValueChange={setOffsetY}
          min={-100}
          max={100}
        />

        <span>blur-radius</span>
        <span>{blurRadius}</span>
        <Slider
          value={blurRadius}
          onValueChange={setBlurRadius}
          min={0}
          max={100}
        />

        <span>spread-radius</span>
        <span>{spreadRadius}</span>
        <Slider
          value={spreadRadius}
          onValueChange={setSpreadRadius}
          min={-100}
          max={100}
        />
      </div>
    </div>
  );
}
