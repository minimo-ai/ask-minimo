/**
 * Minimo brand logo.
 *
 * Sister mark to Mo (moaihq.com). Same construction language:
 *   Cormorant Garamond on navy, with a bone hairline as the visual signature.
 *
 * Variants:
 *   default  : navy chip + bone "Minimo" + bone hairline foot. Use on bone surfaces.
 *   inverse  : bone "Minimo" on bone background, navy hairline. Use inside navy chrome.
 *
 * Sizing follows the same scale family as Mo so the two read as siblings:
 *   small (chat avatar, dense UI), default (nav, footer), large (hero).
 */

type LogoSize = "small" | "default" | "large";
type LogoVariant = "default" | "inverse";

const SIZE_MAP: Record<LogoSize, { mark: number; word: number; tag: number; gap: number }> = {
  small: { mark: 36, word: 18, tag: 7, gap: 10 },
  default: { mark: 48, word: 24, tag: 8.5, gap: 12 },
  large: { mark: 72, word: 36, tag: 11, gap: 16 },
};

export default function Logo({
  size = "default",
  variant = "default",
  showTag = true,
}: {
  size?: LogoSize;
  variant?: LogoVariant;
  showTag?: boolean;
}) {
  const s = SIZE_MAP[size];
  const isInverse = variant === "inverse";
  const wordColor = isInverse ? "#1B2A3A" : "#1B2A3A";
  const tagColor = isInverse ? "#A9B6A6" : "#7A7670";

  return (
    <div className="flex items-center" style={{ gap: `${s.gap}px` }}>
      <MinimoMark size={s.mark} variant={variant} />
      <div className="flex flex-col" style={{ lineHeight: 1 }}>
        <span
          style={{
            fontFamily: "var(--font-cormorant), Georgia, serif",
            fontWeight: 500,
            fontSize: `${s.word}px`,
            letterSpacing: "-0.01em",
            color: wordColor,
            lineHeight: 1,
          }}
        >
          MiniMo
        </span>
        <span
          style={{
            display: "inline-block",
            width: `${s.word * 1.6}px`,
            height: "1px",
            background: "#6E7F6B",
            marginTop: `${s.word * 0.18}px`,
            marginBottom: `${s.word * 0.16}px`,
          }}
        />
        {showTag && (
          <span
            style={{
              fontFamily: "var(--font-manrope), system-ui, sans-serif",
              fontWeight: 500,
              fontSize: `${s.tag}px`,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: tagColor,
              lineHeight: 1,
            }}
          >
            Real Estate Clarity Companion
          </span>
        )}
      </div>
    </div>
  );
}

/**
 * Minimo icon mark, the navy chip used on its own as an avatar
 * or app icon. Lowercase Cormorant "m" with the bone hairline foot,
 * a quieter sister to Mo's "Mo".
 */
export function MinimoMark({ size = 40, variant = "default" }: { size?: number; variant?: LogoVariant }) {
  const isInverse = variant === "inverse";
  const bg = isInverse ? "transparent" : "#1B2A3A";
  const fg = isInverse ? "#1B2A3A" : "#F5F1EA";
  const radius = size * 0.22;
  const fontSize = size * 0.62;
  const ruleY = size * 0.78;
  const ruleInset = size * 0.22;

  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        width: `${size}px`,
        height: `${size}px`,
        background: bg,
        borderRadius: `${radius}px`,
        border: isInverse ? `1px solid ${fg}` : "none",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-cormorant), Georgia, serif",
          fontWeight: 500,
          fontSize: `${fontSize}px`,
          letterSpacing: "-0.04em",
          color: fg,
          lineHeight: 1,
          marginBottom: `${size * 0.06}px`,
        }}
      >
        m
      </span>
      <span
        style={{
          position: "absolute",
          left: `${ruleInset}px`,
          right: `${ruleInset}px`,
          top: `${ruleY}px`,
          height: "1px",
          background: fg,
        }}
      />
    </span>
  );
}

/**
 * Back-compat export, used by Chat.tsx. Now points at the Cormorant mark.
 */
export function MiniMoIcon({ className = "h-10 w-10" }: { className?: string }) {
  // Extract pixel size from className tailwind value, fallback to 40.
  const match = className.match(/h-(\d+)/);
  const size = match ? Number(match[1]) * 4 : 40;
  return <MinimoMark size={size} />;
}
