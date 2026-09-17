/*
 * Search vocabulary for the Experience Services Catalog.
 *
 * ignore:  words people type when describing a need that say nothing about
 *          which service fits ("we", "need", "help"). They are skipped.
 *
 * related: groups of words and phrases that mean roughly the same thing to
 *          someone looking for a service. If a search contains any term in a
 *          group, services mentioning the other terms in that group also
 *          match, ranked below direct matches.
 *
 * Edit freely. Keep terms lowercase. Phrases with spaces are fine.
 * Legacy product names live here so older terminology still finds results
 * without appearing anywhere on the page.
 */
window.SEARCH_TERMS = {
  ignore: [
    "a", "an", "the", "and", "or", "but", "of", "for", "to", "in", "on", "at", "by", "with", "from", "into", "about",
    "is", "are", "was", "were", "be", "been", "being", "am", "do", "does", "did", "can", "could", "would", "should", "will",
    "i", "we", "our", "ours", "us", "my", "me", "you", "your", "they", "their", "them", "it", "its", "this", "that", "these", "those",
    "need", "needs", "needed", "want", "wants", "wanted", "looking", "look", "trying", "try", "help", "helps", "helping",
    "get", "got", "make", "some", "something", "anything", "someone", "what", "which", "who", "how", "why", "when", "where",
    "please", "like", "set", "up", "isnt", "dont", "doesnt", "cant", "wont", "arent", "im", "were", "theyre", "lot", "lots", "way", "ways", "thing", "things", "really", "just", "more", "better", "also", "any", "all", "have", "has", "had", "so", "very",
    "service", "services", "granicus", "customer", "client", "agency", "agencies", "city", "county", "state", "department"
  ],

  related: [
    // Records and public information requests
    ["records request", "public records", "open records", "foia", "foi", "sunshine request", "records", "rrm", "atip"],
    ["redact", "redaction", "pii", "personal information", "sensitive information"],

    // Website
    ["website", "web", "site", "cms", "webpage", "web page", "pages"],
    ["homepage", "home page", "landing page"],
    ["navigation", "menu", "sitemap", "information architecture", "site structure", "findability"],
    ["accessibility", "accessible", "ada", "wcag", "508", "compliance", "compliant", "inclusive"],
    ["google analytics", "ga4", "analytics", "traffic", "site activity", "heatmap"],
    ["writing", "content", "copy", "plain language", "web content"],
    ["domain", "dns", "url", "rebrand"],

    // Communications
    ["email", "emails", "newsletter", "bulletin", "communications", "outreach", "campaign", "messaging"],
    ["subscribers", "subscriber", "subscriptions", "subscribe", "signup", "sign up", "audience", "grow", "growth"],
    ["text message", "sms", "text", "alert", "alerts", "notification", "notifications"],
    ["topics", "topic", "lists", "categories"],

    // Engagement and feedback
    ["survey", "surveys", "feedback", "public input", "community input", "engagement", "poll", "questionnaire", "sentiment"],

    // Forms
    ["form", "forms", "paper", "pdf", "application", "applications", "online form", "digital forms"],
    ["workflow", "workflows", "approval", "approvals", "routing", "automation", "process"],

    // Service requests
    ["311", "service request", "requests", "pothole", "work order", "work orders", "case management", "srm"],
    ["trash", "garbage", "recycling", "collection", "pickup"],
    ["knowledge base", "kba", "faq", "articles"],
    ["mobile app", "app", "public portal"],

    // Agendas, meetings, boards
    ["agenda", "agendas", "meeting", "meetings", "minutes", "packet", "packets", "clerk", "clerks", "council", "legislative", "legislation"],
    ["vote", "voting", "votecast", "roll call"],
    ["board", "boards", "commission", "commissions", "committee", "committees", "appointment", "appointments", "liaison"],

    // Video
    ["video", "videos", "stream", "streaming", "livestream", "live stream", "broadcast", "camera", "recording", "archive", "swagit"],

    // Permitting, licensing, code enforcement
    ["permit", "permits", "permitting", "license", "licenses", "licensing", "pcl"],
    ["inspection", "inspections", "inspector", "code enforcement", "violation", "violations"],
    ["fee", "fees", "fee schedule", "payment", "payments"],
    ["parcel", "parcels", "property", "gis"],
    ["bluebeam", "plan review", "plans", "drawings"],

    // Cross-cutting needs
    ["training", "train", "learn", "learning", "onboard", "onboarding", "new staff", "new hire", "new hires", "course", "class", "workshop", "e-learning", "elearning", "teach", "education"],
    ["admin", "administrator", "administration", "permissions", "roles", "user management", "users", "access"],
    ["report", "reports", "reporting", "dashboard", "dashboards", "data", "metrics", "kpi", "power bi", "yellowfin", "insights", "benchmarking"],
    ["migrate", "migration", "move", "moving", "import", "legacy", "transfer", "historical data", "switching"],
    ["sso", "single sign on", "single sign-on", "login", "log in", "saml", "azure", "entra", "active directory", "oidc"],
    ["design", "redesign", "template", "templates", "branding", "brand", "look and feel", "layout"],
    ["strategy", "roadmap", "plan", "planning", "consulting", "consult", "advice", "best practice", "best practices"],
    ["review", "audit", "assessment", "health check", "optimize", "optimization", "cleanup", "clean up", "improve"],
    ["integration", "integrations", "api", "connector", "sharepoint"],
    ["troubleshooting", "troubleshoot", "broken", "fix", "issue", "issues", "problem", "problems", "onsite"],

    // Legacy product names (searchable, never displayed)
    ["govqa", "rrm enhanced"],
    ["opencities", "cms oe"],
    ["legistar", "mediamanager", "agenda le"],
    ["onemeeting", "agenda oe"],
    ["peak", "legislate", "agenda pe"],
    ["amanda", "records request atip", "pcl enterprise"],
    ["engagementhq", "ehq", "sentiment & feedback"]
  ]
};
