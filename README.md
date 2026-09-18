# Experience Services Catalog (GXC 2026.Q3)

Searchable, filterable version of the Government Experience Cloud Experience Services Catalog, Version 2026.Q3, published August 2026 (US). Static files only; no build step.

## Files

- `index.html` is the page, styles, and app logic.
- `data.js` is the Government Experience Cloud catalog.
- `catalog-destination.js` and `catalog-federal.js` are placeholders for the Destination Cloud and Federal Experience Cloud catalogs.
- `search-terms.js` is the search vocabulary: filler words to ignore and groups of related terms. Upload it next to `index.html`. Every service row cites the PDF page it came from.
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
- **Product** (nested under each catalog section in the filters) comes from the service name first (PCL Enterprise, PCL Enhanced, RRM Enhanced, RRM Essentials, Agenda LE/OE/PE), then the ID prefix (CMSO = CMS OE, CMSV = CMS VE, STFE, FWOE, RRMA, SRMEN, SRMES, SRMEE, AGOM, AGLE, AGPE, MMVC = Votecast, VIDS = Live Manager, BOCO = B&C, PCLH, PCLT). `GXC-CRED-*` services are listed as "Services for all products" within their section.
- **Legacy product names** are never displayed, but still work in search so older terminology finds the right services. Each pairing is stated in the catalog text: OpenCities (CMS OE), OneMeeting (Agenda OE), Legistar and MediaManager (Agenda LE), Peak and Legislate (Agenda PE), GovQA (RRM Enhanced), AMANDA (Records Request ATIP and PCL Enterprise), EngagementHQ (Sentiment & Feedback).

## Updating for a new catalog version

Edit `data.js` only: update `meta`, then add, remove, or change rows. Row format is `[page, id, name, serviceType, credits, description]`, with `credits: null` for "Scoping Required".

## Fonts

The page uses the brand guide stack with one addition: Sofia Pro, then Century Gothic, then Questrial (a free Google Font with a similar geometric shape), then Arial. Questrial loads from Google Fonts so visitors without Century Gothic still see something close to it. Questrial has a single weight, so browsers generate the bold. Check with Marketing if the fallback needs approval.

## Search

Plain-language descriptions work: "our clerks need help building agendas" returns agenda training first. Filler words ("we", "need", "help") are skipped, word endings are matched loosely (train, training, trainer), and words in the same group in `search-terms.js` count as related matches ranked below direct ones. Results with the "Recommended" sort are ordered by best match while searching and by catalog order otherwise.

Quoted phrases, `field:value` terms, and `-exclusions` stay strict filters and can be mixed with a description.

To tune results, edit `search-terms.js`: add a word to `ignore`, add a term to an existing group, or add a new group. Legacy product names live there so older terminology still finds services without appearing on the page.

## Catalogs

Each catalog file registers itself with `window.CATALOGS`, and the tabs in the header switch between them. Switching reloads the page content, clears filters and the credit plan, and records the choice in the URL (`?cat=destination`). Stakeholders only work in one cloud, so nothing is shared across tabs.

To load a new catalog, open `catalog-destination.js` or `catalog-federal.js` and fill in `meta`, `sections`, optional `clouds`, and `rows` in the same shape as `data.js`, then delete the `comingSoon` line. Until then that tab shows a "Not loaded yet" notice.

## Clouds

`clouds` in each catalog file maps cloud bundles to catalog sections, and `cloudAlways` lists sections that appear with every cloud. For the Government Experience Cloud:

- Service Cloud: Website, Forms & Workflow, Sentiment & Feedback, Communications, Service Request Management
- Engagement Cloud: Communications, Sentiment & Feedback
- Operations Cloud: Records Request Management, Video, Agenda & Meeting, Boards & Commissions
- Always shown: Overall Strategy

Permitting, Compliance, & Licensing is not assigned to a cloud. Edit the `clouds` array to change any of this.

## Credit plan email

"Email this plan" opens the visitor's default mail program with a draft containing the same text as "Copy as text." Very long plans exceed what a mail link can carry, so those are copied to the clipboard instead, with a message saying so.
