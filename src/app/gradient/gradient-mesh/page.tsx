'use client';
import { Button } from '@radix-ui/themes';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function GradientMeshPage() {
  const router = useRouter();

  const jumpToToolWebsite = () => {
    router.push('https://csshero.org/mesher/');
  };

  useEffect(() => {
    const mouseMoveHandler = (e: MouseEvent) => {
      document.body.style.setProperty(
        '--x-ratio',
        `${e.x / window.screen.width}%`,
      );
      document.body.style.setProperty(
        '--y-ratio',
        `${e.y / window.screen.height}%`,
      );
    };
    window.addEventListener('mousemove', mouseMoveHandler);
    return () => {
      document.body.style.removeProperty('--x-ratio');
      document.body.style.removeProperty('--y-ratio');
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  });

  return (
    <div className="gradient-mesh-bg h-screen w-screen">
      <div className="relative h-full w-full backdrop-blur-2xl">
        <div className="absolute top-[40%] w-full gap-8 space-y-8 px-12 sm:left-[20%] sm:w-[480px] sm:px-0">
          <div className="text-[4rem] font-extrabold leading-none">
            Lorem Ipsum
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et
            sapien laoreet nisl tempus sagittis. Ut diam justo, euismod et
            interdum ornare, porttitor sit amet tortor. Donec elementum laoreet
            ipsum, id aliquam dolor sodales in.
          </div>
          <div className="space-x-4">
            <Button
              variant="solid"
              radius="full"
              size="3"
              color="gray"
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
