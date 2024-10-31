export default function BoxShadowPageRing() {
  return (
    <div className="flex flex-col gap-8 p-16">
      <div className="flex items-center gap-4">
        border
        <div className="border-demo rounded-lg bg-blue-3 p-4 hover:border-4 hover:border-blue-8">
          border 🤔️
        </div>
        <div className="border-demo rounded-lg bg-blue-3 p-4 hover:ring-4 hover:ring-inset hover:ring-blue-8">
          ring (box shadow) 🤓️
        </div>
      </div>

      <div className="flex items-center gap-4">
        border radius
        <div className="radius-demo bg-blue-8 text-white">
          <div className="flex size-20 items-center justify-center rounded-3xl bg-blue-11">
            🤔️
          </div>
        </div>
        <div className="radius-demo bg-blue-8 text-white">
          <div className="flex size-20 items-center justify-center rounded-2xl bg-blue-11">
            🤓️
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        nested rings
        <div className="border-demo border-separate rounded-lg border border-blue-8 bg-blue-11 text-white">
          <div className="rounded-[7px] border border-white p-[14px]">
            2 nested element 🤔️
          </div>
        </div>
        <div className="border-demo rounded-lg bg-blue-11 p-4 text-white ring-1 ring-inset ring-white ring-offset-1 ring-offset-blue-8">
          ring and ring-offset (2 box shadows in 1 element) 🤓️
        </div>
      </div>
    </div>
  );
}
