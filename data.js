/*
 * Experience Services Catalog - Government Experience Cloud
 * Version 2026.Q3 | Published: August 2026 | US
 *
 * Transcribed from GXC_Services_Catalog_2026.pdf in document order.
 * Text is kept as written in the source, including the source's own typos.
 * Words split across PDF line breaks were rejoined with their hyphen
 * (e.g. "real-world", "Day-to-Day").
 *
 * Row format: [page, id, name, serviceType, credits, description]
 * credits = null means the catalog lists "Scoping Required".
 * When a new catalog version ships, update this file only.
 */
window.CATALOG = {
  meta: {
    title: "Experience Services Catalog",
    subtitle: "Government Experience Cloud",
    version: "2026.Q3",
    published: "August 2026",
    region: "US",
    intro: "To implement the Government Experience Cloud and accelerate your digital transformation, Granicus provides a range of services redeemable using available credits.",
    gettingStarted: {
      summary: "All solutions powered by Government Experience Cloud include ongoing Experience Services, providing your agency with a proactive, long-term strategic partner in the design, optimization, and continuous delivery of exceptional, human-centered citizen experiences.",
      partner: "Contact your dedicated Experience Partner to guide you through the Catalog and to activate services specific to your goals and opportunity areas. The Services Catalog provides two tailored options designed to meet your needs:",
      options: [
        { name: "Learning Library", text: "Access our E-Learning services, which you and your team can complete at your own pace and schedule." },
        { name: "Expert Led Services", text: "Engage with Granicus experts through live, interactive sessions, including in-person workshops, facilitated trainings, and best practice sessions." }
      ],
      closing: "Your access to the Services Catalog starts on day one."
    },
    contact: {
      heading: "Ready to unlock a service?",
      text: "Contact your Experience Partner to get started, and check availability in your market, as some services may not be available in all regions.",
      email: "experiencepartners@granicus.com"
    }
  },

  sections: [
    { key: "web",   name: "Website Services", color: "#3879AF", startPage: 4,
      tagline: "Deliver a resident-first experience with an ADA-compliant, mobile-friendly government website and CMS platform that easily connects people to information and services." },
    { key: "comms", name: "Communications Services", color: "#4CA382", startPage: 15,
      tagline: "Grow segmented audiences, drive effective multitouch communications, and provide actionable data insights for elevated government interactions and higher-quality engagement outcomes." },
    { key: "sf",    name: "Sentiment & Feedback Services", color: "#EF6A57", startPage: 20,
      tagline: "Capture consented feedback at every digital touchpoint and turn insights into fast, data-backed decisions." },
    { key: "fw",    name: "Forms & Workflow Services", color: "#D41F37", startPage: 24,
      tagline: "Quickly replace outdated, paper-based forms with intuitive, step-by-step online forms and responsive workflows—for a better resident experience." },
    { key: "rrm",   name: "Records Request Management Services", color: "#3879AF", startPage: 28,
      tagline: "Shift from reactive to proactive records request management with built-in, expert services that continually drive efficiency and adapt to your evolving requirements." },
    { key: "srm",   name: "Service Request Management Services", color: "#4CA382", startPage: 36,
      tagline: "Simplify service request management with resident-focused case management, automated workflows, mobile self-service, and real-time insights to better understand needs." },
    { key: "amm",   name: "Agenda & Meeting Services", color: "#EF6A57", startPage: 40,
      tagline: "Drive toward operations efficiency, accessibility, sustainability, and public trust goals with products designed specifically for the public sector and decades of partnering with government." },
    { key: "vid",   name: "Video Services", color: "#D41F37", startPage: 46,
      tagline: "Stream and share high-quality, reliable, accessible, secure, and cost-effective video recordings of public meetings while building public trust, transparency, and informed participation in the legislative process" },
    { key: "bc",    name: "Boards & Commissions Services", color: "#3879AF", startPage: 48,
      tagline: "Manage advisory boards and committees with the most robust, end-to-end workflows and the most complete and convenient public portal. Available with Operations Cloud." },
    { key: "strat", name: "Overall Strategy", color: "#4CA382", startPage: 50,
      tagline: "Further optimize your Government Experience Cloud solutions with deep data insights, a platform review, onsite support, extended training, workshops, Granicus University courses and more." },
    { key: "pcl",   name: "Permitting, Compliance, & Licensing Services", color: "#EF6A57", startPage: 52,
      tagline: "Streamline permitting, licensing, compliance, planning, and code enforcement with services that enhance public safety, reduce administrative burdens, and accelerate development." }
  ],

  rows: {
    web: [
      [4, "CMSO-CRED-DAL", "CMS OE Data Analytics Lab: Use Google Analytics and built in tools to understand Site Activity", "Training: E-Learning", 3,
        `By the end of this e-learning session, learners will be able to connect OpenCities to Google Analytics and configure the Insights Dashboard to display meaningful site data. They will be able to access and export analytics information, understand the available reports and dashboards, and apply basic data visualization principles to interpret trends. Learners will also be able to turn insights into practical action plans that support ongoing improvements in content quality, site structure, and user engagement.
Note: Price is per learner`],
      [4, "CMSO-CRED-IBD", "CMS OE Inclusive by Design: Powering OpenCities Through Accessibility", "Training: Instructor Led", 4,
        `Participants will gain knowledge to: Create content that aligns with the POUR principles, understanding how perceivable, operable, understandable, and robust standards guide accessible digital experiences in OpenCities, structure pages with clear, accessible hierarchy, using headings in the correct order and avoiding the misuse of H1 inside content areas, use lists and formatting tools appropriately, choosing numbered or bulleted lists for the right purposes and avoiding pasted formatting from outside tools, write meaningful, descriptive link text that stands on its own and avoids vague phrases like “click here", provide effective and purposeful alternative text for images, knowing when to describe an image in detail or when to mark it as decorative, make informed decisions about data tables and content structure, using tabular formats only when necessary and relying on OpenCities content lists or widgets for most grouped information and apply accessibility best practices directly in their daily content creation, improving inclusivity, clarity, and user experience across their OpenCities pages.
Note: Price is per learner`],
      [4, "CMSV-CRED-EUF", "CMS VE E-Learning: User Foundations", "Training: E-Learning", 4,
        `Build confidence and efficiency from day one! Gain the skills to navigate systems, add and edit content, export data and troubleshoot with ease—everything you need to master the basics and work smarter.
Note: Price is per learner`],
      [5, "CMSV-CRED-WKS", "CMS VE Workshop: WCAG", "Training: Instructor Led", 4,
        `This package consists of a 30 minute YouTube video and an interactive instructor led training session on how to leverage CMS features to create compliant content. Attendees will identify disabilities and assistive devices, understand the "Big 5" and how to use website formatting to create and maintain compliant content.
Note: Price is per learner`],
      [5, "CMSO-CRED-SPA", "CMS OE Site Permissions and Automation: Take control of your site with custom roles and Workflows", "Training: Instructor Led", 5,
        `Through this interactive instructor led training session, participants will gain knowledge to manage workflows and email templates to support consistent content and approval processes, configure and apply complex permissions using custom roles to help limit activity outside of built-in guardrails. Participants will also understand key considerations for integrating OpenCities with SSO, when applicable. In addition, they will be able to audit site activity and apply optimization practices to maintain an organized, well-governed environment.
Note: Price is per learner`],
      [5, "CMSO-CRED-ALG", "CMS OE Guide your Audience Lab: Lists, Calendars and Maps", "Training: Instructor Led", 5,
        `Through this interactive instructor led training session, participants will gain knowledge to create macro-focused and custom body content lists that surface the right content to the right audiences, build single-topic or combined calendars that help residents easily view upcoming community activities and use Google Maps to pull in location-based content, enabling them to highlight nearby events, services, or points of interest.
Note: Price is per learner`],
      [5, "CMSO-CRED-CTL", "CMS OE Content Types Lab: Highlight What Is Important", "Training: Instructor Led", 5,
        `Through this interactive instructor led training session, participants will gain knowledge to work confidently with three client-selected content types and understand how each page type displays and structures information, identify when to use each content type based on purpose and layout. Through hands-on practice, learners will build sample pages using all selected content types, gaining practical experience that prepares them to create clear, consistent, and well-structured website content.
Note: Price is per learner`],
      [6, "CMSO-CRED-UABB", "CMS OE User Advanced: Beyond the Basics", "Training: Instructor Led", 5,
        `Through this interactive instructor led training session, participants will gain knowledge to: Perform common micro-interactions confidently, including adding images to content, selecting appropriate heading levels, creating accessible hyperlinks, and using tabs and accordions effectively. Separate long or complex pages into meaningful sections, improving readability, accessibility, and overall page structure. Update and manage existing content, such as editing pages, replacing images, updating documents, and managing media files within the OpenCities environment. Apply proper formatting techniques to ensure content is clean, semantic, and aligned with accessibility and OpenCities best practices. Change and optimize page settings, including hiding pages from search, navigation, or search engines as needed. Set up publishing schedules, including activating, deactivating, and assigning future review dates for ongoing governance. Manage inbound and outbound page links, ensuring link integrity, relevance, and a positive user experience. Link related content to a page, creating stronger content relationships and improving discoverability across the site. View and activate older versions of pages and files, understanding version control and how to restore previous content when necessary. Preview pages effectively, including reviewing version history to confirm accuracy before publishing.
Note: Price is per learner`],
      [6, "CMSV-CRED-AES", "CMS VE Admin Essentials: Confidently Manage Your Platform Day-to-Day", "Training: Instructor Led", 6,
        `Through this interactive instructor led training session, participants will gain the skills to perform core super user administration tasks and manage users.
Note: Price is per learner`],
      [6, "CMSO-CRED-UFE", "CMS OE User Foundations: Master the Essentials to be Productive", "Training: Instructor Led", 6,
        `Through this interactive instructor led training session, participants will gain knowledge to log in and manage their user profile, navigate the OpenCities interface, and perform core daily tasks as content creators. They will be able to search for, view, and manage files and pages, as well as create or edit basic content and publish or submit pages for approval. Participants will gain understanding of accessibility compliance guidelines and how to apply best practices when creating content. They will also be able to troubleshoot common issues related to page editing, navigation, and file management.
Note: Price is per learner`],
      [7, "CMSV-CRED-EUA", "CMS VE E-Learning: User Advanced", "Training: E-Learning", 6,
        `Move beyond the basics with our intermediate package. Gain the skills to manage users, keep your website organized and updated, set up configurations, connect solutions and optimize performance.
Note: Price is per learner`],
      [7, "CMSV-CRED-UFE", "CMS VE User Foundations: Master the Essentials to be Productive", "Training: Instructor Led", 8,
        `Through this interactive instructor led training session, participants will gain the knowledge and confidence to navigate the content management system, manage content and their user profile.
Note: Price is per learner`],
      [7, "CMSV-CRED-UABB", "CMS VE User Advanced: Beyond the Basics", "Training: Instructor Led", 8,
        `Through this interactive instructor led training session, participants will gain the knowledge and confidence to manage the forms component and develop favored widget content.
Note: Price is per learner`],
      [7, "CMSO-CRED-AES", "CMS OE Admin Essentials: Confidently Manage Your Platform Day-to-Day", "Training: Instructor Led", 8,
        `Through this interactive instructor led training session, participants will gain knowledge of the core responsibilities of an OpenCities system administrator, including managing platform settings and overall site governance. They will be able to create and manage users, assign the correct user roles, and maintain appropriate access control. Participants will also be able to set up and configure categories to support clear site structure and content organization. In addition, they will be able to monitor system activity and audit usage to ensure the site remains well-organized and aligned with governance practices.
Note: Price is per learner`],
      [7, "GXC-CRED-OD-DBWE", "E-Learning Library: Design Better Web Experiences", "E-Learning Library", 10,
        `Unlock the full potential of your website by focusing on web usability. This course offers practical strategies to sustain and scale improvements as your website evolves.`],
      [7, "GXC-CRED-SC-WEB", "System Config: Websites", "Implementation Service", 10,
        `This service provides configuration support for the Granicus CMS. It includes consultation to help customers solve specific content setup or configuration scenarios within the standard functions of the CMS.`],
      [8, "GXC-CRED-IAS", "E-Learning Library: Understand the key strategies for your website's Information Architecture", "E-Learning Library", 10,
        `On demand, self-guided lesson, taking you through the core inputs that make up a human centered information architecture. You'll see common best practices from other agencies, learn to review your data, test your structure and make data driven decisions. Receive a template to support you in the organization of your new site's content.`],
      [8, "GXC-CRED-UX-GA4", "UX Design: GA4 Report", "Agency Service", 10,
        `This custom report provides insights into website performance and user behavior, including traffic sources and engagement metrics. Design to support organizational decisionmakers, the report includes data sourced from Google Analytics and it's used to support optimization strategies and data-driven decision-making.`],
      [8, "GXC-CRED-WHTMLT", "Website HTML Template", "Agency Service", 20,
        `Deliver a consistent, branded experience across the third-party applications connected to your Granicus website. Granicus generates an HTML template of your website that captures the header, footer, and background, along with the relevant CSS, JavaScript, and image assets. Designed for agencies that use third-party applications and want those tools to visually match their main website. You receive a complete HTML template that can be applied as a skin to any third-party application that supports it.
Note: Configuration of third-party applications to use the template is not included.`],
      [8, "GXC-CRED-CM-WEB", "Content Migration: Websites", "Agency Service", 25,
        `Content Migration Delivery: Your web implementation project manager will guide you through the timeline and overall strategy. Once this is defined, the content migration team will work to deliver the content. At the end, you will receive 50 Pages of content Migration.`],
      [8, "GXC-CRED-UX-HEAT", "UX Design: Heatmap Report", "Agency Service", 25,
        `This custom report provides insights into user interactions and engagement patterns on the homepage, including click density, scroll behavior, hover activity, and attention distribution. Designed to support UX designers, marketers, and web developers, the report includes data from heatmapping tools and highlights areas of high engagement to inform homepage improvements and content placement opportunities.`],
      [9, "GXC-CRED-WRK-WEB", "Workflow: Websites", "Agency Service", 25,
        `Up to four (4) hours of workflow optimization and one 30minute discovery call to determine tailored training agenda.`],
      [9, "GXC-CRED-SGSD", "Sitemap Generation: Single Domain", "Agency Service", 35,
        `This service gives agencies a clear inventory of their existing website structure — an essential first step when planning a migration to a Granicus website. Granicus generates a sitemap of a single website domain (subdomains are not included), delivered in the same format used during implementation. It is designed for agencies that need a straightforward map of their current site without the deeper analysis of a full content rationalization. You will receive a complete sitemap of the domain, formatted for use in implementation. With this sitemap, your team can visualize the current site structure and plan next steps for migration or redesign.
Note: This service does not include analytics data or content-migration recommendations; if you need those, consider the Content Rationalization service.`],
      [9, "GXC-CRED-WEB-SECT", "Website Homepage - Section Removal", "Agency Service", 40,
        `Removal of a distinct part of a homepage that focuses on a specific topic or function contained within the header and the footer of the homepage.`],
      [9, "GXC-CRED-WA-CONS", "Website Accessibility Consultation", "Agency Service", 40,
        `A two-hour consultation with a Granicus Accessibility Consultant to help your team identify and address specific web accessibility concerns on your Granicus-hosted website. Designed for organizations that have identified accessibility issues or received third-party reports and need expert guidance on interpretation and next steps. The session covers review of up to 10 client-identified accessibility issues, guidance on interpreting third-party accessibility reports, and context on how WCAG standards apply to Granicus products. Includes verbal recommendations during the session to support actionable next steps. After the session, your team will have expert-informed direction on how to address identified accessibility issues and improve conformance.
Note: This is a consultative engagement only.
Out of scope: full accessibility audits, conformance certification, remediation work, and written post-session documentation. Clients should come prepared with a specific list of issues or a report to review during the session.`],
      [10, "GXC-CRED-DOMCHG", "Website Domain Change", "Agency Service", 50,
        `A configuration service to transition your website to a new primary domain or update settings based on revised DNS records for an existing domain. Designed for organizations undergoing a domain change, rebrand, or DNS update who need a coordinated technical transition without disrupting user access. Includes Granicus project management, SSL certificate creation or updates, CDN configuration, and CMS updates for the new domain. Your old domain will be set up as a secondary domain with a redirect to the new domain so previously bookmarked links continue to work. After delivery, your website will be live on the new domain with seamless redirection from the prior domain.
Note: The agency must keep the old domain pointing to Granicus DNS for redirects to function. Reconfiguration of Active Directory or user account email addresses is not included.`],
      [10, "GXC-CRED-UX-USERTEST", "UX Design: User Testing Report", "Agency Service", 80,
        `This custom report provides insights into user experience and website usability, including task completion rates, navigation efficiency, pain points, and user feedback. Designed to support business stakeholders and operational staff such as web designers and developers. The report includes observations from an unmoderated remote user testing study, where participants complete five predefined tasks on the website, and highlights patterns in user behavior, areas of friction and key takeaways to inform website improvements, design refinements, and strategic decision-making.`],
      [10, "GXC-CRED-WEB-CUSTCONT", "Website Custom Content Lists and Types", "Agency Service", 80,
        `Modification of one content listing display, including the following: * Adding existing fields from the content type to display in the website front-end (i.e. News Items displaying News Category) * Removing existing text that is referenced from a content type's field - for example the default content type has a set of fields to display, but they only want specific ones to show (i.e. Remove the Description text) * Changing the presentation layout using the grid (i.e. from vertical lists to blocks)`],
      [11, "GXC-CRED-WEB-HEAD", "Website Header Redesign", "Agency Service", 80,
        `Granicus will create the necessary design and code to modify the header layout by rearranging the existing header items. The scope of work also includes adding or removing elements. Any changes must conform to the current product constraints for these elements.`],
      [11, "GXC-CRED-WEB-WIDG", "Website Homepage - Widget Replacement", "Agency Service", 80,
        `Replacement of a single homepage widget with any other CMS built in widget. The new widget will occupy the existing area using the same dimensions. The widget's design will be consistent with the current website's overall look and feel.`],
      [11, "GXC-CRED-CAR-IL", "CMS Accessibility Remediation: Implementation Layer", "Agency Service", 100,
        `Targeted accessibility remediation focused on resolving implementation-layer issues within your Vision CMS website. Designed for clients with previously validated Vision CMS solutions who need to address accessibility gaps introduced through design implementation and configuration, without committing to a full redesign or audit. Includes identification and documentation of implementation-related issues, plus remediation within global implementation areas (header, homepage standard components, and footer) conformant with WCAG 2.2 AA standards. Common fixes include color contrast adjustments using the closest accessible alternative, correction of non-compliant markup, and guidance on highly customized homepage components. After delivery, your site's implementation layer will be aligned with WCAG 2.2 AA standards, improving accessibility for all users without disrupting your existing approved design.
Note: This service is scoped per website; subsites and microsites require separate engagements. Out of scope: custom components on interior pages, content-level issues (alt text, PDFs, editor-managed HTML), CMS platform limitations, and any redesign work. Third-party reports may inform scope but do not define it — only validated implementation issues are included. Assumes prior solution validation by Granicus; not all designs can be remediated, and when design constraints limit compliance, Granicus will apply the closest accessible solution without revision cycles.`],
      [12, "GXC-CRED-GXG-W4WW", "GXG: Writing for the Web Workshop", "Agency Service", 100,
        `Training for website contributors on best practices for writing effective web content. Content is the most essential element of a website. We believe in using best practices to standardize and promote consistency. There's no better time to completely revamp your content than when you're updating your website and moving to a new CMS. We'll teach your team how to undeniably sound like your organization's voice and focus on the user, helping you mature your communications and services over time.`],
      [12, "GXC-CRED-CRSD", "Content Rationalization: Single Domain", "Agency Service", 100,
        `This service helps agencies moving to a Granicus website decide which existing content is worth keeping, so your new site launches with the right pages instead of carrying over outdated material. Granicus reviews a single website domain (subdomains are not included) and, where analytics data is available, incorporates it to show how your content is being used. It is designed for agencies planning a website migration or redesign who need a clear, data-informed content plan. You receive a full sitemap of the domain, affirmative recommendations for which content to migrate, and an analytics-driven suggested sitemap for your new site. With these deliverables, your team can confidently prioritize high-value content and streamline the migration.
Note: Analytics incorporation depends on data availability; subdomains are out of scope.`],
      [12, "GXC-CRED-HRC", "Website Homepage Redesign Concept", "Agency Service", 180,
        `Our homepage design concept offers a comprehensive approach to crafting a captivating and user-friendly homepage using the Granicus CMS design system.
* This package does not include main navigation reorganization.`],
      [13, "GXC-CRED-GXG-IAA", "GXG: Information Architecture Academy", "Agency Service", 200,
        `Updating your website's Information Architecture (IA) is key to improving the overall user experience. Our IA process involves website data analysis, user research and user testing, and other best practice methodologies that serve to seamlessly bridge your goals with user needs. This effort will result in a strategic and scalable approach to content priorities, a development of a navigation structure for your new site, and the creation of an actionable implementation strategy for your existing content. Product Includes AI or ML.`],
      [13, "GXC-CRED-WEB-INTPG", "Website Dept Branding: Interior Page Custom Template", "Agency Service", 200,
        `This package provides a unique layout and design applied to the body of an interior page. Using custom designed widgets, Granicus will produce a custom HTML layout limited to the body (i.e., excludes header and footer) of an internal page. Each widget will contain its unique set of configurable settings. Each custom page template will be built for reuse across all other interior pages on the same site.`],
      [13, "GXC-CRED-GXG-IA", "GXG: Information Architecture", "Agency Service", 450,
        `The Information Architecture (IA) service by the Granicus Experience Group improves website usability through data analysis, user research, and best practices. It includes a kickoff session, data audit, and one user engagement activity (card sort or tree test with up to 40 users). The final deliverable is a Recommendations & Implementation Report with a new IA map and page categorization strategy.
Covers sites with up to 2,500 URLs. Does not include content audits, content creation, or document review. Must be completed within three months. Client provides users for testing.`],
      [14, "CMSO-CRED-CST", "CMS OE Custom Virtual Instructor-Led Training: Tailored, Live Online Training designed for your team", "Training: Instructor Led", null,
        `This interactive online instructor led training session is tailored content designed specifically for your organization’s unique workflows and goals.`],
      [14, "CMSO-CRED-OITI", "CMS OE Onsite Instructor-Led Training: Instructor-Led Training delivered at your location", "Training: In Person", null,
        `This interactive onsite instructor led training session is tailored content designed specifically for your organization’s unique workflows and goals.`],
      [14, "CMSV-CRED-CST", "CMS VE Custom Virtual Instructor-Led Training: Tailored, Live Online Training designed for your team", "Training: Instructor Led", null,
        `This interactive online instructor led training session is tailored content designed specifically for your organization’s unique workflows and goals.`],
      [14, "CMSV-CRED-OITI", "CMS VE Onsite Instructor-Led Training: Instructor-Led Training delivered at your location", "Training: In Person", null,
        `This interactive onsite instructor led training session is tailored content designed specifically for your organization’s unique workflows and goals.`]
    ],

    comms: [
      [15, "GXC-CRED-OD-COPDO", "E-Learning Library: Create an Outreach Plan to Drive Outcomes", "E-Learning Library", 10,
        `On demand, self-guided lesson, taking you through a step by-step process and understanding the key components of a best-in class campaign plan. You'll be provided a campaign template, and work through each step in the process with instructions and examples from a communications expert.`],
      [15, "GXC-CRED-SC-COMM", "System Config: Communications", "Implementation Service", 10,
        `This service provides a 30-minute session to offer configuration support for your communications tool to ensure effective feature setup and adoption.`],
      [15, "GXC-CRED-DE-COM", "Design & Development Templates", "Agency Service", 25,
        `This service provides the design and development of up to 3 new communication templates tailored to fit current branding. It includes key design and functional components, built to ensure usability. The final product supports desired outcomes such as driving subscriptions and increasing effective communication.`],
      [15, "GXC-CRED-SC-APDCB", "System Config: Advanced Package Drip Campaign Build", "Implementation Service", 25,
        `Using your content, we will assist in the setup, activation and monitoring/analysis of up to 1 drip campaigns with assistance from a dedicated implementation consultant for up to 30 days.`],
      [15, "GXC-CRED-TT-COM", "Technical Training: Communications", "Training: Instructor Led", 25,
        `This technical training focuses on engagement, delivering hands-on instruction tailored for platform administrators. It covers key functions, workflows, and features, with guided exercises and real-world scenarios to ensure users are confident in preparing engagement projects. Training covers up to two (2) 2-hour sessions, is delivered virtually and is designed to support adoption and user empowerment.`],
      [16, "GXC-CRED-TRN-NAO", "Training: New Admin Onboarding", "Training: Instructor Led", 30,
        `This training focuses on onboarding new staff, delivering hands-on instruction tailored for platform administrators. It covers key functions, workflows, and features, with guided exercises and real-world scenarios to ensure users are confident in preparing engagement projects. Training covers up to 2 1-hour sessions, one session for admins and one for group/topic admins and is delivered virtually and is designed to support adoption and user empowerment.`],
      [16, "GXC-CRED-DD-OVSU", "Design and Development: Overlays/Signups", "Agency Service", 40,
        `This service provides the design and development of up overlays or sliders for up to 2 URLs tailored to fit current branding. It includes key design and functional components, built with to ensure usability. The final product supports desired outcomes such as driving subscriptions and increasing effective communication.`],
      [16, "GXC-CRED-SC-ANR", "System Config: Advanced Network Review", "Implementation Service", 40,
        `Assessment of current Network performance, make recommendations on Network partners, and execute any recommendations, working with a dedicated implementation consultant for up to 30 days.`],
      [16, "GXC-CRED-SC-PGW", "System Config: Page Watch", "Implementation Service", 45,
        `Assessment of up to 5 PageWatch URLs, make recommendations based on assessment of findings, execute any recommendations with assistance from a dedicated implementation consultant for up to 30 days.`],
      [16, "GXC-CRED-PR-COM", "Platform Review: Communications", "Agency Service", 50,
        `This platform review focuses on communications evaluating your current configuration, usability, performance, and alignment with departmental or organizational goals. The review includes key components overview, what further opportunities you have for outreach and promotion. Designed for intermediate or experienced users of the platform, this review helps inform system optimization and utilization. Includes a discovery call (up to 1-hour) to establish goals and a presentation that documents findings`],
      [17, "GXC-CRED-SC-APIA", "System Config: API Assistance", "Implementation Service", 50,
        `The service provides configuration assistance to setup and configure our communications API. Up to 10 hours of assistance working with one of our technical implementation consultants for up to 60 days. API setup requires client developer resources.`],
      [17, "GXC-CRED-PSSO", "Platform SSO", "Implementation Service", 75,
        `A configuration service to assist in setup of Single-Sign On (SSO) to our GXC Portal. Upon login, users will see a list of applications they can use. Uses your OpenID Connect (OIDC) or SAML for logins to point to Keycloak system and the specific setup we created for your ap.`],
      [17, "GXC-CRED-CPR-TOS", "Communication Platform Review: Topic Optimization - Small", "Agency Service", 45,
        `Assessment of up to 50 current topics in client account, make recommendations based on assessment of findings, execute any recommendations with assistance from a dedicated implementation consultant for up to 30 days.`],
      [17, "GXC-CRED-CPR-TOM", "Communications Platform Review: Topic Optimization - Medium", "Agency Service", 60,
        `Assessment of up to 150 current topics in client account, make recommendations based on assessment of findings, execute any recommendations with assistance from a dedicated implementation consultant for up to 30 days.`],
      [17, "GXC-CRED-CPR-TOL", "Communications Platform Review: Topic Optimization - Large", "Agency Service", 90,
        `Assessment of up to 250 current topics in client account, make recommendations based on assessment of findings, execute any recommendations with assistance from a dedicated implementation consultant for up to 30 days.`],
      [17, "GXC-CRED-CPR-TOXL", "Communications Platform Review: Topic Optimization - X-Large", "Agency Service", 120,
        `Assessment of up to 500 current topics in client account, make recommendations based on assessment of findings, execute any recommendations with assistance from a dedicated implementation consultant for up to 30 days.`],
      [18, "GXC-CRED-SC-ADAS", "System Config: Admin Audit - Small", "Implementation Service", 30,
        `Assessment of administrator login history, privileges, and notification settings, up to 25 admins. Execute any recommendations with assistance from a dedicated implementation consultant for up to 30 days.`],
      [18, "GXC-CRED-SC-ADAM", "System Config: Admin Audit - Medium", "Implementation Service", 40,
        `Assessment of administrator login history, privileges, and notification settings, up to 75 admins. Execute any recommendations with assistance from a dedicated implementation consultant for up to 30 days.`],
      [18, "GXC-CRED-SC-ADAL", "System Config: Admin Audit - Large", "Implementation Service", 50,
        `Assessment of administrator login history, privileges, and notification settings, up to 150 admins. Execute any recommendations with assistance from a dedicated implementation consultant for up to 30 days.`],
      [18, "GXC-CRED-SC-COMMGA", "System Config: Communications Cloud Group add-on", "Implementation Service", 80,
        `The addition of a department or agency to an existing Communications Cloud account. This involves a full implementation of a client to an existing Communications Cloud and up to 2 web hosted training sessions.`],
      [18, "GXC-CRED-SC-ADAXL", "System Config: Admin Audit - X-Large", "Implementation Service", 90,
        `Assessment of administrator login history, privileges, and notification settings, up to 300 admins. Execute any recommendations with assistance from a dedicated implementation consultant for up to 30 days.`],
      [18, "GXC-CRED-SC-ENTADD", "System Config: Enterprise Add-on", "Implementation Service", 120,
        `This offering is available to customers with an existing Enterprise Communications Cloud contract and supports the addition of a new department or agency as a separate Communications account within the customer’s existing enterprise environment. The service includes a full implementation of the new Communications account, configured to align with enterprise standards, permissions, and governance. The engagement also includes up to two (2) web-hosted training sessions to support onboarding and operational readiness.`],
      [19, "GXC-CRED-GXG-AGS", "GXG: Audience Growth Strategy", "Agency Service", 100,
        `Conduct an experience audit to understand current state. Develop up to two (2) creative assets and copy as needed for audience capture points, such as text-to-subscribe, website overlays, partner widgets, signup boxes, and Granicus Network promotions. Determine online and offline capture points, including incorporating capture points into social media and other communications.`],
      [19, "GXC-CRED-SC-OTIS", "System Config: Ongoing Technical Implementation Support", "Implementation Service", 2000,
        `Up to 5 hours per week for general project support from technical implementation services over 12-month period of performance. Includes assistance with gDRI configuration, SSO setup & configuration, custom link tracking, large send support (minimum 1M subscribers) and platform guidance for GXG,. assistance with TMS Reporting, assistance with API setup and configuration. (Requirement: Customer must have an active engagement with GXG)`]
    ],

    sf: [
      [20, "STFE-CRED-EUF", "Sentiment & Feedback E-Learning: User Foundations", "Training: E-Learning", 3,
        `Build confidence and efficiency from day one! Gain the skills to navigate systems, manage projects, add engagement activities, and download data with ease—everything you need to master the basics and work smarter.
Note: Price is per learner`],
      [20, "GXC-CRED-OD-AEQC", "E-Learning Library: Asking Engaging Questions Course", "E-Learning Library", 10,
        `Asking Engaging Questions Course.`],
      [20, "GXC-CRED-OD-CEESC", "E-Learning Library: Creating Effective Engagement Surveys Course", "E-Learning Library", 10,
        `Creating Effective Engagement Surveys Course.`],
      [20, "GXC-CRED-OD-LUDE", "E-Learning Library: Leveling Up Your Digital Engagement", "E-Learning Library", 10,
        `This course is organized around a nine-question Digital Maturity Quiz. Learn where to focus your efforts and find concrete starting points to grow your engagement strategy and mature your digital presence.`],
      [20, "GXC-CRED-OD-EEC", "E-Learning Library: Engagement Examples Course", "E-Learning Library", 10,
        `On demand, self-guided lesson, taking you through the core components of well-designed example engagement projects.`],
      [20, "GXC-CRED-TR-ENG-PABS", "Project Page Build", "Agency Service", 10,
        `Start with a scoping session to discuss the project and possibilities on EngagementHQ. Then, hand us your content, and we’ll set up your project page and engagement activities for you.
(Building does not include writing introductions nor survey questions.)`],
      [20, "GXC-CRED-TR-ENG-RAA", "Training: Engagement Reporting and Analytics", "Training: Instructor Led", 10,
        `Meet with one of our Engagement trainers for up to a 60-minute session on the reporting and analysis features of your engagement site.`],
      [21, "GXC-CRED-TR-ENG-SAT", "Training: Engagement Site admin Training", "Training: Instructor Led", 10,
        `Meet with one of our Engagement trainers for up to a 60-minute introductory training session on site administrator capabilities on your engagement site.`],
      [21, "GXC-CRED-TR-ENG-TDD", "Training: Engagement Tools Deeper Dive", "Training: Instructor Led", 10,
        `Develop an understanding of the engagement tools available to meet common and creative use cases. We will walk you through your top 3 initiatives for the year and discuss recommended tool usage and campaign design.`],
      [21, "GXC-CRED-SC-ENG", "Site Management", "Agency Service", 10,
        `This service provides a 30-minute session to offer support for your Sentiment & Feedback platform settings, registration process and Site Management.`],
      [21, "GXC-CRED-TR-ENG-HUB", "Training: Engagement Hub Admin Training", "Training: Instructor Led", 10,
        `Meet with one of our Engagement trainers for up to a 60-minute training session on setup of hubs on your engagement site.`],
      [21, "GXC-CRED-TR-ENG-PABT", "Training: Engagement Project Admin/Building Training", "Training: Instructor Led", 10,
        `Meet with one of our Engagement trainers for up to a 60-minute introductory training session on setup of a project on your engagement site.`],
      [22, "GXC-CRED-CR-ESAD", "Custom Report: Engagement Survey Analysis Dashboard", "Agency Service", 25,
        `We can create an interactive dashboard for visualizing your survey results. Your dashboard will include:
• Analysis and visualizations for up to 10 questions asking for quantitative feedback.
• Radio buttons
• Dropdown
• Checkboxes
• Likert questions (with 1 scale/question).
• Up to 3 demographic filters from registration form fields or survey body questions (i.e. Zip code/postal code, connection to city/council)
Note: Filters can only be created with dropdown, radio button, or search/select fields.
(Analysis and coding of qualitative questions is not included. However, if your team provides us with the coded data and how many times each theme occurred in responses, we can then review the data and assess if we can include the analysis in the dashboard.)`],
      [22, "GXC-CRED-CM-ENG", "Content Migration: Sentiment & Feedback", "Agency Service", 25,
        `Migration of up to 5 pages of existing content. Includes only static pages and material.
* Feedback data is excluded`],
      [22, "GXC-CRED-DE-ENG", "Design: Engagement", "Agency Service", 25,
        `This service provides the design and development of one new engagement template tailored to fit current branding. It includes key design and functional components. This template does not include building a survey.`],
      [22, "GXC-CRED-TT-ENG", "Technical Training: Engagement", "Training: Instructor Led", 25,
        `This technical training focuses on engagement, delivering hands-on instruction tailored for platform administrators. It covers key functions, workflows, and features, with guided exercises and real-world scenarios to ensure users are confident in preparing engagement projects. Training covers up to two (2) 1-hour sessions and is delivered virtually and is designed to support adoption and user empowerment.`],
      [23, "GXC-CRED-CR-EABDR", "Custom Report: Engagement Annual Benchmarking Dashboard and Report", "Agency Service", 40,
        `We can create an interactive dashboard for visualizing 12 months of data across your engagement site, as well as comparison metrics from three other like clients.
Your dashboard will include:
• Site visits, visitors, and traffic.
• Database and participant demographics.
• Project engagement and tool performance.
• Newsletters and emails.
The Benchmarking Report also includes observations and recommendations for enhancing the visitor experience on your site and achieving your engagement goals.`],
      [23, "GXC-CRED-PR-ENG", "Platform Review: Engagement", "Agency Service", 50,
        `This platform review focuses on engagement evaluating your current configuration, usability, performance, and alignment with departmental or organizational goals. The review includes key components overview, what further opportunities you have for outreach and feedback. Designed for intermediate or experienced users of the platform, this review helps inform system optimization and utilization. Includes a discovery call (up to 1-hour) to establish goals and a presentation that documents findings.`],
      [23, "GXC-CRED-PSSO", "Platform SSO", "Implementation Service", 75,
        `A configuration service to assist in setup of Single-Sign On (SSO) to our GXC Portal. Upon login, users will see a list of applications they can use. Uses your OpenID Connect (OIDC) or SAML for logins to point to Keycloak system and the specific setup we created for your ap.`]
    ],

    fw: [
      [24, "FWOE-CRED-UAUPWR", "Forms & Workflow OE User Advanced: Unlock Powerful Features to Work Smarter", "Training: Instructor Led", 4,
        `This interactive instructor led training session will guide users through workflow automation tools, advanced search and filtering, customizing views for efficiency and tips for handling complex cases.`],
      [24, "FWOE-CRED-AECMYP", "Forms & Workflow Admin Essentials: Confidently Manage Your Platform", "Training: Instructor Led", 4,
        `This interactive instructor led training session will guide administrators through user management, creating workspaces, building themes, key form shortcuts, snippets, field sets, lists, payment gateways, data connections and APIs.`],
      [24, "FWOE-CRED-UFMEGP", "Forms & Workflow OE User Foundations: Master the Essentials to Get Productive from Day One", "Training: Instructor Led", 6,
        `This interactive instructor led training session will guide users through building a form, help resources, basic and advanced layout fields, simple calculations, smart logic and C7 level settings.
Note: Price is per learner`],
      [24, "GXC-CRED-OD-BFDF", "E-Learning Library: Build Frictionless Digital Forms", "E-Learning Library", 10,
        `On demand, self-guided lesson, taking you Through the core components of well-designed digital forms. You'll learn form design best practices, how to establish a question protocol and how to test your new digital forms.`],
      [24, "GXC-CRED-SC-FADD", "System Activation: Forms add-on", "Implementation Service", 20,
        `This service provides configuration support for Forms & Workflow. It includes setup of additional purchased form capacity.`],
      [24, "GXC-CRED-SC-FSPC", "System Activation: Forms SharePoint Connector", "Implementation Service", 20,
        `This service provides configuration support for the Forms & Workflow SharePoint Connector.`],
      [24, "GXC-CRED-SC-FSA", "System Activation: Forms Storage add-on", "Implementation Service", 20,
        `This service provides configuration support for Forms & Workflow. It includes updates to your subscription limit for storage space.`],
      [25, "GXC-CRED-SC-FUA", "System Activation: Forms Users add-on", "Implementation Service", 20,
        `This service provides configuration support for Forms & Workflow. It includes updates to your subscription limit for staff user accounts.`],
      [25, "GXC-CRED-SC-FWTA", "System Activation: Forms Workflow Tool add-on", "Implementation Service", 20,
        `This service provides configuration support for Forms & Workflow. It includes updates to your subscription to allow access to the Workflow feature in your forms.`],
      [25, "GXC-CRED-SC-FAPI", "System Activation: Forms API Calls add-on", "Implementation Service", 20,
        `This service provides configuration support for Forms & Workflow. It includes updates to your subscription to increase the limit for the number of API calls per hour you can make.`],
      [25, "GXC-CRED-SC-FAZU", "System Activation: Forms Azure SSO Connector", "Implementation Service", 20,
        `This service provides configuration support for Forms & Workflow. It includes updates to your subscription to allow access to the Azure AD Connector functionality.`],
      [25, "GXC-CRED-SC-FT", "System Config: Forms Templates", "Implementation Service", 25,
        `This service provides configuration support for Forms & Workflow tool and template library.`],
      [25, "GXC-CRED-CR-FAW", "Custom Report: Forms & Workflows", "Agency Service", 30,
        `This custom report provides insights into current-state form processes, including accessibility, demand, and back-office workflow. Designed to inform and guide based on highest impact to constituents, the report includes click data via Google Analytics (as available), and highlights key focus areas using high-level process mapping, to inform the future state of form creation, submission, and processing. Report generated after a maximum of three 1-hour discovery sessions.`],
      [26, "GXC-CRED-CB-DFS", "Capacity Building: Digital Forms Strategy", "Agency Service", 40,
        `Up to three 1-hour consulting sessions to help jurisdictions map out a Digital Forms strategy spanning form creation and setup, website integration, as well as internal and external launch principles.`],
      [26, "GXC-CRED-WRK-FAW", "Workflow: Forms & Workflows Optimization", "Agency Service", 40,
        `Up to three (3) hours of workflow optimization working sessions, and one 1hour discovery call to determine tailored agenda.`],
      [26, "GXC-CRED-PR-FPR", "Platform Review: Forms & Platform Reviews", "Agency Service", 50,
        `This platform review focuses on evaluating your current forms and response process, usability, performance, and alignment with departmental or organizational goals. The review includes key components overview, what further opportunities you have for digital transformation and efficiency. Designed for intermediate or experienced users of the platform, this review helps inform system optimization and utilization. Includes a discovery call (up to 1-hour) to establish goals and a presentation that documents findings`],
      [26, "GXC-CRED-DD-FAWES", "Design and Development: Forms & Workflows – Essentials", "Agency Service", 160,
        `Forms & Workflow Build & Configuration Services for custom form creation - Tier 1 - 40 hours`],
      [26, "GXC-CRED-DD-FAWEN", "Design and Development: Forms & Workflows – Enhanced", "Agency Service", 500,
        `Forms & Workflow Build & Configuration Services for custom form creation - Tier 2 - 120 hours`],
      [26, "GXC-CRED-DD-FAWAD", "Design and Development: Forms & Workflows – Advanced", "Agency Service", 880,
        `Forms & Workflow Build & Configuration Services for custom form creation - Tier 3 - 200 hours`],
      [27, "FWOE-CRED-CVILT", "Forms & Workflow OE Custom Virtual Instructor-Led Training: Tailored, Live Online Training designed for your team", "Training: Instructor Led", null,
        `This interactive online instructor led training session is tailored content designed specifically for your organization’s unique workflows and goals.`]
    ],

    rrm: [
      [28, "RRME-CRED-ESA", "RRM Enhanced On-Demand: Sub-requests", "Training: E-Learning", 1,
        `Process sub-requests efficiently by understanding notification emails and completing content sections in both the secure exchange portal and the admin site.
Note: Price is per learner`],
      [28, "RRME-CRED-EAA", "RRM Enhanced On-Demand: Activities", "Training: E-Learning", 1,
        `Process activities efficiently by understanding notification emails and completing content sections in both the secure exchange portal and the admin site.
Note: Price is per learner`],
      [28, "RRME-CRED-ESR", "RRM Essentials On-Demand: Sub-requests", "Training: E-Learning", 1,
        `Process sub-requests efficiently by understanding notification emails and completing content sections in both the secure exchange portal and the admin site.
Note: Price is per learner`],
      [28, "RRME-CRED-EAC", "RRM Essentials On-Demand: Activities", "Training: E-Learning", 1,
        `Process activities efficiently by understanding notification emails and completing content sections in both the secure exchange portal and the admin site.
Note: Price is per learner`],
      [28, "RRMA-CRED-ERM", "Records Request ATIP E-Learning: Reports Module (English)", "Training: E-Learning", 2,
        `Gain the core reporting capabilities needed to efficiently build, refine, and export ATIP reports that drive informed operations, ensure compliance oversight, and meet transparency requirements.This package is intended for all users.
Note: Price is per learner`],
      [28, "RRMA-CRED-EMD", "Records Request ATIP E-Learning: Module de rapports (French)", "Training: E-Learning", 2,
        `Acquérez les capacités essentielles de création de rapports nécessaires pour élaborer, affiner et exporter efficacement des rapports AIPRP. Ces rapports soutiennent des opérations éclairées, renforcent la supervision de la conformité et répondent aux exigences de transparence. Ce module est destiné à l’ensemble des utilisateurs.
Note: Price is per learner`],
      [29, "RRMA-CRED-EURA", "Records Request ATIP E-Learning: Redaction Module", "Training: E-Learning", 3,
        `Develop the skills to confidently redact and release records using both manual and automated redaction capabilities. This course equips licensed redaction users to apply redaction tools, add annotations, and execute review workflows that safeguard sensitive information and ensure organizational compliance.
Note: Price is per learner`],
      [29, "RRMA-CRED-EMR", "Records Request ATIP E-Learning: Module de rédaction (French)", "Training: E-Learning", 3,
        `Développez l’expertise nécessaire pour caviarder et publier des documents en toute confiance grâce aux fonctionnalités de caviardage manuelles et automatisées. Ce cours permet aux utilisateurs finaux d’appliquer efficacement les outils de caviardage, les annotations et les flux de travail sécurisés afin de protéger les informations sensibles et de garantir la conformité organisationnelle.
Note: Price is per learner`],
      [29, "RRMA-CRED-ECF", "Records Request ATIP E-Learning: Configuration de la rédaction (French)", "Training: E-Learning", 3,
        `Développez des compétences administratives avancées pour configurer, gérer et gouverner le module de caviardage. Cette formation permet aux administrateurs de définir les paramètres de sécurité, de gérer les outils de caviardage et d’établir des contrôles qui empêchent la divulgation accidentelle d’informations personnellement identifiables (PII). Conçue pour les administrateurs responsables de la gestion et de l’intégrité des politiques, elle garantit des flux de travail de caviardage cohérents et reproductibles au sein de l’organisation.
Note: Price is per learner`],
      [29, "RRMA-CRED-EMY", "Records Request ATIP E-Learning: Module Yellowfin (French)", "Training: E-Learning", 3,
        `Développez des compétences analytiques avancées pour transformer des données complexes en informations claires et exploitables. Cette formation permet aux utilisateurs de créer des rapports percutants, d’affiner les visualisations et de partager efficacement des informations fondées sur les données afin d’éclairer la prise de décision dans l’ensemble de l’organisation. Ce module est destiné aux utilisateurs disposant de l’extension Yellowfin.
Note: Price is per learner`],
      [30, "RRMA-CRED-EAU", "Records Request ATIP E-Learning: Redaction Configuration (English)", "Training: E-Learning", 3,
        `Build advanced administrative expertise to configure, manage, and govern the Redaction module. This package empowers Admin users to define security settings, establish policies, and manage redaction tools and controls that prevent the accidental disclosure of Personally Identifiable Information (PII). Designed for Admins responsible for system changes, it ensures consistent, compliant, and repeatable redaction workflows across the organization.
Note: Price is per learner`],
      [30, "RRMA-CRED-EYA", "Records Request ATIP E-Learning: Yellowfin Module (English)", "Training: E-Learning", 3,
        `Build advanced analytics expertise to convert complex data into clear, actionable insights. In this package, learners will develop the skills to create, refine, and share impactful Yellowfin reports that drive informed, data-driven decisions across the organization. This package is designed for all users with the Yellowfin add-on.
Note: Price is per learner`],
      [30, "RRMA-CRED-EIFC", "Records Request ATIP End User Implementation Foundations: Launch with Confidence", "Training: Instructor Led", 4,
        `Through this interactive instructor led training session, participants will gain the knowledge and confidence to access AMANDA through different sign-in methods, set their personal profiles, perform effective searches, explore My Office and Task list to perform daily tasks.
Note: Pricing is per learner`],
      [30, "RRMA-CRED-UFE", "Records Request ATIP End User Foundations: Master the Essentials to be Productive", "Training: Instructor Led", 4,
        `Through this interactive instructor led training session, participants will gain the knowledge and confidence of people and property record creation and management options. Folder tab actions during multiple scenarios will also be demonstrated.
Note: Price is per learner`],
      [30, "RRMA-CRED-UAF", "Records Request ATIP End User Advanced: Unlock Powerful Features to Work Smarte", "Training: Instructor Led", 4,
        `This advanced learning package is a complete end user interface training where participants understand how to create and generate documents, how to upload attachments under different attributes, discover info fields and how to set values on them, fees management with refunds and transfers, generate reports, perform redaction on documents, complete processes and more!
Note: Price is per learner`],
      [31, "RRME-CRED-AECP", "RRM Enhanced Admin Essentials: Confidently Manage Your Platform", "Training: Instructor Led", 6,
        `Through this interactive instructor led training session, administrators learn user management, staff email lists, tags and attachment workspace settings and communication templates.
Note: Price is per learner`],
      [31, "RRME-CRED-AATC", "RRM Enhanced Admin Advanced: Take Control with Configuration and Automation", "Training: Instructor Led", 6,
        `Through this interactive instructor led training session, administrators learn workflows, manage user and departmental restrictions, advanced and in-line deflection setup, editing request type default selections and editing fees schedule.
Note: Price is per learner`],
      [31, "RRME-CRED-ERW", "RRM Enhanced Redaction Workshop", "Training: Instructor Led", 6,
        `This package includes applying redactions, manage annotations and prepare files for publishing within the Records Request Management system.
Note: Price is per learner`],
      [31, "RRMA-CRED-ACA", "Records Request ATIP Analytics Admin Advanced: Advanced Configuration and Automation", "Training: Instructor Led", 6,
        `Through this interactive instructor led training session, AMANDA Administrators learn how to create data sources, content folders, and views. Views with single table, multiple tables and sql views are created and Analytics User management is also included.
Note: Price is per learner`],
      [31, "RRME-CRED-UAF", "RRM Enhanced User Advanced: Unlock Powerful Features to Work Smarter", "Training: Instructor Led", 7,
        `This advanced learning package will explore advanced features like attachment workspace features, linking related requests, custom views and saving message drafts to streamline request processing and improve productivity.
Note: Price is per learner`],
      [31, "RRME-CRED-DAL", "RRM Enhanced Data Analytics Lab: Get Data to Make Strategic and Operational Decisions", "Training: Instructor Led", 7,
        `Through this interactive instructor led training session, participants will gain the knowledge and confidence to access, interpret and export data, understand available reports, build custom reports and turn insights into action plans.
Note: Price is per learner`],
      [32, "RRME-CRED-UFE", "RRM Enhanced User Foundations: Master the Essentials to be Productive", "Training: Instructor Led", 9,
        `Through this interactive instructor led training session, participants will gain the knowledge and confidence to communicate with requesters, collaborate with staff, as well as how to redact and release files.
Note: Price is per learner`],
      [32, "RRME-CRED-EUF", "RRM Enhanced On-Demand: User Foundations", "Training: E-Learning", 9,
        `Build confidence and efficiency from day one! Gain the skills to navigate systems, manage profiles, complete workflows, and troubleshoot with ease—everything you need to master the basics and work smarter.
Note: Price is per learner`],
      [32, "RRME-CRED-ELUF", "RRM Essentials On-Demand: User Foundations", "Training: E-Learning", 9,
        `Build confidence and efficiency from day one! Gain the skills to navigate systems, manage profiles, complete workflows, and troubleshoot with ease—everything you need to master the basics and work smarter.
Note: Price is per learner`],
      [32, "RRME-CRED-ELUA", "RRM Essentials On-Demand: User Advanced", "Training: E-Learning", 9,
        `Move beyond the basics with our intermediate package. Gain the skills to manage accounts, ensure compliance, and optimize performance with automation and advanced integrations.
Note: Price is per learner`],
      [32, "RRMA-CRED-EUA", "Records Request ATIP E-Learning: User Advanced (English)", "Training: E-Learning", 10,
        `Move beyond the basics with our intermediate package. Gain the skills to manage accounts, ensure compliance, and optimize performance with automation and advanced integrations.
Note: Price is per learner`],
      [32, "RRMA-CRED-EPA", "Records Request ATIP E-Learning: Parcours Avancé – Utilisateurs (French)", "Training: E-Learning", 10,
        `Allez au-delà des bases avec notre offre intermédiaire. Acquérez les compétences nécessaires pour gérer les accès, garantir la conformité et optimiser les performances grâce à l’automatisation et aux intégrations avancées.
Note: Price is per learner`],
      [33, "GXC-CRED-SC-RR", "System Config: Records Request", "Implementation Service", 10,
        `Engage with an Implementation team member to do one of the following: Portal Branding Updates, Add / Update Retention Schedules, Custom Field Updates, Updates to Letterhead and Email Templates.`],
      [33, "RRME-CRED-EUA", "RRM Enhanced On-Demand: User Advanced", "Training: E-Learning", 11,
        `Move beyond the basics with our intermediate package. Gain the skills to manage accounts, ensure compliance, and optimize performance with automation and advanced integrations.
Note: Price is per learner`],
      [33, "RRMA-CRED-MEP", "Records Request ATIP Analytics User Foundations: Master Essentials to be Productive", "Training: Instructor Led", 11,
        `Through this interactive instructor led training session, AMANDA Analytics users will gain knowledge on how basic reports are created, use different views to create multiple reports, creation of maps & charts and also understand the process of report and column formatting.
Note: Price is per learner`],
      [33, "RRMA-CRED-AECP", "Records Request ATIP End User Admin Essentials: Confidently Manage Your Platform", "Training: Instructor Led", 11,
        `Through this interactive instructor led training session, AMANDA Administrators learn new user creation, permissions management, security groups management, product level customization, folder type and folder group creation. Participants also learn how to administer the people module.
Note: Price is per learner`],
      [33, "RRMA-CRED-AAA", "Records Request ATIP End User Admin Advanced: Advanced Configuration and Automation", "Training: Instructor Led", 11,
        `Through this interactive instructor led training session, AMANDA Administrators learn how to setup document templates, customize the user experience through customization, setup processes, attempts, redaction administration, followed by rules related to retention and disposal.
Note: Price is per learner`],
      [33, "RRMA-CRED-EUF", "Records Request ATIP E-Learning: User Foundations (English)", "Training: E-Learning", 12,
        `Build confidence and efficiency from day one! Gain the skills to navigate systems, manage profiles, complete workflows, and troubleshoot with ease—everything you need to master the basics and work smarter.
Note: Price is per learner`],
      [34, "RRMA-CRED-EPF", "Records Request ATIP E-Learning: Parcours Fondations – Utilisateurs (French)", "Training: E-Learning", 12,
        `Développez votre confiance et votre efficacité dès le premier jour ! Acquérez les compétences nécessaires pour naviguer dans les systèmes, gérer les profils, effectuer des flux de travail complets et résoudre les problèmes en toute simplicité — tout ce dont vous avez besoin pour maîtriser les bases et travailler plus intelligemment.
Note: Price is per learner`],
      [34, "RRME-CRED-ECE", "RRM Enhanced Certification Exam", "Training: Certification", 18,
        `Showcase your knowledge of the RRM Enhanced (GovQA) system with completing the certification exam.`],
      [34, "RRMA-CRED-EUE", "Records Request ATIP E-Learning: Admin Essentials (English)", "Training: E-Learning", 20,
        `Master advanced skills to configure, optimize, and secure systems while resolving complex issues and leveraging integrations for maximum efficiency.
Note: Price is per learner`],
      [34, "RRMA-CRED-EAF", "Records Request ATIP E-Learning: Administrateurs (French)", "Training: E-Learning", 20,
        `Maîtrisez les compétences avancées nécessaires pour configurer, optimiser et sécuriser les systèmes tout en résolvant des problèmes complexes et en exploitant les intégrations pour une efficacité maximale.
Note: Price is per learner`],
      [34, "GXC-CRED-PR-RR", "Platform Review: Records Request", "Agency Service", 50,
        `Implementation will review current system to identify improvements to current process and make Best Practice recommendations to the customer as well as implement approved changes. Up to ten (10) hours.`],
      [34, "GXC-CRED-DE-RR", "Design: Records Request", "Agency Service", 100,
        `A review of current systems to identify improvements to current process and make Best Practice recommendations to the customer as well as implement approved changes. Up to twenty (20) hours.`],
      [35, "GXC-CRED-DM-RR", "Data Migration: Records Request", "Agency Service", 120,
        `Import Legacy Data into Records Request Management system. Data must be in a single delimited file. This does not include attachments.`],
      [35, "GXC-CRED-SU-RR", "Supplementary: Records Request", "Agency Service", 150,
        `Tailored intake forms that capture all necessary and unique details needed for response to other types of public records requests; plus management and tracking that follows different workflows, escalations, and due date calculations.`],
      [35, "RRMA-CRED-CST", "Records Request ATIP Custom Virtual Instructor-Led Training", "Training: Instructor Led", null,
        `This interactive online instructor led training session is tailored content designed specifically for your organization’s unique workflows and goals.`],
      [35, "RRMA-CRED-EOI", "Records Request ATIP Onsite Instructor-Led Training", "Training: In Person", null,
        `This interactive onsite instructor led training session is tailored content designed specifically for your organization’s unique workflows and goals.`],
      [35, "RRME-CRED-CST", "RRM Enhanced Custom Virtual Instructor-Led Training", "Training: Instructor Led", null,
        `This interactive online instructor led training session is tailored content designed specifically for your organization’s unique workflows and goals.
Note: Price is per learner`],
      [35, "RRME-CRED-EOI", "RRM Enhanced Onsite Instructor-Led Training", "Training: In Person", null,
        `This interactive onsite instructor led training session is tailored content designed specifically for your organization’s unique workflows and goals.
Note: Price is per learner`]
    ],

    srm: [
      [36, "SRMEN-CRED-ELAE", "SRM Enhanced: Admin Essentials", "Training: E-Learning", 1,
        `Equip yourself with essential User Admin skills to create and manage user profiles, ensuring effective staff oversight and smoother team coordination.
Note: Price is per learner`],
      [36, "SRMES-CRED-ELAE", "SRM Essentials: Admin Essentials", "Training: E-Learning", 1,
        `Equip yourself with essential User Admin skills to create and manage user profiles, ensuring effective staff oversight and coordination.
Note: Price is per learner`],
      [36, "SRMEE-CRED-ELMM", "SRM E&E: Messaging Module", "Training: E-Learning", 1,
        `Learn how to create community messages and define the appropriate audience to support timely and accurate community alerts.
Note: Price is per learner`],
      [36, "SRMEE-CRED-ELKBAM", "SRM E&E: Knowledge Base Article Module", "Training: E-Learning", 2,
        `Learn how to create and manage KBAs, apply them to request types, and understand how they support staff during request creation.
Note: Price is per learner`],
      [36, "SRMEE-CRED-UAUPWR", "SRM E&E User Advanced: Unlock Powerful Features to Work Smarter", "Training: Instructor Led", 5,
        `This interactive instructor led training session will guide users through customizing views for efficiency, bulk actions, map/list view, reporting features, sending community messages and menu action items when processing requests.
Note: Price is per learner`],
      [36, "SRMEE-CRED-UAECMYP", "SRM E&E User Admin Essentials: Confidently Manage Your Platform", "Training: Instructor Led", 5,
        `This interactive instructor led training session will guide user admins through the admin interface, user management, managing security roles and team management.
Note: Price is per learner`],
      [37, "SRMEE-CRED-WSKB", "SRM E&E Workshop: Knowledge Base", "Training: Instructor Led", 5,
        `Learn how to create and manage KBAs, apply them to request types, and understand how they support staff during request creation.
Note: Price is per learner`],
      [37, "SRMEE-CRED-WSMM", "SRM E&E Workshop: Messaging Module", "Training: Instructor Led", 5,
        `Learn how to create community messages and define the appropriate audience to support timely and accurate community alerts.
Note: Price is per learner`],
      [37, "SRMEE-CRED-WSTR", "SRM E&E Workshop: Trash Reminders", "Training: Instructor Led", 5,
        `Participants will be able to configure trash reminder dates and clearly identify service blackout dates to ensure accurate and timely collection notifications.
Note: Price is per learner`],
      [37, "SRMEE-CRED-WSAD", "SRM E&E Workshop: App Design", "Training: Instructor Led", 5,
        `Master design settings to customize the look and layout of your Public Portal mobile app.
Note: Price is per learner`],
      [37, "SRMEE-CRED-AATCACA", "SRM E&E Admin Advanced: Take Control with Advanced Configuration and Automation", "Training: Instructor Led", 6,
        `This interactive instructor led training session will guide system admins through designing mobile app homepage, customizing workflow rules and triggers, customizing escalation rules, drawing or uploading geofences, configuring request type settings and widgets.
Note: Price is per learner`],
      [37, "SRMEE-CRED-SAECMYP", "SRM E&E System Admin Essentials: Confidently Manage Your Platform", "Training: Instructor Led", 6,
        `This interactive instructor led training session will guide system admins through the admin interface, user management, managing security roles, team management, setting SLA due dates, maintaining canned responses, maintaining tags, updating status types and activating existing mobile app.
Note: Price is per learner`],
      [38, "SRMEE-CRED-UFMEGP", "SRM E&E User Foundations: Master the Essentials to Get Productive from Day One", "Training: Instructor Led", 7,
        `This interactive instructor led training session will guide users through communicating with requesters, collaborate with staff and update requests appropriately.
Note: Price is per learner`],
      [38, "GXC-CRED-SC-SRM", "System Config: Service Request Management", "Implementation Service", 10,
        `Professional Services for consulting work according to the terms in the scope of work. It includes services like Project Management, and Implementation Consulting (up to two hours). The work is always scoped.`],
      [38, "GXC-CRED-CR-SRM", "Custom Report: Service Request Management", "Agency Service", 20,
        `Power BI reports can be developed depending on customer´s requirements. The work is always scoped.`],
      [38, "GXC-CRED-WRK-SRM", "Workflow: Service Request Management", "Agency Service", 25,
        `Up to four (4) hours of workflow optimization and one 30-minute discovery call to determine tailored training agenda.`],
      [38, "GXC-CRED-PR-SRM", "Platform Review: Service Request Management", "Agency Service", 50,
        `Implementation fee for standard integration (Cityworks, Accela, Amanda, Lucity Cartegraph, Avaya) over and above what their subscription includes (one standard integration if Essentials and two if Enterprise).`],
      [38, "GXC-CRED-SU-SRM", "Supplementary: Service Request", "Agency Service", 50,
        `Add a new request type into Service Request Management.`],
      [38, "GXC-CRED-DE-SRM", "Design: Service Request Management", "Agency Service", 100,
        `This service provides design time for customer custom requests (new workflows for example). Scoping Required.`],
      [38, "GXC-CRED-DM-SRM", "Data Migration: Service Request Management", "Agency Service", 120,
        `Scoping is required to define what could be migrated and how many years (requests, comments, attachments, etc.)`],
      [39, "SRMEE-CRED-CVILT", "SRM E&E Custom Virtual Instructor-Led Training: Tailored, Live Online Training designed for your team", "Training: Instructor Led", null,
        `This interactive online instructor led training session is tailored content designed specifically for your organization’s unique workflows and goals.`]
    ],

    amm: [
      [40, "AGOM-CRED-WSTMPM", "Agenda OE Workshop: Template Maintenance", "Training: Instructor Led", 4,
        `This interactive instructor led training session will focus on maintaining the agenda and minutes templates within OneMeeting at the committee and individual meeting levels.
Note: Price is per learner`],
      [40, "MMVC-CRED-UFMEGP", "Votecast User Foundations: Master the Essentials to Get Productive from Day One", "Training: Instructor Led", 4,
        `This interactive instructor led training session will guide administrators through creating user accounts for: admins, clerks and voting members, web settings for: text expansions, profiles and display actions, managing archive folders, and managing events.
Note: Price is per learner`],
      [40, "AGOM-CRED-UFMEGP", "Agenda OE User Foundations: Master the Essentials to be Productive", "Training: Instructor Led", 6,
        `Through this interactive instructor led training session, participants will gain knowledge to log into OneMeeting, navigate its features, and manage agenda items; including creating, submitting, rescheduling, and editing them. Participants will also gain the skills to search for items, generate reports, and to delegate or reassign tasks to other users.
Note: Price is per learner`],
      [40, "AGOM-CRED-AMUAUPWR", "Agenda OE Agenda Management User Advanced: Unlock Powerful Features to Work Smarter", "Training: Instructor Led", 6,
        `Through this interactive instructor led training session, agenda coordinators will have the skills to compile and publish agendas and packets.
Note: Price is per learner`],
      [40, "AGND-CRED-EUFL", "Agenda LE: User Foundations", "Training: E-Learning", 7,
        `Build confidence and efficiency from day one! Gain the skills to navigate systems, manage profiles, complete workflows, and troubleshoot with ease—everything you need to master the basics and work smarter.
Note: Price is per learner`],
      [41, "AGND-CRED-EUFO", "Agenda OE: User Foundations", "Training: E-Learning", 7,
        `Build confidence and efficiency from day one! Gain the skills to navigate systems, manage profiles, complete workflows, and troubleshoot with ease—everything you need to master the basics and work smarter.
Note: Price is per learner`],
      [41, "AGLE-CRED-PLAYBK", "Agenda LE Productivity Playbook: Best Practices, Tips, and Tricks to Boost Efficiency", "Training: Instructor Led", 8,
        `Through this interactive instructor led training session, participants will review practical shortcuts, templates and features to reduce manual work, collaboration patterns between clerks, approvers and admins, quality checks that precent rework and tops for smoother post-meeting minutes finalization.
Note: Price is per learner`],
      [41, "AGLE-CRED-WSREPESS", "Agenda LE Workshop: Reporting Essentials", "Training: Instructor Led", 8,
        `Through this interactive instructor led training session, participants will gain the knowledge on how to maximize the value of Legistar's built-in reporting tools to support legislative tracking, transparency and operational efficiency.
Note: Price is per learner`],
      [41, "AGLE-CRED-WSYERSTU", "Agenda LE Workshop: Year-End Review & System Tune-Up", "Training: Instructor Led", 8,
        `Participants will complete a comprehensive review of their Legistar environment, ensuring it is optimized, secure, and ready for the upcoming legislative cycle.
Note: Price is per learner`],
      [41, "AGOM-CRED-WSCM", "Agenda OE Workshop: Committee Manager", "Training: Instructor Led", 8,
        `This interactive instructor led training session will focus on managing form submissions, creating and maintaining committee permissions and members. Participants will also generate committee member reports.
Note: Price is per learner`],
      [41, "MMVC-CRED-CRWS", "Votecast Clerks Responsibilities Workshop", "Training: Instructor Led", 9,
        `This interactive instructor led training session will cover clerks responsibilities such as launching votecast web, video component and taking minutes. There will be time for Q&A and practice running a mock meeting.
Note: Price is per learner`],
      [42, "AGOM-CRED-MMUAUPWR", "Agenda OE Meeting Management User Advanced: Unlock Powerful Features to Work Smarter", "Training: Instructor Led", 9,
        `Through this interactive instructor led training session, agenda coordinators will have the skills to prepare for a live meeting, add and maintain role call, accurately record minutes, motions and votes, update minute templates, run a mock meeting and compile and publish finalized meeting minutes.
Note: Price is per learner`],
      [42, "AGOM-CRED-AECMYP", "Agenda OE Admin Essentials: Confidently Manage Your Platform Day-to-Day", "Training: Instructor Led", 10,
        `This interactive instructor led training session will focus on the admin interface navigation, user management, managing permissions and roles, workflow groups and emails, lookups and template maintenance.
Note: Price is per learner`],
      [42, "GXC-CRED-SC-AMM", "System Config: Agenda & Meeting Management", "Implementation Service", 10,
        `3 hours of Agenda PE to update system configurations such as Departments, Meeting Bodies, Meeting Body Members, Meeting Locations, and Agenda Items.`],
      [42, "GXC-CRED-SC-AMME", "System Config: Agenda & Meeting Management (Enterprise)", "Implementation Service", 10,
        `3 hours of Agenda LE or Agenda OE to update system configurations such as Departments, Meeting Bodies, Meeting Body Members, Meeting Locations, and Agenda Items.`],
      [42, "AGLE-CRED-AECMYP", "Agenda LE Admin Essentials: Confidently Manage Your Platform Day-to-Day", "Training: Instructor Led", 11,
        `Through this interactive instructor led training session, participants will gain knowledge to manage core administration safely with permission models and control access, govern publishing, MediaManager administration for archives, timestamps and trimming, configuration impacts and maintain operational integrity without over-customizing or risking data quality.
Note: Price is per learner`],
      [42, "AGPE-CRED-AECMYP", "Agenda PE Admin Essentials: Confidently Manage Your Platform Day-to-Day", "Training: Instructor Led", 13,
        `This interactive instructor led training session will guide administrators through configuration settings, user management, security groups, meeting types and bodies.
Note: Price is per learner`],
      [43, "AGPE-CRED-UFMEGP", "Agenda PE User Foundations: Master the Essentials to Get Productive from Day One", "Training: Instructor Led", 15,
        `By the end of this session, drafters will be able to draft an agenda item in Peak, covering all the fields and features available based on their role, as well as how to build and edit workflows. Approvers will be able to review an agenda item sent for their appoval, and to take action on the item. Agenda Coordinators/Clerks will be able to schedule single-occurrence and recurring meetings; perform the tasks to finalize the agenda, preview the agenda packet, publish the agenda for board members/comissioners to Legislate, along with all the features in that application, and finally how to publish the agenda to the public.
Note: Price is per learner`],
      [43, "AGLE-CRED-UFMEGP", "Agenda LE User Foundations: Master the Essentials to be Productive", "Training: Instructor Led", 22,
        `Through this interactive instructor led training session, participants will gain knowledge to navigate the Legistar interface and core concepts, understand terminology, roles and workflow touchpoints. They will be able to search for, create, and manage meeting content and records, track item status through review and agenda readiness and where to find help to troubleshoot basics. Drafters and Approvers will learn how to draft files and submit into workflows while Agenda Coordinators and Minute Coordinators will learn the pre-meeting and post-meeting lifecycle and where MediaManager fits into the workflow.
Note: Price is per learner`],
      [43, "GXC-CRED-WRK-AMM", "Workflow: Agenda & Meeting Management", "Agency Service", 25,
        `Up to four (4) hours of workflow optimization and one 30-minute discovery call to determine tailored training agenda.`],
      [43, "GXC-CRED-WRK-AMME", "Workflow: Agenda & Meeting Management (Enterprise)", "Agency Service", 25,
        `Up to three (3) hours of workflow optimization based on one 60-minute discovery call to determine workflow modifications changes for Agenda LE or Agenda OE. Should additional hours be necessary, supplementary credits may also be required.`],
      [44, "GXC-CRED-PR-AMM", "Platform Review: Agenda & Meeting Management", "Agency Service", 50,
        `This platform review focuses on communications evaluating your current configuration, usability, performance, and alignment with departmental or organizational goals for Agenda PE. The review includes key components overview of legislative processes, templates, and workflow. Designed for subject matter experts on the platform, this review helps inform system optimization and utilization. Includes a discovery call (up to 1-hour) to establish goals and a presentation that documents findings.`],
      [44, "GXC-CRED-PR-AMME", "Platform Review: Agenda & Meeting Management (Enterprise)", "Agency Service", 50,
        `This platform review focuses on communications evaluating your current configuration, usability, performance, and alignment with departmental or organizational goals for Agenda LE or Agenda OE. The review includes key components overview of legislative processes, templates, and workflow. Designed for subject matter experts on the platform, this review helps inform system optimization and utilization. Includes a discovery call (up to 1-hour) to establish goals and a presentation that documents findings.`],
      [44, "GXC-CRED-DE-AMM", "Design: Agenda & Meeting Management", "Agency Service", 100,
        `Modifications to or creation of new Cover Sheets, Agendas, and Minutes reports for Agenda PE.`],
      [44, "GXC-CRED-DE-AMME", "Design: Agenda & Meeting Management (Enterprise)", "Agency Service", 100,
        `Modifications to or creation of new Cover Sheets, Agendas, and Minutes reports for Agenda LE or Agenda PE.`],
      [44, "GXC-CRED-DM-AMM", "Data Migration: Agenda & Meeting Management", "Agency Service", 120,
        `Basic data migration involves the transition and staging of audio/video content, agendas, minutes documents, and metadata (meeting body names, dates, times) from the legacy platform to the target platform. Customers are always given the opportunity to validate the data before the project is considered complete to ensure data integrity.`],
      [45, "GXC-CRED-DM-AMME", "Data Migration: Agenda & Meeting Management (Enterprise)", "Agency Service", 120,
        `Basic data migration service involves the transition and staging of audio/video content, agendas, minutes and metadata (meeting body names, data, times) from the legacy platform to the target platform. Customers are always given the opportunity to validate the data before the project is considered complete to ensure data integrity.`],
      [45, "AGPE-CRED-CVILT", "Agenda PE Custom Virtual Instructor-Led Training: Tailored, Live Online Training designed for your team", "Training: Instructor Led", null,
        `This interactive online instructor led training session is tailored content designed specifically for your organization’s unique workflows and goals.`],
      [45, "AGOM-CRED-CVILT", "Agenda OE Custom Virtual Instructor-Led Training: Tailored, Live Online Training designed for your team", "Training: Instructor Led", null,
        `This interactive online instructor led training session is tailored content designed specifically for your organization’s unique workflows and goals.`]
    ],

    vid: [
      [46, "VIDS-CRED-EUF", "Live Manager: Essential Functionalities (Live Manager Web)", "Training: E-Learning", 2,
        `Hit the ground running with confidence! This course equips you with the essential skills to seamlessly integrate and manage your Granicus video solution. Learn to navigate the platform, manage profiles, complete key workflows, and troubleshoot with ease—all designed to help Media Manager, Agenda LE, PE, and OE users work smarter, faster, and more efficiently.
Note: Price is per learner`],
      [46, "VIDS-CRED-UFE", "Live Manager User Foundations: Master the Essentials to be Productive", "Training: Instructor Led", 4,
        `Through this interactive instructor led training session, participants will gain the knowledge and confidence to review and demonstrate setup of LiveManager Web settings, demonstrate how to create user accounts for both Admins, Clerks and Voting Members, create and manage archive folders, searching, viewing, and managing events, Review of how agenda is published, demonstrate how to launch an event and record it and more.
Note: Price is per learner`],
      [46, "GXC-CRED-SC-VID", "System Config: Video", "Implementation Service", 10,
        `Up to 4 hours of remote modifications, redesign, configuration work for specific partially managed or fully managed video hardware changes for equipment currently in use by a client. Remote work will normally be for but not limited to, CG (computer graphic) updates, video switcher configuration, or adding PiP (picture in picture) configuration and design functionality for a hardware system.`],
      [46, "GXC-CRED-DD-VID", "Design and Development: Video", "Agency Service", 10,
        `Up to 3 discovery and design calls with client regarding modifications, redesign, configuration work for specific partially managed or fully managed video changes for equipment currently in use by a client. Call will normally be about, but not limited to, CG (computer graphic) updates, video switcher configuration, or adding PiP (picture in picture) configuration and design functionality for a hardware system.`],
      [47, "GXC-CRED-PR-VID", "Platform Review: Video Management", "Agency Service", 45,
        `Onsite review and testing of a current client’s hardware system for partially managed or fully managed video using Swagit. This can also be used for onsite installation or tech onsite service call. Credits cover travel and labor. Additional costs may be required for hardware separately.`],
      [47, "GXC-CRED-CM-VID", "Content Migration: Video", "Agency Service", 60,
        `Migration of video content from client's previous vendor into partially managed or fully managed streaming system and archive. Priced per year of content to migrate.`],
      [47, "VIDS-CRED-CST", "Live Manager Custom Virtual Instructor-Led Training: Tailored, Live Online Training designed for your team", "Training: Instructor Led", null,
        `This interactive instructor led training session is tailored content designed specifically for your organization’s unique workflows and goals and can be delivered online or onsite.`]
    ],

    bc: [
      [48, "BOCO-CRED-LUF", "B&C E-Learning: User Foundations", "Training: Instructor Led", 5,
        `Build confidence and efficiency from day one! Gain the skills to navigate systems, manage profiles, and complete workflows—everything you need to master the basics and work smarter.
Note: Price is per learner`],
      [48, "BOCO-CRED-ELUA", "B&C E-Learning: User Advanced", "Training: Instructor Led", 6,
        `Move beyond the basics with our intermediate package. Gain the skills to manage records, troubleshoot issues, and optimize performance with automation and integrations.
Note: Price is per learner`],
      [48, "BOCO-CRED-WBL", "B&C Workshop: Board Liasons", "Training: Instructor Led", 6,
        `This interactive workshop would bring liaisons up to speed with a quick overview of their permissions and use of the system. This would include logging in, managing appointments, email notifications for assigned boards and using the Board Actions menu.
Note: Price is per learner`],
      [48, "BOCO-CRED-WEGL", "B&C Workshop: Essentials for Go Live", "Training: Instructor Led", 8,
        `This interactive instructor led training session will focus on the important elements of B&C and prepare clients for a successful go live. This would include elements like: reviewing the public facing widget, application form builder and email notifications.
Note: Price is per learner`],
      [48, "BOCO-CRED-WCPP", "B&C Workshop: Client Pain Points", "Training: Instructor Led", 9,
        `This interactive workshop would address the common pain points clients have including Custom Emails, Internal Trackers, and Appointment Details.
Note: Price is per learner`],
      [48, "GXC-CRED-SC-BC", "System Config: Boards & Commissions", "Implementation Service", 10,
        `3 hours - Updates to Boards and Commissions configuration`],
      [49, "GXC-CRED-CR-BC", "Custom Report: Boards & Commissions", "Agency Service", 10,
        `Up to 2 new custom reports based on customer request and confirmation of scope by the design team.`],
      [49, "GXC-CRED-WRK-BC", "Workflow: Boards & Commissions", "Agency Service", 25,
        `Up to four (4) hours of workflow optimization and one 30-minute discovery call to determine tailored training agenda.`],
      [49, "GXC-CRED-PR-BC", "Platform Review: Boards & Commissions", "Agency Service", 50,
        `Operations Cloud review of the Boards and Commissions solution to assess for improvements and make recommendations for optimization.`],
      [49, "GXC-CRED-DE-BC", "Design: Boards & Commissions", "Agency Service", 50,
        `Update to existing report used for Boards and Commissions`],
      [49, "GXC-CRED-DM-BC", "Data Migration: Boards & Commissions", "Agency Service", 120,
        `Import legacy data into Boards and Commissions to have access to historical data from a previous system used prior to buying Boards and Commissions.`],
      [49, "BOCO-CRED-CST", "B&C Custom Virtual Instructor-Led Training: Tailored, Live Online Training designed for your team", "Training: Instructor Led", null,
        `This interactive online instructor led training session is tailored content designed specifically for your organization’s unique workflows and goals.`],
      [49, "BOCO-CRED-OITI", "B&C Onsite Instructor-Led Training: Instructor-Led Training delivered at your location", "Training: In Person", null,
        `This interactive onsite instructor led training session is tailored content designed specifically for your organization’s unique workflows and goals.`]
    ],

    strat: [
      [50, "GXC-CRED-DPM", "E-Learning Library: Understand key metrics of your digital presence", "E-Learning Library", 10,
        `On demand, self-guided lesson, taking you through how to measure the outcomes of your digital experiences. You'll learn definitions and public sector benchmarks for core digital KPIs. You receive a template to support your development of a measurement program.`],
      [50, "GXC-CRED-OD-DMS", "E-Learning Library: Develop a Multichannel Strategy", "E-Learning Library", 10,
        `On demand, self-guided lesson, breaking down the Granicus Experience Group's strategic framework so that you're enabled to build a multichannel experience. The session will guide you through goal setting, audience understanding, journey mapping, content needs and how to measure success for your initiative.`],
      [50, "GXC-CRED-OD-LUDE", "E-Learning Library: Leveling Up Your Digital Engagement", "E-Learning Library", 10,
        `This course is organized around a nine-question Digital Maturity Quiz. Learn where to focus your efforts and find concrete starting points to grow your engagement strategy and mature your digital presence.`],
      [50, "GXC-CRED-FS-TT", "Field Support: Troubleshooting and Testing", "Agency Service", 80,
        `Three days of onsite troubleshooting and testing with a Technical Support Specialist (travel and related expenses billed separately). This service is designed for complex systems requiring hands on assistance to address operational challenges, identify customization needs, and define a resolution path in collaboration with the customer.`],
      [50, "GXC-CRED-OD-AGS", "E-Learning Library: Audience Growth Strategy", "E-Learning Library", 100,
        `Conduct an experience audit to understand current state. Develop up to two (2) creative assets and copy as needed for audience capture points, such as text to subscribe, website overlays, partner widgets, signup boxes, and Granicus Network promotions. Determine online and offline capture points, including incorporating capture points into social media and other communications.`],
      [51, "GXC-CRED-ECW", "Experience Center Workshop", "Agency Service", 300,
        `Successful digital initiatives require more than just the right technology. Organizations also need the right strategy and culture. GXG's Experience Center workshops are designed to solve customers' unique pain points and enable progress toward an achievable goal. The GXG team of strategic designers will facilitate a virtual workshop with a series of design thinking and brainstorming activities to better understand a customer's current state and foster alignment across teams. Together we will co-create a new path forward for customer experience and digital transformation`],
      [51, "GXC-CRED-GXG-DSU", "GXG: Digital Services University", "Agency Service", 750,
        `An intensive curriculum which equips your staff with the essential principles and practices of digital service design on Granicus technology. The DSU curriculum content covers contemporary teaching in design thinking for digital services, human centered future state blueprinting, UX writing for Granicus forms, UAT and much more. DSU graduates are left with the ability to build end-to-end digital services which are centered on the needs of the customer, design out inefficiency and improve the customer experience. *in person ONLY`]
    ],

    pcl: [
      [52, "PCLH-CRED-EBA", "PCL Enhanced: Bluebeam Add-On", "Training: E-Learning", 2,
        `Check documents in and out of Bluebeam sessions linked to permit records and verify that permit types and user settings are correctly configured for successful use.
Note: Price is per learner`],
      [52, "PCLH-CRED-PAO", "PCL Enhanced: Permitting Add-On", "Training: Instructor Led", 3,
        `This interactive instructor led training session would cover the Permitting module within the PCL Enhanced platform.
Note: Price is per learner`],
      [52, "PCLH-CRED-LAO", "PCL Enhanced: Licensing Add-On", "Training: Instructor Led", 3,
        `This interactive instructor led training session would cover the Licensing module within the PCL Enhanced platform.
Note: Price is per learner`],
      [52, "PCLH-CRED-CEA", "PCL Enhanced: Code Enforcement Add-On", "Training: Instructor Led", 3,
        `This interactive instructor led training session would cover the Code Enforcement module within the PCL Enhanced platform.
Note: Price is per learner`],
      [52, "PCLH-CRED-RIA", "PCL Enhanced: Recurring Inspections Add-On", "Training: Instructor Led", 3,
        `This interactive instructor led training session would cover the Recurring Inspections module within the PCL Enhanced platform.
Note: Price is per learner`],
      [52, "PCLT-CRED-DAU", "PCL Enterprise Data Analytics User Lab", "Training: Instructor Led", 6,
        `Through this interactive instructor led training lab, Analytics users will gain hands-on experience in creating reports, formatting and columns, designing charts and graphs and sharing reports.
Note: Price is per learner`],
      [52, "PCLT-CRED-DAAL", "PCL Enterprise Data Analytics Admin Lab: Get Data to Make Strategic and Operation Decisions", "Training: Instructor Led", 6,
        `Through this interactive instructor led training lab, Analytics Admins will gain hands-on experience in configuring data sources, views and users.
Note: Price is per learner`],
      [53, "PCLT-CRED-EIFC", "PCL Enterprise Implementation Foundations: Launch with Confidence", "Training: Instructor Led", 6,
        `Through this interactive instructor led training session, participants will gain the knowledge and confidence to access AMANDA through different sign-in methods, set their personal profiles, perform effective searches, explore My Office and Task list to perform daily tasks.
Note: Price is per learner`],
      [53, "PCLT-CRED-ULV", "PCL Enterprise UAT Lab: Validate Your Setup Before Go-Live", "Training: Instructor Led", 6,
        `Through this interactive instructor led training lab, participants will gain hands-on experience in searching and managing people, property and folder records along with creating new records.
Note: Price is per learner`],
      [53, "PCLT-CRED-UFE", "PCL Enterprise End User Foundations: Master the Essentials to be Productive", "Training: Instructor Led", 6,
        `Through this interactive instructor led training session, participants will receive an introduction to PCL Enterprise, creation and editing of people and property records, operations of folder tabs and add cycles.
Note: Price is per learner`],
      [53, "PCLT-CRED-CPA", "PCL Enterprise: Collaboration Portal", "Training: Instructor Led", 6,
        `Through this interactive instructor led training session, PCL Enterprise users will gain knowledge on creating folder processes and assigning them to Collaboration Portal users, logging into the Collaboration Portal and completing tasks.
Note: Price is per learner`],
      [53, "PCLT-CRED-UAF", "PCL Enterprise User Advanced: Unlock Powerful Features to Work Smarter", "Training: Instructor Led", 6,
        `This package includes complete advanced end user training on how to create documents, upload attachments under different attributes, utilize info fields, fees management with refunds and transfers, generate reports, issue folders and schedule inspections.
Note: Price is per learner`],
      [53, "PCLT-CRED-EAAA", "PCL Enterprise Analytics Admin Advanced: Take Control with Advanced Configuration", "Training: Instructor Led", 6,
        `Through this interactive instructor led training session, PCL Enterprise Analytics administrators learn to create data sources, content folders ,single table views, multiple table views, sql views and user management.
Note: Price is per learner`],
      [54, "PCLT-CRED-BSA", "PCL Enterprise: Batch Scheduler", "Training: Instructor Led", 6,
        `This interactive instructor led training session would cover quick, simple, procedure, data import, data export, document and toehr batch scheduling jobs.
Note: Price is per learner`],
      [54, "PCLT-CRED-LTA", "PCL Enterprise: LOC & TA", "Training: Instructor Led", 6,
        `This interactive instructor led training session would cover the use and administration of the Letter of Credit and Trust Account module.
Note: Price is per learner`],
      [54, "PCLT-CRED-WSA", "PCL Enterprise: Web Services", "Training: Instructor Led", 6,
        `This interactive instructor led training session covers the use of existing web service calls such as: Create, Update, Delete, Add, etc. and the exchange of data between testing tools and the PCL Enterprise database. Participants will also create and test custom transactions.
Note: Price is per learner`],
      [54, "PCLH-CRED-EUA", "PCL Enhanced: User Advanced", "Training: E-Learning", 9,
        `Move beyond the basics with our intermediate package. Gain the skills to manage accounts, ensure compliance, and optimize performance with automation and advanced integrations.`],
      [54, "PCLH-CRED-RP-ERO", "Reports: Existing Report Optimization", "Agency Service", 10,
        `Review and optimization of one existing report to improve accuracy, performance, usability, or alignment with current reporting needs. Designed for organizations whose existing reports have become outdated or no longer serve their intended purpose. Includes adjustments to filters, formatting, or logic without rebuilding the report from scratch. After delivery, your team will have a refined report that better supports current business needs and decision-making.`],
      [54, "GXC-CRED-SC-SRM", "System Config: Service Request Management", "Implementation Service", 10,
        `Professional Services for consulting work according to the terms in the scope of work. It includes services like Project Management, and Implementation Consulting (up to two hours). The work is always scoped.`],
      [55, "PCLH-CRED-SC-ESO", "System Config: Electronic Submittal Optimization", "Implementation Service", 10,
        `Review and cleanup of electronic submittal requirements across up to 20 selected permits or application types. Designed for organizations looking to improve the clarity, consistency, and usability of their document requirements for both staff and applicants. Includes review of existing submittal requirements and updates to align with best practices. After delivery, your team and applicants will benefit from clearer, more consistent document requirements, reducing back-and-forth and improving submission quality.`],
      [55, "PCLH-CRED-SC-FSUSP", "System Config: Fee Schedule Update (Single Page)", "Implementation Service", 10,
        `Updates to one existing fee schedule to reflect revised amounts, structures, or applicability. Designed for organizations with approved fee changes that need to be accurately reflected in PCL-E. Includes configuration updates to ensure fees are correctly applied based on the approved changes. After delivery, your team will have an accurate, up-to-date fee schedule that aligns with current policy and is correctly applied across affected workflows.`],
      [55, "PCLH-CRED-SC-ISO", "System Config: Inspection Type Optimization", "Implementation Service", 10,
        `Optimization of up to 10 existing inspection types, including outcomes, scheduling rules, or checklists. Designed for organizations looking to align inspection configuration with current operational needs and enforcement practices. Includes review of existing inspection types and configuration updates within the defined scope. After delivery, your team will have streamlined, current inspection configurations that better support field operations and consistency.`],
      [55, "PCLH-CRED-SC-RPR", "System Config: Role and Permission Review", "Implementation Service", 10,
        `A review of user roles and permissions to ensure appropriate access based on staff responsibilities. Designed for organizations looking to strengthen security, compliance, and operational efficiency in their PCL-E environment. Includes documented recommendations and, where in scope, implementation of adjustments. After delivery, your team will have appropriately scoped access aligned to roles, reducing risk and improving day-to-day usability.`],
      [56, "PCLH-CRED-SC-TRWK", "System Config: Template Rework", "Implementation Service", 10,
        `Updates to one existing template such as a notice, letter, or form to reflect revised language, formatting, or business requirements. Designed for organizations that need to refresh existing templates to align with current policy or operational needs. Includes review and update of the targeted template. After delivery, your team will have an updated, accurate template ready for use.
Note: this service does not include net-new template creation.`],
      [56, "PCLH-CRED-PC-5TP", "Portal Configuration: 5 Templates or Permits", "Implementation Service", 10,
        `Configuration of up to five existing permits or application types for availability through the PCL-Enhanced Public Portal. Designed for organizations looking to expand the services available to their constituents through self-service. Includes ensuring forms, required fields, and submission settings align with approved workflows and public-facing requirements. After delivery, your constituents will have access to additional permits or applications through the portal, reducing manual intake and improving service delivery.
Note: this service does not include net-new template creation or rework of existing templates.`],
      [56, "PCLH-CRED-PC-VLU", "Portal Configuration: Violation Library Updates", "Implementation Service", 10,
        `Updates to the 75 most common violations used in Code Enforcement, including adding, updating, or deactivating violation entries. Designed for Code Enforcement teams that need to align their violation library with current ordinances, terminology, and enforcement practices. Includes review and updates across the targeted violation set. After delivery, your team will have an accurate, up-to-date violation library that reflects current enforcement practices.`],
      [56, "PCLH-CRED-TC-PDU", "Technical Config: Parcel Data Updates", "Implementation Service", 10,
        `Configuration updates related to parcel data, such as adjustments due to assessment changes or data source updates. Designed for organizations that need to keep their parcel-based records current as external data sources change. Includes the technical updates required to maintain parcel data accuracy in PCL-E. After delivery, your team will have accurate, current parcel data supporting reliable records and downstream workflows.`],
      [57, "PCLH-CRED-SC-WKFO", "System Config: Workflow Optimization", "Implementation Service", 10,
        `Review and refinement of up to 10 existing workflows to improve efficiency, clarity, or alignment with current business practices. Designed for organizations whose workflows have drifted from actual operations or could benefit from best-practice adjustments. Includes targeted adjustments within the current workflow structure. After delivery, your team will have streamlined workflows that better reflect day-to-day operations and improve overall efficiency.`],
      [57, "PCLT-CRED-AECP", "PCL Enterprise Admin Essentials: Confidently Manage Your Platform", "Training: Instructor Led", 11,
        `Through this interactive instructor led training session, administrators learn user management, permissions & security groups, product level customization, people and property module administration, folder type and folder group creation.
Note: Price is per learner`],
      [57, "PCLT-CRED-UFME", "PCL Enterprise Analytics User Foundations: Master the Essentials to be Productive", "Training: Instructor Led", 11,
        `Through this interactive instructor led training session, PCL Enterprise Analytics users will gain knowledge on how basic reports are created, use different views to create multiple reports, creation of maps & charts and also understand the process of report and column formatting.
Note: Price is per learner`],
      [57, "PCLH-CRED-EUF", "PCL Enhanced User Foundations", "Training: E-Learning", 13,
        `Build confidence and efficiency from day one! Gain the skills to navigate systems, manager user profiles, complete workflows, and troubleshoot with ease—everything you need to master the basics and work smarter.`],
      [57, "PCLH-CRED-RP-NCR", "Reports: New Custom Report", "Agency Service", 15,
        `Design and delivery of one new custom report based on your defined business requirements. Designed for organizations that need reporting beyond standard out-of-the-box capabilities. Includes requirements review, report configuration, and validation of outputs within an agreed level of complexity. After delivery, your team will have a tailored report that provides the specific insights needed to support decision-making.`],
      [58, "PCLH-CRED-TC-ECR", "Technical Config: Existing Connector Reconfiguration", "Implementation Service", 15,
        `Reconfiguration or adjustment of one existing integration connector to reflect updated requirements, field mappings, or data behavior. Designed for organizations with existing integrations that need updates due to changes in upstream or downstream systems. Includes review and reconfiguration within the scope of the existing connector. After delivery, your integration will continue to function reliably, aligned with current data and business requirements.
Note: this service does not include creation of new integrations or custom development.`],
      [58, "PCLH-CRED-SC-PCO", "System Config: Portal Content Optimization", "Implementation Service", 15,
        `Updates to portal-facing text, instructions, labels, and guidance to improve clarity and user experience. Designed for organizations looking to improve how constituents understand and navigate their public portal. Includes content refinement across targeted portal areas without changes to underlying workflows. After delivery, your constituents will have a clearer, more intuitive portal experience, reducing confusion and support requests.`],
      [58, "PCLT-CRED-EAA", "PCL Enterprise Admin Advanced: Take Control with Advanced Configuration", "Training: Instructor Led", 17,
        `Through this interactive instructor led training session, administrators learn freeforms, admin procedures and access, business rules, configuring document templates, using lookup tables, creating info rules to design hierarchy, tools module, page customization and custom reports.
Note: Price is per learner`],
      [58, "PCLH-CRED-AECP", "PCL Enhanced Admin Essentials: Confidently Manage Your Platform", "Training: Instructor Led", 17,
        `Through these three interactive instructor led training sessions, administrators learn user management, permissions & roles, jurisdictional modification, automation rules and triggers and custom workflows and templates.
Note: Price is per learner`],
      [58, "GXC-CRED-CR-SRM", "Custom Report: Service Request Management", "Agency Service", 20,
        `Power BI reports can be developed depending on customer´s requirements. The work is always scoped.`],
      [59, "PCLH-CRED-DS-TDCU", "Data Services: Targeted Data Cleanup", "Agency Service", 20,
        `Targeted cleanup of a single data element such as records, fields, or lookup values to improve data quality and usability. Designed for organizations dealing with inconsistencies, outdated information, or quality issues in specific data areas of their PCL-Enhanced system. Includes the development and execution of one script to address the defined data area. After delivery, your team will have cleaner, more reliable data in the targeted area, improving reporting accuracy and day-to-day usability.`],
      [59, "PCLH-CRED-SC-ACAS", "System Config: Account Audit - Small", "Implementation Service", 20,
        `A structured review of your PCL-Enhanced account configuration to assess setup, usage, and alignment with intended processes. Designed for organizations with 1 to 39 existing templates who want to evaluate their current configuration. The audit identifies gaps, risks, and improvement opportunities, with documented recommendations. After delivery, your team will have a clear, prioritized roadmap for optimizing your PCL-E configuration and reducing risk.`],
      [59, "PCLT-CRED-ULT", "PCL Enterprise UAT Lab: Test Scenarios Before Go-Live", "Training: Instructor Led", 22,
        `Through these interactive instructor led training labs, participants will gain hands-on experience in testing the scenarios within the admin Customization, People, Property, Folder, Process, Documents, Attachments and Fees modules.
Note: Price is per learner`],
      [59, "GXC-CRED-WRK-SRM", "Workflow: Service Request Management", "Agency Service", 25,
        `Up to four (4) hours of workflow optimization and one 30-minute discovery call to determine tailored training agenda.`],
      [59, "GXC-CRED-TT-SRM", "Technical Training: Service Request Management", "Training: Instructor Led", 25,
        `Custom training based on customer´s requirements (up to four hours). The training is always scoped.`],
      [59, "GXC-CRED-TR-SRM", "Training: Service Request Management", "Training: Instructor Led", 25,
        `Up to four (4) hours of virtual training and one 30-minute discovery call to determine tailored training agenda.`],
      [60, "PCLH-CRED-SC-ACAM", "System Config: Account Audit - Medium", "Implementation Service", 25,
        `A structured review of your PCL-Enhanced account configuration to assess setup, usage, and alignment with intended processes. Designed for organizations with 40 to 79 existing templates who want to evaluate their current configuration. The audit identifies gaps, risks, and improvement opportunities, with documented recommendations. After delivery, your team will have a clear, prioritized roadmap for optimizing your PCL-E configuration and reducing risk.`],
      [60, "PCLH-CRED-UFE", "PCL Enhanced User Foundations: Master the Essentials to be Productive", "Training: Instructor Led", 27,
        `Through this interactive instructor led training session, participants will receive an introduction to PCL Enhanced, a Public Portal overview, an overview of Exago and standard reports, Inspections, Mobile Application, Financial training and time for Q&A.
Note: Price is per learner`],
      [60, "PCLH-CRED-SC-ACAL", "System Config: Account Audit - Large", "Implementation Service", 30,
        `A structured review of your PCL-Enhanced account configuration to assess setup, usage, and alignment with intended processes. Designed for organizations with 80 to 119 existing templates who want to evaluate their current configuration. The audit identifies gaps, risks, and improvement opportunities, with documented recommendations. After delivery, your team will have a clear, prioritized roadmap for optimizing your PCL-E configuration and reducing risk.`],
      [60, "PCLH-CRED-SC-ACAXL", "System Config: Account Audit - X-Large", "Implementation Service", 35,
        `A structured review of your PCL-Enhanced account configuration to assess setup, usage, and alignment with intended processes. Designed for organizations with 120 or more existing templates who want to evaluate their current configuration. The audit identifies gaps, risks, and improvement opportunities, with documented recommendations. After delivery, your team will have a clear, prioritized roadmap for optimizing your PCL-E configuration and reducing risk.`],
      [60, "GXC-CRED-PR-SRM", "Platform Review: Service Request Management", "Agency Service", 50,
        `Implementation fee for standard integration (Cityworks, Accela, Amanda, Lucity Cartegraph, Avaya) over and above what their subscription includes (one standard integration if Essentials and two if Enterprise).`],
      [61, "GXC-CRED-SU-SRM", "Supplementary: Service Request", "Agency Service", 50,
        `Add a new request type into Service Request Management.`],
      [61, "GXC-CRED-DE-SRM", "Design: Service Request Management", "Agency Service", 100,
        `This service provides design time for customer custom requests (new workflows for example). Scoping Required.`],
      [61, "PCLH-CRED-CS-ESSCON", "Consulting Services: PCL Enterprise - Essentials Consulting", "Agency Service", 100,
        `Strategic advisory consulting focused on change management to help organizations define their PCL implementation approach. Designed for organizations preparing for a PCL implementation that need foundational guidance before delivery begins. Includes expert recommendations on implementation strategy, process optimization, and stakeholder alignment. After delivery, your organization will have a clearly defined implementation approach, optimized processes, and aligned stakeholders, setting the foundation for a successful PCL deployment.`],
      [61, "GXC-CRED-DM-SRM", "Data Migration: Service Request Management", "Agency Service", 120,
        `Scoping is required to define what could be migrated and how many years (requests, comments, attachments, etc.)`],
      [61, "PCLH-CRED-CS-ENHCON", "Consulting Services: PCL Enterprise - Enhanced Consulting", "Agency Service", 200,
        `Functional consulting that delivers end-to-end business process analysis and redesign in preparation for a PCL implementation. Designed for organizations that need a thorough assessment and redesign of their processes to ensure operational readiness. Includes requirements definition, process redesign, and solution planning. After delivery, your organization will have a clear, well-documented set of requirements and a solution plan, positioning your team for a successful PCL implementation and smooth operational transition.`],
      [62, "PCLH-CRED-CS-ADVCON", "Consulting Services: PCL Enterprise - Advanced Consulting", "Agency Service", 400,
        `Comprehensive consulting that combines strategic, functional, and technical expertise to design, configure, and support the implementation of PCL solutions. Designed for organizations requiring full-spectrum implementation support from planning through execution. Includes strategic guidance, functional design, technical configuration, and implementation support. After delivery, your organization will have a fully designed and configured PCL solution, supported end to end from planning through go-live.`],
      [62, "PCLT-CRED-EOI", "PCL Enterprise Onsite Instructor-Led Training", "Training: Instructor Led", null,
        `This interactive onsite instructor led training session is tailored content designed specifically for your organization’s unique workflows and goals.
Note: Price is per learner`],
      [62, "PCLH-CRED-CST", "PCL Enhanced Custom Virtual Instructor-Led Training", "Training: Instructor Led", null,
        `This interactive online instructor led training session is tailored content designed specifically for your organization’s unique workflows and goals.`],
      [62, "PCLH-CRED-EOI", "PCL Enhanced Onsite Instructor Led Training", "Training: Instructor Led", null,
        `This interactive onsite instructor led training session is tailored content designed specifically for your organization’s unique workflows and goals.`],
      [62, "PCLT-CRED-CST", "PCL Enterprise Custom Virtual Instructor-Led Training", "Training: Instructor Led", null,
        `This interactive online instructor led training session is tailored content designed specifically for your organization’s unique workflows and goals.
Note: Price is per learner`]
    ]
  }
};
