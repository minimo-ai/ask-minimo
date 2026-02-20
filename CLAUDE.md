# CLAUDE.md - Ask MiniMo Project Guide

## Project Overview

Ask MiniMo is an AI-powered real estate education companion built by Momentus Real Estate Group. It provides educational real estate guidance (not legal, financial, or brokerage advice) to help users feel calm, clear, and confident about real estate decisions.

**Two Distinct Modes:**
- **Consumer Mode** (`/ask`) — For buyers, sellers, renters, and explorers
- **Agent Mode** (`/ask/agent`) — For real estate professionals needing TREC-compliant language

**Key Domain Expertise:**
- VA loans and veteran homebuying
- New construction homes (1,400+ transactions, 367 DFW builder relationships)
- First-time homebuyer education
- Dallas-Fort Worth market
- TREC compliance and Texas real estate law

## Tech Stack

- **Framework**: Next.js 15.1.0 with App Router (not Pages Router)
- **UI**: React 18.3.1, TypeScript 5.4.5 (strict mode)
- **Styling**: Tailwind CSS 3.4.3 with custom design tokens
- **AI**: OpenAI GPT-4o via `openai@^4.0.0` SDK
- **Payments**: Stripe (`stripe@^17.5.0`) for webhook handling
- **Fonts**: Playfair Display (headings), Inter (body) via Google Fonts
- **Analytics**: Google Analytics (G-68EGN0G21R)

## Project Structure

```
app/
├── api/
│   ├── chat/route.ts              # Core AI conversation endpoint
│   ├── capture-lead/route.ts      # Consumer lead capture → Follow Up Boss CRM
│   ├── capture-agent-lead/route.ts # Agent lead capture → Follow Up Boss CRM
│   └── stripe-webhook/route.ts    # Stripe webhook handler
├── ask/
│   ├── page.tsx                   # Consumer chat interface (client component)
│   └── agent/page.tsx             # Agent chat interface (client component)
├── explore/page.tsx               # Consumer education landing page
├── agents/page.tsx                # Agent recruitment landing page
├── faq/page.tsx                   # Frequently Asked Questions
├── terms/page.tsx                 # Terms of Service
├── privacy/page.tsx               # Privacy Policy
├── disclaimer/page.tsx            # Legal disclaimer page
├── layout.tsx                     # Root layout with SEO metadata, GA, structured data
├── page.tsx                       # Homepage with role selection
└── globals.css                    # Global styles, custom scrollbar, print styles

components/
├── Chat.tsx                       # Legacy reusable chat UI (not used in current app pages)
├── Disclaimer.tsx                 # Legal disclaimer modal
├── ExampleQuestions.tsx           # Onboarding question suggestions
└── Logo.tsx                       # Brand logo (exports Logo + MiniMoIcon)

lib/
├── guards.ts                      # Restricted content detection (rates, qualification, predictions)
├── rateLimit.ts                   # IP-based rate limiting (20 req/60s)
└── validators.ts                  # Input validation (2-1200 chars)

public/
├── widget/minimo-widget.js        # Embeddable widget for partner websites
├── og-image.png                   # Open Graph image (1200x630)
├── manifest.json                  # PWA manifest (theme: #6B8A7A)
├── robots.txt                     # SEO robots file
├── sitemap.xml                    # SEO sitemap
└── favicon.ico, apple-touch-icon.png, android-chrome-*.png
```

## Development Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build (TypeScript compilation + Next.js)
npm start        # Start production server
npm run lint     # ESLint code checking
```

## Environment Variables

Required in `.env.local` (see `.env.example`):
```
OPENAI_API_KEY="your_key_here"
OPENAI_MODEL="gpt-4o"
```

Optional for integrations:
- `FOLLOW_UP_BOSS_API_KEY` — CRM integration for lead capture
- `STRIPE_WEBHOOK_SECRET` — Stripe webhook verification

## Key Architecture Decisions

### API Route: `/api/chat` (POST)

The core AI endpoint. Accepts:
```typescript
{
  messages: Array<{ role: "user" | "assistant", content: string }>,
  isAgent?: boolean,        // false = consumer, true = agent
  userEmail?: string,
  licenseNumber?: string    // agents only
}
```

Returns: `{ message: string }`

Configuration:
- System prompt is ~439 lines with comprehensive MiniMo personality, compliance, and conversation flow guidelines
- Max tokens: 1500 (consumers), 2000 (agents)
- Temperature: 0.55 for balanced, consistent responses
- Presence penalty: 0.2, Frequency penalty: 0.2
- CORS headers enabled for embeddable widget support

System prompt sections include: identity/soul, emotional layer, language rules, stage identification, snapshot questions, buyer/seller flows, home value rules, veteran support, new construction expertise, fair housing compliance, TREC 2026 knowledge, agent mode extensions, natural conversion flows (Eventbrite links after 5-7 exchanges), and Momentus background.

### Lead Capture APIs

**`/api/capture-lead` (POST)** — Consumer leads to Follow Up Boss CRM
- Tags: "Ask MiniMo", "New Lead Unscreened", "Buyer"
- Returns success regardless of CRM response (never blocks user)

**`/api/capture-agent-lead` (POST)** — Agent leads for recruitment
- Requires email + TREC license number
- Tags: "Ask MiniMo", "Agent User", "Potential Recruit"
- Assigned to jim@momentusrealestate.com
- Handles 409 duplicates gracefully

### Content Guards (`lib/guards.ts`)

MiniMo must NOT provide advice on restricted topics. The `looksRestricted(text)` function detects phrases about:
- **Rates/pricing**: interest rate, mortgage rate, APR, rate lock, discount points
- **Qualification**: pre-qual, pre-approval, underwriting, DTI, credit score, FICO, "how much can I borrow"
- **Market predictions**: "will prices go", "market will crash", "should I buy now", "should I wait"

When detected, the `RESTRICTED_REFUSAL` message redirects users to licensed professionals while offering to explain general process and terminology.

### Rate Limiting (`lib/rateLimit.ts`)

In-memory sliding window: 20 requests per 60 seconds per IP. Returns `{ ok, remaining, retryAfterMs }`.

### Input Validation (`lib/validators.ts`)

`assertSafeUserInput(input)` validates chat messages: must be string, 2-1200 characters after trim.

### Email Gating (Client-Side)

Both consumer and agent modes require email before chat access:
- Blocks fake patterns: test@, abc@, asdf@, fake@, admin@, etc.
- Blocks disposable domains: mailinator.com, tempmail.com, 10minutemail.com, etc.
- Requires valid format with minimum 3 chars before @
- Stored in localStorage (`minimo_buyer_email` or `minimo_agent_email`)

Agent mode additionally requires:
- TREC license number (5-10 digits, blocks obvious fakes like 000000, 123456)
- Certification checkbox confirming active TREC license
- Stored in localStorage (`minimo_agent_license`)

### Embeddable Widget (`public/widget/minimo-widget.js`)

JavaScript widget that partner websites can embed to show an "Ask MiniMo" floating button that opens the chat interface.

## Page Architecture

| Route | Type | Purpose |
|-------|------|---------|
| `/` | Server component | Homepage with role selection (explore vs. agent) |
| `/ask` | Client component | Consumer chat with email gating + disclaimer |
| `/ask/agent` | Client component | Agent chat with license verification |
| `/explore` | Server component | Educational landing for consumers before chat |
| `/agents` | Server component | Agent recruitment/onboarding landing |
| `/faq` | Server component | Frequently Asked Questions |
| `/terms` | Server component | Terms of Service |
| `/privacy` | Server component | Privacy Policy |
| `/disclaimer` | Server component | Legal disclaimer |

**UX Flow (Consumer):** Homepage → Explore → `/ask` → Disclaimer modal → Email gate → Chat
**UX Flow (Agent):** Homepage → Agents → `/ask/agent` → Disclaimer modal → Email + License gate → Chat

Both chat modes show a Momentus CTA after 7 messages (consumer: real estate services, agent: recruitment).

## Design System (Tailwind)

### Colors
| Token | Role | Tones |
|-------|------|-------|
| `sage` | Primary (trusted, calm) | 50–900 |
| `cream` | Warm secondary (welcoming) | 50–500 |
| `coral` | Accent (friendly) | 50–500 |
| `blush` | Soft accent (gentle) | 50–200 |
| `ink` | Text/dark | 400–900 |

### Typography
- `font-sans` / `font-inter` — Body text (Inter, sans-serif)
- `font-display` / `font-playfair` — Headlines (Playfair Display, serif)

### Custom Utilities
- Shadows: `shadow-soft`, `shadow-softer`, `shadow-glow` (sage-tinted)
- Animations: `animate-fade-in` (0.5s opacity), `animate-slide-up` (0.5s translate + fade)
- Border radius: `rounded-4xl` (2rem)

### Global CSS (`globals.css`)
- Custom scrollbar: sage-tinted thumb on transparent track
- Selection color: sage with transparency
- Focus-visible: 2px sage outline
- Print styles: hides `.no-print` elements

## Code Style & Conventions

- **Imports**: Use `@/` path alias for root-relative imports
- **Components**: PascalCase filenames and exports
- **Functions**: camelCase
- **Constants**: UPPER_CASE
- **Client components**: Marked with `"use client"` directive
- **Server components**: Default (no directive needed)
- **Styling**: Tailwind utility classes only (no CSS modules, no external UI libraries)
- **State**: React hooks (useState, useRef, useEffect, useMemo) + localStorage for persistence. No global state library.
- **API routes**: Next.js App Router format — `route.ts` with named `POST`/`GET` exports

## Security & Compliance

- **Rate limiting**: IP-based throttling on API endpoints
- **Input validation**: Character limits on all user input
- **Email validation**: Blocks fake/disposable addresses
- **Content guards**: Prevents restricted financial/legal advice
- **Fair housing**: No protected class neighborhood recommendations
- **TREC compliance**: Redirects for legal, disclosure, and licensing topics
- **CORS**: Enabled on `/api/chat` for widget embedding
- **CRM auth**: Basic HTTP auth (base64-encoded) for Follow Up Boss API
- **No sensitive data storage**: Email in localStorage only, no financial data collected

## Important Files

| File | Purpose |
|------|---------|
| `app/api/chat/route.ts` | Core AI logic with ~439-line system prompt |
| `app/ask/page.tsx` | Consumer chat experience with email gating |
| `app/ask/agent/page.tsx` | Agent chat with license verification |
| `components/Logo.tsx` | Brand logo (Logo + MiniMoIcon exports) |
| `components/ExampleQuestions.tsx` | Onboarding question suggestions |
| `lib/guards.ts` | TREC compliance content filtering |
| `lib/rateLimit.ts` | API rate limiting |
| `lib/validators.ts` | Input validation |
| `tailwind.config.ts` | Complete design token definitions |
| `public/widget/minimo-widget.js` | Embeddable partner widget |
| `Ask_MiniMo_Bible.txt` | Comprehensive product documentation |

## Testing

No automated test suite currently. Development relies on:
- TypeScript strict mode compilation for type safety
- ESLint for code quality
- `npm run build` for production validation
- Manual testing in development
