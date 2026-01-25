# CLAUDE.md - Ask MiniMo Codebase Guide

This document provides guidance for AI assistants working with the Ask MiniMo codebase.

## Project Overview

**Ask MiniMo** is an AI-powered real estate education platform designed as a "clarity companion" that helps people understand real estate concepts without pressure or sales tactics. It was built in 48 hours in December 2024, powered by expertise from Maureen Cappallo (Mo), founder of Momentus Real Estate Group with 14+ years of DFW real estate experience.

**Live URL:** https://askminimo.com

### Key Product Principles
- Educational tool only, NOT a brokerage service
- Two distinct user modes: Consumers (buyers/sellers) and Real Estate Agents
- Free tier available; premium tiers for enhanced access
- Fully compliant with Texas TREC regulations
- Never provides rates, payment quotes, or legal advice

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5.4+ |
| Styling | Tailwind CSS 3.4+ |
| AI/LLM | OpenAI API (GPT-4o) |
| Payments | Stripe 17.5+ |
| CRM | Follow Up Boss |
| Analytics | Google Analytics 4 |
| Runtime | Node.js (ES modules) |

## Quick Start

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env
# Edit .env with your OPENAI_API_KEY

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Project Structure

```
ask-minimo/
├── app/                           # Next.js App Router
│   ├── layout.tsx                 # Root layout (metadata, GA4, fonts)
│   ├── page.tsx                   # Homepage (role selection)
│   ├── globals.css                # Global styles + animations
│   ├── explore/page.tsx           # Consumer education landing
│   ├── ask/
│   │   ├── page.tsx               # Consumer chat interface
│   │   └── agent/page.tsx         # Agent chat interface
│   ├── agents/page.tsx            # Agent marketing page
│   ├── api/
│   │   ├── chat/route.ts          # Main AI conversation endpoint (CRITICAL)
│   │   ├── capture-lead/route.ts  # Consumer lead capture
│   │   ├── capture-agent-lead/route.ts # Agent recruitment
│   │   └── stripe-webhook/route.ts    # Payment processing
│   ├── disclaimer/                # Legal pages
│   ├── terms/
│   ├── privacy/
│   └── faq/
├── components/                    # Reusable React components
│   ├── Chat.tsx                   # Generic chat component
│   ├── Logo.tsx                   # MiniMo branding
│   ├── Disclaimer.tsx             # Compliance disclaimers
│   └── ExampleQuestions.tsx       # Suggested prompts
├── lib/                           # Utility functions
│   ├── guards.ts                  # Content filtering (restricted phrases)
│   ├── validators.ts              # Input validation
│   └── rateLimit.ts               # Rate limiting logic
├── public/                        # Static assets
│   ├── og-image.png
│   ├── favicon.ico
│   └── manifest.json
├── Ask_MiniMo_Bible.txt           # Comprehensive product spec
├── tailwind.config.ts             # Design system
├── next.config.js
├── tsconfig.json
└── package.json
```

## Critical Files

| File | Purpose |
|------|---------|
| `app/api/chat/route.ts` | MiniMo's AI brain - contains 800+ line system prompt with personality, guardrails, and TREC compliance |
| `lib/guards.ts` | Content filtering to prevent restricted topics (rates, qualifications, predictions) |
| `Ask_MiniMo_Bible.txt` | Complete product specification and philosophy |
| `tailwind.config.ts` | Design system with brand colors and typography |

## Environment Variables

Required in `.env`:
```
OPENAI_API_KEY="your_key_here"
OPENAI_MODEL="gpt-4o"
```

Additional variables used in production:
- `FOLLOW_UP_BOSS_API_KEY` - CRM integration
- `STRIPE_SECRET_KEY` - Payment processing
- `STRIPE_WEBHOOK_SECRET` - Webhook verification

## Design System

### Brand Colors (Tailwind)
- **sage** (primary): `#627562` - buttons, links, headers
- **coral** (accent): `#ed6b4e` - urgency, alerts
- **cream** (background): `#fdf9f3` - soft backgrounds
- **ink** (text): `#1f2937` - dark text
- **blush**: `#fdf7f7` - subtle accents
- **warm**: warm reds/taupes

### Typography
- **Headlines:** `font-display` (Playfair Display - elegant serif)
- **Body:** `font-sans` (Nunito - clean sans-serif)

### Component Patterns
- Border radius: `rounded-4xl` (2rem) for major containers
- Shadows: `shadow-soft`, `shadow-softer`, `shadow-glow`
- Animations: `animate-fade-in`, `animate-slide-up`

## Coding Conventions

### TypeScript
- Strict mode enabled
- Use `@/*` path alias for imports from root
- ES modules (`"type": "module"` in package.json)

### React/Next.js
- App Router patterns (not Pages Router)
- Client components marked with `'use client'`
- API routes use Route Handlers (`route.ts`)

### Input Validation Pattern
```typescript
import { assertSafeUserInput } from "@/lib/validators";

// In API routes
const message = assertSafeUserInput(body.message);
// Throws if invalid - handles length limits (2-1200 chars)
```

### Content Guard Pattern
```typescript
import { looksRestricted, RESTRICTED_REFUSAL } from "@/lib/guards";

if (looksRestricted(userMessage)) {
  return Response.json({ reply: RESTRICTED_REFUSAL });
}
```

### Rate Limiting Pattern
```typescript
import { rateLimit } from "@/lib/rateLimit";

const ip = req.headers.get("x-forwarded-for") ?? "unknown";
const { ok, remaining } = rateLimit(ip);
if (!ok) {
  return Response.json({ error: "Rate limited" }, { status: 429 });
}
```

## Compliance Requirements (CRITICAL)

### Content Guardrails - Never Discuss:
- Interest rates, APR, rate locks, points
- Qualification, pre-approval, DTI, credit scores
- Market predictions, timing pressure
- Payment calculations or estimates

### Fair Housing Compliance
- No steering by protected class (race, color, religion, sex, disability, familial status, national origin)
- Use objective criteria only (commute, budget, lifestyle, features)
- Neutral responses on schools/safety topics

### TREC Compliance
- The system prompt includes Texas TREC 2025/2026 regulations
- Contract form changes (Jan 3, 2025)
- SB 1968 updates (Jan 1, 2026)
- Seller disclosure requirements

## User Flows

### Consumer Path
1. Homepage (`/`) -> Select "Buyer or Seller"
2. Explore page (`/explore`) -> Education landing
3. Chat (`/ask`) -> Email gate -> Accept disclaimer -> AI conversation
4. 15 free messages, then upgrade prompt

### Agent Path
1. Homepage (`/`) -> Select "Licensed Agent"
2. Agents page (`/agents`) -> Marketing/features
3. Chat (`/ask/agent`) -> License verification -> AI conversation
4. Agent-specific system context

## Message Tier Limits

| Tier | Max Messages | Max Tokens |
|------|--------------|------------|
| Free | 15 | 800 |
| Clarity Plus ($9/mo) | Unlimited | 1,500 |
| Agent Pro ($19/mo) | Unlimited | 2,000 |

## Lead Capture

### Consumer Leads -> Follow Up Boss
- Tags: "Ask MiniMo", "New Lead Unscreened", "Buyer"
- Email validation blocks disposable/fake emails

### Agent Leads -> Follow Up Boss
- Tags: "Ask MiniMo", "Agent User", "Potential Recruit"
- Assigned to Jim for recruitment

## Testing

Currently no automated test suite. When adding tests:
- Use Jest or Vitest for unit tests
- Test content guards thoroughly
- Test input validation edge cases

## Common Tasks

### Modifying MiniMo's Personality/Behavior
Edit `app/api/chat/route.ts` - the system prompt defines all behavior.

### Adding New Restricted Phrases
Edit `lib/guards.ts` - add phrases to `restrictedPhrases` array.

### Updating Design Tokens
Edit `tailwind.config.ts` - colors, fonts, shadows, animations.

### Adding New Pages
Create folder in `app/` with `page.tsx` (follows Next.js App Router conventions).

## Version Information

- **Current Version:** 1.0.2
- **Created:** December 2024
- **Framework:** Next.js 15.1.0
- **Node:** ES modules

## Important Notes for AI Assistants

1. **Read Before Editing:** Always read files before suggesting modifications, especially `app/api/chat/route.ts`.

2. **Compliance is Critical:** Never suggest code that violates TREC regulations or fair housing laws.

3. **Keep It Simple:** The product was built in 48 hours - avoid over-engineering.

4. **Brand Voice:** MiniMo is warm, grounded, and clarity-focused. Never pushy or sales-oriented.

5. **Test Content Guards:** If modifying guards.ts, ensure restricted content is properly blocked.

6. **Product Bible:** Reference `Ask_MiniMo_Bible.txt` for detailed product philosophy and requirements.

7. **No Secrets in Code:** API keys go in `.env`, never commit them.
