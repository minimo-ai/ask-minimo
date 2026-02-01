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
- **Fonts**: Playfair Display (headings), Inter (body)

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

**Custom Colors:**
- `sage` - Primary (trusted, calm)
- `cream` - Secondary warm (welcoming)
- `coral` - Accent (friendly)
- `blush` - Soft accent (gentle)
- `ink` - Text color

**Typography:**
- `font-playfair` - Display/headlines (serif)
- `font-inter` - Body text (sans-serif)

**Custom Classes:**
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
