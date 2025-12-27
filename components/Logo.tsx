export default function Logo({ size = "default" }: { size?: "small" | "default" | "large" }) {
  const sizes = {
    small: { icon: "h-8 w-8", text: "text-sm", subtext: "text-xs" },
    default: { icon: "h-10 w-10", text: "text-base", subtext: "text-xs" },
    large: { icon: "h-14 w-14", text: "text-xl", subtext: "text-sm" },
  };

  const s = sizes[size];

  return (
    <div className="flex items-center gap-3">
      {/* MiniMo Icon */}
      <div className={`${s.icon} relative`}>
        {/* Soft glow behind */}
        <div className="absolute inset-0 rounded-2xl bg-sage-200 blur-sm opacity-60" />
        
        {/* Main icon container */}
        <div className="relative grid h-full w-full place-items-center rounded-2xl bg-gradient-to-br from-sage-400 to-sage-500 shadow-soft">
          {/* The M */}
          <span className="text-white font-bold text-lg">M</span>
        </div>
      </div>

      {/* Text */}
      <div className="leading-tight">
        <div className={`${s.text} font-display font-semibold text-ink-800`}>
          MiniMo
        </div>
        <div className={`${s.subtext} text-sage-600 font-medium`}>
          Real estate clarity companion
        </div>
      </div>
    </div>
  );
}

// Standalone icon for chat avatar
export function MiniMoIcon({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      <div className="absolute inset-0 rounded-2xl bg-sage-200 blur-sm opacity-60" />
      <div className="relative grid h-full w-full place-items-center rounded-2xl bg-gradient-to-br from-sage-400 to-sage-500 shadow-soft">
        <span className="text-white font-bold text-sm">M</span>
      </div>
    </div>
  );
}
