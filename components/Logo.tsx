export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid h-9 w-9 place-items-center rounded-2xl bg-black text-sm font-semibold text-white">
        M
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold">Ask MiniMo</div>
        <div className="text-xs text-black/60">Real estate clarity companion</div>
      </div>
    </div>
  );
}
