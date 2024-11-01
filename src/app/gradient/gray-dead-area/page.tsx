import { Link } from '@radix-ui/themes';

export default function GradientPage() {
  return (
    <div className="grid grid-cols-[auto,_1fr] items-center gap-8 p-16">
      <div>normal</div>
      <div className="h-16 bg-gradient-to-r from-cyan-9 to-blue-9"></div>
      <div>&quot;gray dead zone&quot;</div>
      <div className="h-16 bg-gradient-to-r from-yellow-9 to-blue-9"></div>
      <div className="col-span-2 flex flex-col gap-1">
        <Link href="https://css-tricks.com/the-gray-dead-zone-of-gradients/">
          The &quot;Gray Dead Zone&quot; Of Gradients | CSS-Tricks
        </Link>
        <Link href="https://www.learnui.design/tools/gradient-generator.html">
          Gradient Generator (1-click CSS + SVG export) [+inspo gallery]
        </Link>
      </div>
      <div>long direction</div>
      <div className="h-16 bg-[linear-gradient(90deg,#ffe629,#ffce35,#ffb44e,#ff9b6b,#ff858a,#ff76a9,#ff70c8,#ff74e3,#e17cf7,#b285ff,#778cff,#0090ff)]"></div>
      <div>short direction</div>
      <div className="h-16 bg-[linear-gradient(90deg,#ffe629,#ccea2f,#95eb48,#50e867,#00e487,#00dda8,#00d4c7,#00cae2,#00bef6,#00b0ff,#00a1ff,#0090ff)]"></div>
    </div>
  );
}
