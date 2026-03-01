# MEMORY.md — MiniMo System Audit Results

**Audit Date:** March 2026
**Prepared by:** Claude Code
**Source:** Full MiniMo System Audit (February 2026)
**Branch:** claude/minimo-system-audit-4WmwG

---

## AUDIT SUMMARY

Full system audit of MiniMo's system prompt, conversation paths, conversion language, and compliance posture. All 12 priority items addressed.

---

## CHANGES MADE

### P1 — Fixed "Clarity Session" Terminology (CRITICAL)
- **Before:** "15-minute Clarity Sessions" with Eventbrite link
- **After:** "Ready or Not? Session — 45 to 60 minutes, free" with updated booking URL
- **Files changed:** `app/api/chat/route.ts`
- All instances of "Clarity Session" replaced throughout system prompt
- "WHEN SOMEONE WANTS TO TALK TO THE TEAM" section updated

### P2 — Updated Booking URLs (CRITICAL) ✅ VERIFIED
- **Before:** `https://www.eventbrite.com/o/momentus-real-estate-group-120870625891` (all links)
- **After:** Three verified URLs:
  - Booking (Ready or Not?): `https://outlook.office.com/book/ReadyorNotAppointment@NETORGFT16233530.onmicrosoft.com/`
  - Webinar Registration: `https://momentusrealestategroup.com/webinar-registration/`
  - Veteran Q&A: `https://momentusrealestategroup.com/webinar-registration/` (shares webinar registration page)
- **STATUS:** All URLs verified by Mo (March 2026). Microsoft Bookings confirmed for Ready or Not? sessions.

### P3 — Built Dedicated Veteran Path (CRITICAL)
- **Before:** Veteran content existed but no dedicated journey path. Veterans landed in general buyer flow.
- **After:** Full dedicated Veteran Path with:
  - Dedicated opening acknowledging service
  - Orienting questions specific to military situations
  - First-time VA user education (COE, entitlement, funding fee, MPRs)
  - Second-time VA user education (remaining entitlement, restoration, IRRRL)
  - PCS move path (timeline planning, BAH, remote closings)
  - Surviving spouse path (gentle tone, DIC awareness)
  - Disabled veteran awareness (TX property tax exemptions, SAH/SHA grants)
  - Veteran-specific conversion offers (Ready or Not? session + Veteran Q&A)

### P4 — Built New Construction Branch (CRITICAL)
- **Before:** New construction section had basic education points but no dedicated path.
- **After:** Full New Construction Branch with:
  - Dedicated opening with Mo's credentials (1,400+ transactions, 367 builders)
  - Orienting questions for new construction buyers
  - Detailed education points delivered one at a time:
    - Builder representation
    - Builder contracts
    - Incentives
    - Construction timelines
    - Inspections (pre-drywall + final)
    - Builder warranty
    - Design center strategy
  - New construction-specific conversion offer

### P5 — Deepened Seller Path (HIGH PRIORITY)
- **Before:** Seller path existed but was shallow (4 brief sections).
- **After:** Expanded seller path with:
  - **Exploring Seller:** Equity awareness, market conditions, rent vs. sell framework, general process overview
  - **Planning Soon Seller:** Pricing education (process, not values), prep/staging overview, seller timeline map, closing walkthrough
  - **Transition-Driven Seller:** Emotional acknowledgment, timing strategy, attorney involvement guidance, "as-is" education
  - **Not Yet Seller:** Low-pressure prep ideas, soft bridge back with monthly content offer
  - Each section has specific conversion offers

### P6 — Added "Not Yet" Email Capture (HIGH PRIORITY)
- Added soft bridge-back language in both buyer and seller "Not Yet" paths
- MiniMo now offers Mo's free monthly content as a reconnection tool
- Encourages email sharing for long-term nurture (MailerLite Cold Leads sequence)
- No hard push — framed as optional content offer

### P7 — Added Post-Lead-Capture Confirmation (HIGH PRIORITY)
- Added dedicated "POST-LEAD-CAPTURE CONFIRMATION" section to system prompt
- MiniMo now tells users: "Jim from Mo's team will reach out within one business day to schedule your Ready or Not? session."
- Sets expectations, reduces no-shows, builds trust
- Also added to "WHEN SOMEONE WANTS TO TALK TO THE TEAM" section

### P8 — Replaced Webinar/Eventbrite Links (HIGH PRIORITY)
- All Eventbrite links removed from system prompt
- Replaced with Momentus domain URLs (see P2 above)
- **ACTION REQUIRED:** Verify webinar and veteran Q&A registration pages are live

### P9 — Added DFW 8-County Service Area (MEDIUM)
- Added complete "MOMENTUS SERVICE AREA" section to system prompt
- 8 counties with key cities:
  - Tarrant (HQ), Collin, Denton, Dallas, Rockwall, Kaufman, Ellis, Grayson
- Explicit instruction: "Never imply Momentus only serves Grapevine or north Tarrant County"
- MiniMo now acknowledges user's city when it falls in service area

### P10 — Added Move-Up / Move-Down Buyer Branch (MEDIUM)
- New dedicated section for current homeowners
- Four sub-paths:
  - Buy-Before-Sell (bridge loans, contingent offers, rent-backs)
  - Sell-First (timing, temporary housing, stronger buying position)
  - Downsizer (equity awareness, tax considerations, lifestyle decisions)
  - Light Investor (primary vs. investment basics, financing differences)
- Conversion offer specific to this path

### P11 — Added Momentus Identity to Agent Path (MEDIUM)
- Added "Momentus Identity (Agent Mode Only)" subsection
- Light, natural branding — not a recruiting pitch
- Rules: never pressure, never make it a sales pitch, only mention when natural
- If agent asks directly about Momentus, share About section and offer to connect with Mo

### P12 — Noted Claude Temperature Testing (MEDIUM)
- Added TODO comments at top of `app/api/chat/route.ts`
- Current temperature: 0.55 (tuned for GPT-4o)
- Post-Claude integration: test at 0.4, 0.55, and 0.65
- Target: warm, concise, Mo's voice

---

## LEGACY TERMINOLOGY SCAN

Scanned entire codebase for retired terminology:
- "Clarity Session" — **REMOVED** from all active code
- "Eventbrite" — **REMOVED** from all active code
- "Smart Start" — Only exists in `Ask_MiniMo_Bible.txt` (reference doc, not active code)
- "Workshop" — Not found in active code
- "free consultation" — Not found in active code
- "15-minute" — **REMOVED** from all active code

---

## ACTION ITEMS REMAINING (For Mo / Team)

1. ~~**VERIFY BOOKING URL:**~~ ✅ DONE — Updated to Microsoft Bookings: `https://outlook.office.com/book/ReadyorNotAppointment@NETORGFT16233530.onmicrosoft.com/`
2. ~~**VERIFY EVENTS URL:**~~ ✅ DONE — Updated to: `https://momentusrealestategroup.com/webinar-registration/`
3. ~~**VERIFY VETERAN URL:**~~ ✅ DONE — Uses webinar registration page: `https://momentusrealestategroup.com/webinar-registration/`
4. **SET UP MAILERLITE INTEGRATION:** The "not yet" email capture flow directs users to share their email for Mo's monthly content. Ensure this connects to the MailerLite Cold Leads nurture sequence.
5. **TEST CLAUDE TEMPERATURE:** After Claude integration, test conversations at 0.4, 0.55, and 0.65 temperature settings. Adjust based on voice quality.
6. **FUB LEAD CAPTURE TEST:** After deployment, test a full conversation through to lead submission. Verify it appears in Follow Up Boss with correct tags and notes.
7. **RETURNING USER RECOGNITION:** Flagged for Mo.ai Layer 2 consideration — not in current sprint. Requires session/account system.

---

## FILES MODIFIED

| File | Changes |
|------|---------|
| `app/api/chat/route.ts` | Complete system prompt rewrite — all 12 audit priorities addressed |
| `MEMORY.md` | Created — audit findings and action items |

---

## WHAT WAS NOT CHANGED (AND WHY)

| File | Reason |
|------|--------|
| `app/ask/page.tsx` | Consumer UI unchanged — no legacy terminology found, email capture already in place |
| `app/ask/agent/page.tsx` | Agent UI unchanged — no legacy terminology found |
| `components/Chat.tsx` | Legacy component unchanged — no legacy terminology found |
| `lib/guards.ts` | Content guards unchanged — working correctly |
| `lib/rateLimit.ts` | Rate limiting unchanged — working correctly |
| `Ask_MiniMo_Bible.txt` | Reference document — "Smart Start" reference is historical, not active |
| `tailwind.config.ts` | Design system unchanged |

---

*Audit complete. MiniMo is ready for Claude integration pending URL verification.*
