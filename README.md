# Experience Services Catalog (GXC 2026.Q3)

Searchable, filterable version of the Government Experience Cloud Experience Services Catalog, Version 2026.Q3, published August 2026 (US). Static files only; no build step.

## Files

- `index.html` is the page, styles, and app logic.
- `data.js` is the catalog content. Every service row cites the PDF page it came from.
- `assets/` holds the logo (not included, see below).

## Publish on GitHub Pages

1. Create a repository and upload these files to the root (keep `index.html` and `data.js` side by side).
2. Go to Settings > Pages, set Source to "Deploy from a branch", select `main` and `/ (root)`, then save.
3. The site appears at `https://<org-or-user>.github.io/<repo>/` within a few minutes.

Note: GitHub Pages on a public repository is publicly reachable. If the catalog should stay internal, use a private repository with Pages access restricted (GitHub Enterprise), or host it on an internal site.

## Logo

The brand guide prohibits redrawing or re-typesetting the logo. Download the approved horizontal logo on white (`Granicus_Horizontal_OnWhite.png`) from the brand guide's asset links and save it as `assets/Granicus_Horizontal_OnWhite.png`. The header hides the image until the file exists.

## What is transcribed

All 284 service listings across the 11 sections (275 unique IDs), each section's tagline, the Getting Started page, and the contact page. Nine IDs appear in more than one section in the source (for example `GXC-CRED-PSSO` in Communications and Sentiment & Feedback, and seven Service Request Management services repeated under Permitting, Compliance, & Licensing). They are kept in both places, tagged "Also in...", with a toggle to show each only once.

Text is reproduced as written, including the source's own typos and inconsistencies (for example "Work Smarte", "precent rework", "Board Liasons", and `GXC-CRED-DE-AMME` describing "Agenda LE or Agenda PE"). Words that the PDF split across a line break were rejoined.

## Derived fields

These are computed in `index.html`, not typed into the data:

- **Per learner** is true when the description contains "Price is per learner" or "Pricing is per learner".
- **Product/edition** comes from the service name first (PCL Enterprise, PCL Enhanced, RRM Enhanced, RRM Essentials, Agenda LE/OE/PE), then the ID prefix (CMSO = CMS OE, CMSV = CMS VE, STFE, FWOE, RRMA, SRMEN, SRMES, SRMEE, AGOM, AGLE, AGPE, MMVC = Votecast, VIDS = Live Manager, BOCO = B&C, PCLH, PCLT). `GXC-CRED-*` services are "General".
- **Search aliases** come only from equivalences stated in the catalog text: OpenCities (CMS OE), OneMeeting (Agenda OE), Legistar and MediaManager (Agenda LE), Peak and Legislate (Agenda PE), GovQA (RRM Enhanced), AMANDA (Records Request ATIP and PCL Enterprise), EngagementHQ (Sentiment & Feedback).

## Updating for a new catalog version

Edit `data.js` only: update `meta`, then add, remove, or change rows. Row format is `[page, id, name, serviceType, credits, description]`, with `credits: null` for "Scoping Required".
