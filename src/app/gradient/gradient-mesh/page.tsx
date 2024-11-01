'use client';
import { Button } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function GradientMeshPage() {
  const router = useRouter();

  const [step, setStep] = useState(0);
  const changeStep = () => {
    setStep((old) => (old + 1) % 5);
  };
  const jumpToToolWebsite = () => {
    router.push('https://csshero.org/mesher/');
  };

  return (
    <div className={'h-screen w-screen ' + `bg-step-${step}`}>
      <div
        className={
          'relative h-full w-full ' + (step >= 4 ? 'backdrop-blur-2xl' : '')
        }
      >
        <div className="absolute top-[40%] w-full gap-8 space-y-8 px-12 sm:left-[20%] sm:w-[480px] sm:px-0">
          <div className="text-[4rem] font-extrabold leading-none">
            Lorem Ipsum
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
            sapien laoreet nisl tempus sagittis. Ut diam justo, euismod et
            interdum ornare, porttitor sit amet tortor. Donec elementum laoreet
            ipsum, id aliquam dolor sodales in. {step}
          </div>
          <div className="space-x-4">
            <Button
              variant="solid"
              radius="full"
              size="3"
              highContrast
              onClick={changeStep}
            >
              Next Step
            </Button>
            <Button
              variant="outline"
              radius="full"
              size="3"
              highContrast
              onClick={jumpToToolWebsite}
            >
              Tool Link
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
