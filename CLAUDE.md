# CLAUDE.md - Ask MiniMo Project Guide

## Project Overview

Ask MiniMo is an AI-powered real estate education companion built by Momentus Real Estate Group. It provides educational real estate guidance (not legal, financial, or brokerage advice) to help users feel calm, clear, and confident about real estate decisions.

**Two Distinct Modes:**
- **Consumer Mode** (`/ask`) - For buyers, sellers, renters, and explorers
- **Agent Mode** (`/ask/agent`) - For real estate professionals needing TREC-compliant language

## Tech Stack

- **Framework**: Next.js 15.1.0 with App Router (not Pages Router)
- **UI**: React 18.3.1, TypeScript 5.4.5
- **Styling**: Tailwind CSS 3.4.3 with custom design tokens
- **AI**: OpenAI GPT-4o integration
- **Fonts**: Cormorant Garamond (display), Manrope (body). Locked April 2026 to match Mo (moaihq.com), MiniMo's sister brand.

## Brand Discipline

These rules apply to all user-facing copy in this repo: chat greetings, agent-mode greetings, page bodies, button labels, error messages, modal copy.

1. **No em dashes.** Use commas, periods, or parentheses. Em dashes are banned in all Mo and MiniMo content. Don't restructure intentional phrasing under "grammar fix" pretext.
2. **No sentence-initial conjunctions.** Do not begin sentences with And, But, So, Because, Or, Yet, Nor.
3. **Use "she" for MiniMo's actions and qualities.** "She helps you understand," not "it helps you understand." "MiniMo" only when naming the platform itself.
4. **Brand mark is "MiniMo"** (camelcase, two capitals). Sister to Mo (single capital). Do not silently rewrite to "Minimo".

## Project Structure

```
app/
├── api/
│   ├── chat/route.ts           # Main AI conversation endpoint
│   ├── capture-lead/route.ts   # Consumer lead capture → Follow Up Boss CRM
│   ├── capture-agent-lead/route.ts
│   └── stripe-webhook/route.ts
├── ask/
│   ├── page.tsx                # Consumer chat interface
│   └── agent/page.tsx          # Agent chat interface
├── layout.tsx                  # Root layout with SEO metadata
└── page.tsx                    # Homepage

components/
├── Chat.tsx                    # Main chat interface component
├── Disclaimer.tsx              # Legal disclaimer modal
├── ExampleQuestions.tsx        # Onboarding questions
└── Logo.tsx                    # Brand logo component

lib/
├── guards.ts                   # Restricted content detection
├── rateLimit.ts                # IP-based rate limiting (20 req/60s)
└── validators.ts               # Email and input validation
```

## Development Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm start        # Start production server
npm run lint     # ESLint code checking
```

## Environment Variables

Required in `.env.local`:
```
OPENAI_API_KEY="your_key_here"
OPENAI_MODEL="gpt-4o"
```

Optional for integrations:
- Follow Up Boss CRM API credentials
- Stripe webhook secrets

## Key Architecture Decisions

### API Route: `/api/chat`
- System prompt is 427 lines with comprehensive personality guidelines
- Max tokens: 1500 (consumers), 2000 (agents)
- Temperature: 0.55 for balanced responses
- Accepts `{ messages: [], isAgent: boolean }`

### Content Guards (`lib/guards.ts`)
MiniMo must NOT provide advice on restricted topics. The guards detect phrases about:
- Interest rates, mortgage rates, APR
- Pre-qualification, pre-approval, underwriting
- Debt-to-income, credit score, FICO
- Market predictions and timing pressure

When detected, users are directed to licensed professionals.

### Rate Limiting
IP-based throttling in `lib/rateLimit.ts`: 20 requests per 60 seconds per IP.

### Email Gating
Consumer chat requires email capture with validation:
- Blocks fake emails (test@, abc@, 123@)
- Blocks disposable domains (mailinator, guerrillamail, etc.)
- Leads sent to Follow Up Boss CRM

## Design System (Tailwind)

Sister brand to Mo (moaihq.com). Same anchors, warmer secondary so MiniMo reads as the front-door sister.

**Anchors (shared with Mo):**
- `bone` (`#F5F1EA`) - base surface
- `bone-soft` (`#EFE9DE`), `bone-paper` (`#FBF8F2`) - softer surfaces and cards
- `navy` (`#1B2A3A`) - text anchor and primary CTA fill
- `navy-soft`, `navy-deep` - soft and deep navy variants
- `sage` 50-900, with `sage-500` (`#6E7F6B`) as the brand sage and `sage-100` (`#E4E8E1`) as the tint
- `stone` (`#C7BFB1`), `stone-soft` (`#DCD5C7`) - borders and dividers
- `ink` 400-900 - body text scale, `ink-800` is the default body color

**Warm secondary (MiniMo's softer voice):**
- `cream` 50-400 - warm paper and accents
- `blush` 50-200 - soft warm peach for gentle moments
- `coral` (back-compat alias mapped to a warmer earth tone)
- `warm` (back-compat alias mapped to cream)

**Typography:**
- `font-display` - Cormorant Garamond, used for headlines
- `font-sans` - Manrope, used for body
- `.font-editorial` (in globals.css) - Cormorant Garamond medium 500, the editorial display style mirroring Mo's marketing surface
- `font-playfair` and `font-inter` are aliased to Cormorant and Manrope respectively for back-compat

**Brand utility classes (in globals.css):**
- `.hairline` - sage hairline rule, the brand's quiet signature (paired with `.tag` for editorial section dividers)
- `.tag` - all-caps Manrope eyebrow, sister to Mo's `.tag`
- `.font-editorial` - Cormorant Garamond Medium with brand-correct letter spacing

**CSS variables (in globals.css):**
All anchors and warm secondary tones are also exposed as CSS custom properties (`--color-bone`, `--color-navy`, `--color-sage-deep`, etc.) so inline styles can reference brand tokens without going through Tailwind classes.

**Other custom classes:**
- `shadow-soft`, `shadow-softer`, `shadow-glow`
- `animate-fade-in`, `animate-slide-up`

## Specializations

MiniMo has deep knowledge in:
- VA loans and veteran homebuying
- New construction homes (1,400+ transactions, 367 DFW builder relationships)
- First-time homebuyer education
- Dallas-Fort Worth market
- TREC compliance and Texas real estate law

## Code Style Notes

- Use `@/` path alias for imports from root
- Components use TypeScript with strict mode
- Tailwind for all styling (no CSS modules)
- API routes use Next.js App Router format (route.ts with named exports)

## Important Files

| File | Purpose |
|------|---------|
| `app/api/chat/route.ts` | Core AI logic with full system prompt |
| `app/ask/page.tsx` | Consumer experience with email gating |
| `components/Chat.tsx` | Reusable chat UI component |
| `lib/guards.ts` | TREC compliance content filtering |
| `tailwind.config.ts` | Complete design token definitions |
| `Ask_MiniMo_Bible.txt` | Comprehensive product documentation |

## Testing

No automated test suite currently. Development relies on:
- TypeScript compilation for type safety
- ESLint for code quality
- Manual testing in development
