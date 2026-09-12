const PROJECT_BRIEFS = [
  {
    "ticketId": "DX-7512",
    "title": "Loop",
    "difficulty": "Beginner",
    "platform": "Mobile app (iOS/Android)",
    "industry": "Repair & sustainability",
    "overview": "Loop helps people find nearby repair cafes and volunteer fixers before they throw away a broken household item.",
    "problemToSolve": "People default to buying new because they don't know free repair help exists nearby.",
    "targetUsers": "Budget-conscious renters and homeowners who want to waste less but can't fix things themselves.",
    "keyScreens": [
      "Onboarding: pick the item types you need help with",
      "Snap a photo and describe the problem",
      "Nearby repair cafes list with next event date",
      "Booking confirmation with what to bring"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Design for comfortable one-handed use on a small screen"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Onboarding design",
      "Camera/upload flows",
      "Location-based lists",
      "Confirmation states"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-9308",
    "title": "Kinfolk",
    "difficulty": "Intermediate",
    "platform": "Web app",
    "industry": "Elder care coordination",
    "overview": "Kinfolk lets siblings and relatives share caregiving tasks for an aging parent without endless group texts.",
    "problemToSolve": "Caregiving duties fall unevenly on one family member because nobody has a shared view of what's needed.",
    "targetUsers": "Adult children coordinating care for a parent who lives independently but needs regular check-ins.",
    "keyScreens": [
      "Shared care calendar with assigned tasks",
      "Daily check-in log from whoever visited",
      "Medication and appointment tracker",
      "Family member roles and permissions"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Design for both desktop and tablet breakpoints"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Shared calendars",
      "Role-based permissions",
      "Status logging",
      "Family-friendly tone"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-6874",
    "title": "Ballot Clear",
    "difficulty": "Advanced",
    "platform": "Responsive website",
    "industry": "Civic tech / elections",
    "overview": "Ballot Clear turns a confusing local election ballot into a plain-language voter guide personalized to your address.",
    "problemToSolve": "Voters skip down-ballot races because candidate and measure information is scattered and dense.",
    "targetUsers": "First-time and infrequent voters researching local elections shortly before voting day.",
    "keyScreens": [
      "Address lookup to build a personalized ballot",
      "Race-by-race candidate comparison",
      "Ballot measure plain-language summary",
      "Printable or shareable voting plan"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Must hold up from a 360px phone screen to a 1440px desktop"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Complex comparison tables",
      "Plain-language content design",
      "Personalization by location",
      "Print/share states"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-7768",
    "title": "Tab",
    "difficulty": "Beginner",
    "platform": "Desktop app",
    "industry": "Freelance finance",
    "overview": "Tab is a simple invoicing tool for freelancers who want to send a professional invoice in under a minute.",
    "problemToSolve": "New freelancers waste time formatting invoices in spreadsheets or word documents.",
    "targetUsers": "Solo freelancers and contractors billing a handful of clients each month.",
    "keyScreens": [
      "Client list",
      "New invoice builder",
      "Invoice preview",
      "Sent invoices with paid/unpaid status"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Make good use of a larger screen and multi-pane layout without overwhelming it"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Form design",
      "Status indicators",
      "Document-style layouts",
      "Desktop information density"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-7892",
    "title": "Unsub",
    "difficulty": "Intermediate",
    "platform": "Browser extension",
    "industry": "Personal finance",
    "overview": "Unsub scans your inbox for recurring subscription charges and lets you cancel or flag them without leaving the page you're on.",
    "problemToSolve": "People keep paying for subscriptions they forgot about because canceling means hunting through settings pages.",
    "targetUsers": "Budget-conscious professionals who want to audit their subscriptions in one sitting.",
    "keyScreens": [
      "Popup summary of detected subscriptions",
      "Subscription detail with cost history",
      "Flag-for-cancellation confirmation",
      "Monthly spend overview"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Keep the popup or overlay lightweight and unobtrusive to the page underneath"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Compact popup layouts",
      "Data summarization",
      "Confirmation patterns",
      "Trust and privacy messaging"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-5192",
    "title": "Pulse Log",
    "difficulty": "Advanced",
    "platform": "Smartwatch app",
    "industry": "Chronic illness management",
    "overview": "Pulse Log lets people with a chronic condition log symptoms and vitals in seconds from their wrist and share trends with their doctor.",
    "problemToSolve": "Patients forget symptom details between appointments because logging on a phone feels like a chore.",
    "targetUsers": "People managing a chronic condition like a heart or autoimmune disorder, plus the clinicians they see.",
    "keyScreens": [
      "Quick symptom log via glanceable taps",
      "Vitals trend view over time",
      "Flare-up alert and guidance",
      "Exportable summary for a doctor visit"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Design for glanceable, few-second interactions on a small watch face"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Glanceable micro-interactions",
      "Trend visualization on small screens",
      "Alert design",
      "Data handoff to another format"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-4307",
    "title": "Wander",
    "difficulty": "Beginner",
    "platform": "Tablet app",
    "industry": "Museums & culture",
    "overview": "Wander is a self-guided museum tour app that shows nearby exhibits and short stories about each piece as visitors walk through.",
    "problemToSolve": "Visitors miss context on exhibits because reading small wall plaques is tiring and easy to skip.",
    "targetUsers": "Museum visitors who want a richer visit without booking a guided tour.",
    "keyScreens": [
      "Map of the current gallery floor",
      "Exhibit detail with short story and audio option",
      "Favorites list to revisit later",
      "End-of-visit summary"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Design for both landscape and portrait use, ideally with a two-pane layout"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Map-based navigation",
      "Rich media detail pages",
      "Favoriting patterns",
      "Tablet-scale typography"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-6744",
    "title": "TakeIt",
    "difficulty": "Intermediate",
    "platform": "Voice or conversational interface",
    "industry": "Health & medication",
    "overview": "TakeIt is a voice assistant skill that reminds people to take medication and lets them confirm or reschedule by speaking.",
    "problemToSolve": "Missed doses happen because push notifications get dismissed without action.",
    "targetUsers": "Older adults and caregivers managing a multi-medication daily schedule.",
    "keyScreens": [
      "Daily medication schedule voice summary",
      "Confirm-taken or snooze conversation",
      "Missed-dose follow-up conversation",
      "Weekly adherence recap"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Script the full conversation, not just visuals \u2014 include what it says and how it recovers from a misheard request"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Conversational flow scripting",
      "Error and misunderstanding recovery",
      "Recap/summary design",
      "Designing for older adults"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-6030",
    "title": "Shift",
    "difficulty": "Advanced",
    "platform": "Mobile app (iOS/Android)",
    "industry": "Gig economy",
    "overview": "Shift helps gig workers across several delivery and rideshare apps see all their upcoming shifts, earnings, and mileage in one place.",
    "problemToSolve": "Workers juggling multiple gig apps can't get a combined view of their schedule or true hourly earnings.",
    "targetUsers": "Multi-app gig workers trying to plan their week and track earnings for taxes.",
    "keyScreens": [
      "Combined calendar across connected apps",
      "Earnings breakdown by app and shift",
      "Mileage and expense log",
      "Weekly summary and tax-ready export"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Design for comfortable one-handed use on a small screen"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Data aggregation UI",
      "Financial dashboards",
      "Multi-source calendars",
      "Export/report design"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-3231",
    "title": "Chapter",
    "difficulty": "Beginner",
    "platform": "Web app",
    "industry": "Reading communities",
    "overview": "Chapter helps small book clubs pick their next read, vote on options, and keep track of discussion notes.",
    "problemToSolve": "Book clubs lose momentum because picking the next book and sharing notes happens over scattered messages.",
    "targetUsers": "Casual book clubs of 4-10 friends or coworkers.",
    "keyScreens": [
      "Current book and reading progress",
      "Nominate and vote on next book",
      "Discussion notes per chapter",
      "Member list and meeting schedule"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Design for both desktop and tablet breakpoints"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Voting UI",
      "Progress indicators",
      "Simple content structure",
      "Group-oriented design"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-4110",
    "title": "Market Day",
    "difficulty": "Intermediate",
    "platform": "Responsive website",
    "industry": "Local food systems",
    "overview": "Market Day helps shoppers find which farmers markets are open nearby today and what vendors are expected to show up.",
    "problemToSolve": "Shoppers skip farmers markets because hours and vendor lineups are inconsistent and hard to check in advance.",
    "targetUsers": "Home cooks who want fresh, local produce but don't have a market's schedule memorized.",
    "keyScreens": [
      "Map of markets open today",
      "Market detail with expected vendors",
      "Save a market as a favorite",
      "Vendor profile with typical offerings"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Must hold up from a 360px phone screen to a 1440px desktop"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Map and list hybrid views",
      "Time-sensitive content design",
      "Favoriting",
      "Responsive card layouts"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-5936",
    "title": "Ledger Lite",
    "difficulty": "Advanced",
    "platform": "Desktop app",
    "industry": "Small business operations",
    "overview": "Ledger Lite is bookkeeping software for small shop owners who need to track income, expenses, and simple reports without an accounting degree.",
    "problemToSolve": "Small business owners avoid bookkeeping software built for accountants because the jargon and density overwhelm them.",
    "targetUsers": "Independent shop and small studio owners doing their own books.",
    "keyScreens": [
      "Dashboard with income vs. expenses at a glance",
      "Transaction entry and categorization",
      "Simple profit and loss report",
      "Tax season export"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Make good use of a larger screen and multi-pane layout without overwhelming it"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Dashboard design",
      "Data entry efficiency",
      "Simplifying financial jargon",
      "Report generation"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-2663",
    "title": "Offline Hours",
    "difficulty": "Beginner",
    "platform": "Browser extension",
    "industry": "Family digital wellbeing",
    "overview": "Offline Hours is a browser extension that gently reminds a household when it's agreed screen-free time, based on shared family settings.",
    "problemToSolve": "Families set screen-time intentions together but forget them once everyone's browsing separately.",
    "targetUsers": "Parents and teens who've agreed on shared offline hours but need a gentle nudge.",
    "keyScreens": [
      "Setup: choose shared offline hours",
      "Gentle reminder banner near offline time",
      "Snooze or acknowledge the reminder",
      "Weekly family screen-time summary"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Keep the popup or overlay lightweight and unobtrusive to the page underneath"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Non-intrusive notification design",
      "Family-friendly tone",
      "Simple settings UI",
      "Summary visualization"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-3449",
    "title": "Steady",
    "difficulty": "Intermediate",
    "platform": "Smartwatch app",
    "industry": "Senior safety",
    "overview": "Steady detects falls and sudden inactivity in older adults and walks them through confirming they're okay or calling for help.",
    "problemToSolve": "Falls often go unnoticed until a check-in call much later, delaying help when it matters most.",
    "targetUsers": "Older adults living independently, and the family members who monitor their safety.",
    "keyScreens": [
      "Fall-detected confirmation screen",
      "Countdown before auto-alerting a contact",
      "Manual help request",
      "Family-side alert and status view"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Design for glanceable, few-second interactions on a small watch face"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "High-stakes confirmation flows",
      "Countdown/urgency UI",
      "Alert design",
      "Designing for shaky hands and low vision"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-6889",
    "title": "LearnPath",
    "difficulty": "Advanced",
    "platform": "Tablet app",
    "industry": "Inclusive education",
    "overview": "LearnPath is a tablet-based learning tool for classrooms with students who have a range of learning needs, adapting pacing and format per student.",
    "problemToSolve": "One-size-fits-all classroom apps leave some students behind and under-challenge others.",
    "targetUsers": "K-8 teachers and students with varying learning needs, including those using assistive technology.",
    "keyScreens": [
      "Teacher view: class overview with per-student pacing",
      "Student view: adaptive lesson with format choices",
      "Progress check-in with alternate response modes",
      "Parent/guardian progress summary"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Design for both landscape and portrait use, ideally with a two-pane layout"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Adaptive UI patterns",
      "Assistive technology support",
      "Dual audience design (teacher/student)",
      "Progress visualization"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-2477",
    "title": "Sous",
    "difficulty": "Beginner",
    "platform": "Voice or conversational interface",
    "industry": "Home cooking",
    "overview": "Sous reads a recipe aloud step by step and answers simple questions like 'how much salt' without the cook touching a screen.",
    "problemToSolve": "Cooks with messy hands lose their place in a recipe when they have to keep touching their phone.",
    "targetUsers": "Home cooks following a recipe while actively cooking.",
    "keyScreens": [
      "Recipe intro and ingredient list read-aloud",
      "Step-by-step cooking conversation",
      "Mid-step question handling",
      "Step repeat and 'what's next' commands"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Script the full conversation, not just visuals \u2014 include what it says and how it recovers from a misheard request"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Voice-first content structuring",
      "Interruption handling",
      "Hands-free interaction design",
      "Clear step sequencing"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-1013",
    "title": "Spoke",
    "difficulty": "Intermediate",
    "platform": "Mobile app (iOS/Android)",
    "industry": "Urban mobility",
    "overview": "Spoke helps commuters find, reserve, and unlock shared bikes across multiple city bike-share networks from one app.",
    "problemToSolve": "Commuters give up on bike-share because checking multiple apps for availability wastes time.",
    "targetUsers": "City commuters choosing between transit options for a short trip.",
    "keyScreens": [
      "Nearby bikes across networks map",
      "Reserve and unlock flow",
      "Trip in-progress screen with route",
      "Trip summary and receipt"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Design for comfortable one-handed use on a small screen"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Map-based discovery",
      "Cross-provider aggregation",
      "Live trip states",
      "Receipt/summary design"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-7982",
    "title": "Response Board",
    "difficulty": "Advanced",
    "platform": "Web app",
    "industry": "Disaster response",
    "overview": "Response Board coordinates volunteers, supply drop-offs, and shelter capacity during a local disaster response effort.",
    "problemToSolve": "Volunteer disaster response often turns chaotic because supply needs and shelter status change hour to hour with no shared source of truth.",
    "targetUsers": "Volunteer coordinators, shelter staff, and community volunteers during an active response.",
    "keyScreens": [
      "Live shelter capacity dashboard",
      "Supply needs board with claim/fulfill actions",
      "Volunteer shift sign-up",
      "Incident-wide status overview for coordinators"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Design for both desktop and tablet breakpoints"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Real-time dashboard design",
      "Multi-role permissions",
      "Crisis-appropriate tone and clarity",
      "Status and capacity visualization"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-1082",
    "title": "Handmade Row",
    "difficulty": "Beginner",
    "platform": "Responsive website",
    "industry": "Local artisans",
    "overview": "Handmade Row is a directory site where local makers list their handmade goods and shoppers can browse by neighborhood.",
    "problemToSolve": "Local makers without their own website have no easy way to be discovered by nearby shoppers.",
    "targetUsers": "Shoppers looking for local, handmade gifts and the makers who sell them.",
    "keyScreens": [
      "Browse makers by neighborhood",
      "Maker profile with photos and story",
      "Item listing with contact-to-buy",
      "Search and filter by category"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Must hold up from a 360px phone screen to a 1440px desktop"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Directory browsing patterns",
      "Profile/portfolio layouts",
      "Filter design",
      "Simple contact flows"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-5437",
    "title": "Hourglass",
    "difficulty": "Intermediate",
    "platform": "Desktop app",
    "industry": "Freelance productivity",
    "overview": "Hourglass is a time-tracking app for freelancers that turns tracked hours directly into an invoice-ready report per client.",
    "problemToSolve": "Freelancers under-bill because manually converting tracked time into invoices is tedious enough to skip.",
    "targetUsers": "Freelancers billing multiple clients by the hour.",
    "keyScreens": [
      "Active timer with project/client tagging",
      "Weekly timesheet view",
      "Client billing summary",
      "Export to invoice"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Make good use of a larger screen and multi-pane layout without overwhelming it"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Timer UI patterns",
      "Timesheet visualization",
      "Client-based grouping",
      "Export flows"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-8561",
    "title": "ContrastCheck",
    "difficulty": "Advanced",
    "platform": "Browser extension",
    "industry": "Web accessibility",
    "overview": "ContrastCheck lets developers and designers scan any live webpage for color contrast and focus-order issues without opening dev tools.",
    "problemToSolve": "Accessibility issues often ship because checking contrast and focus order manually is slow and easy to skip under deadline.",
    "targetUsers": "Frontend developers and designers doing accessibility QA before launch.",
    "keyScreens": [
      "Full-page contrast scan results",
      "Issue detail with element highlight",
      "Focus-order walkthrough overlay",
      "Exportable accessibility report"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Keep the popup or overlay lightweight and unobtrusive to the page underneath"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Diagnostic tool UI",
      "Overlay/highlight interactions",
      "Report generation",
      "Deep accessibility knowledge"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-3412",
    "title": "Sip",
    "difficulty": "Beginner",
    "platform": "Smartwatch app",
    "industry": "Personal wellness",
    "overview": "Sip gives gentle wrist taps and a quick log button to help people build a consistent water-drinking habit through the day.",
    "problemToSolve": "People forget to drink enough water because there's no lightweight, low-effort way to track it.",
    "targetUsers": "Anyone trying to build a simple hydration habit.",
    "keyScreens": [
      "Daily hydration progress ring",
      "One-tap log a drink",
      "Gentle reminder tap",
      "Weekly habit streak view"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Design for glanceable, few-second interactions on a small watch face"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Progress rings",
      "One-tap interactions",
      "Reminder pacing",
      "Streak/habit visualization"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-9758",
    "title": "Bistro Tab",
    "difficulty": "Intermediate",
    "platform": "Tablet app",
    "industry": "Restaurant tech",
    "overview": "Bistro Tab is a tableside ordering tablet that lets diners browse the menu, customize dishes, and send orders straight to the kitchen.",
    "problemToSolve": "Wait times to order and pay slow down table turnover, especially during peak hours.",
    "targetUsers": "Restaurant diners and the servers who still need to assist with recommendations.",
    "keyScreens": [
      "Menu browse with photos and dietary filters",
      "Item customization screen",
      "Cart and send-to-kitchen confirmation",
      "Split-bill and pay screen"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Design for both landscape and portrait use, ideally with a two-pane layout"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Menu browsing UX",
      "Customization flows",
      "Order confirmation states",
      "Payment/split-bill design"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-5489",
    "title": "MedSpeak",
    "difficulty": "Advanced",
    "platform": "Voice or conversational interface",
    "industry": "Healthcare access",
    "overview": "MedSpeak is a hospital kiosk conversation flow that helps patients who speak a different language check in and understand basic instructions before seeing staff.",
    "problemToSolve": "Language barriers at check-in delay care and increase patient anxiety in hospital settings.",
    "targetUsers": "Non-English-speaking patients and the front-desk staff supporting them.",
    "keyScreens": [
      "Language selection conversation opener",
      "Check-in information gathering dialogue",
      "Wait-time and next-steps explanation",
      "Staff-side conversation transcript view"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Script the full conversation, not just visuals \u2014 include what it says and how it recovers from a misheard request"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Multilingual conversation design",
      "High-stress-context UX",
      "Dual audience design (patient/staff)",
      "Trust-building dialogue tone"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-5259",
    "title": "Fosterly",
    "difficulty": "Beginner",
    "platform": "Mobile app (iOS/Android)",
    "industry": "Pet adoption",
    "overview": "Fosterly helps local shelters list foster and adoption pets with simple profiles that make it easy to find a match.",
    "problemToSolve": "Shelter pets get overlooked because listings across sites are inconsistent and hard to browse.",
    "targetUsers": "People looking to foster or adopt a pet from a local shelter.",
    "keyScreens": [
      "Browse pets with photo and short profile",
      "Pet detail with care needs",
      "Apply-to-foster or adopt form",
      "Application status tracker"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Design for comfortable one-handed use on a small screen"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Card-based browsing",
      "Profile detail pages",
      "Form design",
      "Status tracking"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-8020",
    "title": "Plot",
    "difficulty": "Intermediate",
    "platform": "Web app",
    "industry": "Community gardening",
    "overview": "Plot lets community garden members reserve plots, log what they've planted, and coordinate shared watering schedules.",
    "problemToSolve": "Community gardens run into conflict when plot ownership and watering duties aren't tracked anywhere.",
    "targetUsers": "Members of a shared community garden and the volunteer coordinators who manage it.",
    "keyScreens": [
      "Garden map with plot availability",
      "Plot detail with planting log",
      "Watering schedule sign-up",
      "Coordinator view of overall garden status"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Design for both desktop and tablet breakpoints"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Map-based reservation UI",
      "Logging interfaces",
      "Schedule coordination",
      "Admin/coordinator views"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-5272",
    "title": "ClaimClear",
    "difficulty": "Advanced",
    "platform": "Responsive website",
    "industry": "Insurance",
    "overview": "ClaimClear guides policyholders through filing and tracking an insurance claim with plain-language status updates at every step.",
    "problemToSolve": "Claimants feel lost and anxious because claim status is usually communicated through jargon-filled letters or vague call center updates.",
    "targetUsers": "Policyholders filing a home, auto, or health claim, often during a stressful time.",
    "keyScreens": [
      "Guided claim filing wizard",
      "Document upload with clear requirements",
      "Real-time claim status tracker",
      "Plain-language explanation of each status"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Must hold up from a 360px phone screen to a 1440px desktop"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Multi-step wizards",
      "Document upload UX",
      "Status tracking design",
      "Plain-language content for stressful contexts"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-8837",
    "title": "Coinly",
    "difficulty": "Beginner",
    "platform": "Desktop app",
    "industry": "Student finance",
    "overview": "Coinly is a simple budgeting app for students that turns their monthly allowance or part-time income into an easy spending plan.",
    "problemToSolve": "Students overspend early in the month because they don't have a simple way to see what's left to spend.",
    "targetUsers": "College students managing a limited monthly budget for the first time.",
    "keyScreens": [
      "Monthly budget setup by category",
      "Spending log with quick entry",
      "Remaining budget at a glance",
      "End-of-month summary"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Make good use of a larger screen and multi-pane layout without overwhelming it"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Beginner-friendly budgeting UI",
      "Quick entry forms",
      "At-a-glance summaries",
      "Encouraging, non-judgmental tone"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-5246",
    "title": "Applywise",
    "difficulty": "Intermediate",
    "platform": "Browser extension",
    "industry": "Job search",
    "overview": "Applywise tracks every job application you submit online, automatically capturing the role, company, and status as you browse job boards.",
    "problemToSolve": "Job seekers lose track of where they've applied when searching across many different job boards.",
    "targetUsers": "Active job seekers applying to multiple roles across several sites.",
    "keyScreens": [
      "Auto-captured application list",
      "Application detail with notes and status",
      "Reminder to follow up",
      "Overview dashboard by status"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Keep the popup or overlay lightweight and unobtrusive to the page underneath"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Auto-capture UX",
      "Status-based organization",
      "Reminder design",
      "Dashboard summarization"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-2616",
    "title": "Vital Watch",
    "difficulty": "Advanced",
    "platform": "Smartwatch app",
    "industry": "First responder wellness",
    "overview": "Vital Watch monitors stress indicators in first responders during and after high-intensity calls and prompts brief recovery check-ins.",
    "problemToSolve": "First responders rarely get structured support to process stress spikes from back-to-back high-intensity calls.",
    "targetUsers": "Firefighters, paramedics, and police officers, plus the wellness teams supporting them.",
    "keyScreens": [
      "Live stress indicator glance view",
      "Post-call recovery check-in prompt",
      "Guided breathing or grounding exercise",
      "Weekly wellness trend for the responder and their team lead"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Design for glanceable, few-second interactions on a small watch face"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Sensitive-context UX",
      "Glanceable data on a small face",
      "Guided exercise flows",
      "Trend reporting for two audiences"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-7831",
    "title": "Storynook",
    "difficulty": "Beginner",
    "platform": "Tablet app",
    "industry": "Children's media",
    "overview": "Storynook is a tablet library of bedtime stories with simple narration controls that kids can operate themselves.",
    "problemToSolve": "Bedtime stress increases when kids can't independently pick or control a story without a parent's help.",
    "targetUsers": "Children ages 4-8 picking and playing their own bedtime stories.",
    "keyScreens": [
      "Big-icon story shelf",
      "Story playback with pause/repeat controls",
      "Favorites shelf",
      "Parent settings for screen time limits"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Design for both landscape and portrait use, ideally with a two-pane layout"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Designing for young children",
      "Large touch-target UI",
      "Playback controls",
      "Parental control screens"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-4188",
    "title": "Pantry Voice",
    "difficulty": "Intermediate",
    "platform": "Voice or conversational interface",
    "industry": "Home cooking",
    "overview": "Pantry Voice lets you build a grocery list by speaking naturally while cooking, checking what you're low on against a saved pantry list.",
    "problemToSolve": "People run out of staples because building a grocery list means stopping to type while their hands are busy cooking.",
    "targetUsers": "Home cooks who want a hands-free way to manage groceries while in the kitchen.",
    "keyScreens": [
      "Add-to-list conversational flow",
      "Pantry-check conversation ('do I have...')",
      "List review and edit by voice",
      "Send finished list to phone"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Script the full conversation, not just visuals \u2014 include what it says and how it recovers from a misheard request"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Natural language list-building",
      "Confirmation and correction dialogue",
      "Cross-device handoff",
      "Pantry-state tracking"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-2481",
    "title": "Carpool Rural",
    "difficulty": "Advanced",
    "platform": "Mobile app (iOS/Android)",
    "industry": "Rural transportation",
    "overview": "Carpool Rural matches neighbors in low-density areas for shared trips to town, where regular rideshare and transit don't reach.",
    "problemToSolve": "People in rural areas without cars have far fewer transportation options, and existing rideshare apps don't serve sparse routes well.",
    "targetUsers": "Rural residents without reliable transportation and neighbors willing to share a ride.",
    "keyScreens": [
      "Trip request with flexible pickup radius",
      "Matched-ride offer and acceptance",
      "In-progress ride status without live GPS reliance",
      "Trust-building profile and ride history"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Design for comfortable one-handed use on a small screen"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Designing for low-connectivity areas",
      "Matching/negotiation flows",
      "Trust and safety design",
      "Flexible geography UI"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-7257",
    "title": "Aisle",
    "difficulty": "Beginner",
    "platform": "Web app",
    "industry": "Event planning",
    "overview": "Aisle is a shared checklist and budget tracker for couples planning a wedding together.",
    "problemToSolve": "Wedding planning gets stressful when tasks and budget details live across spreadsheets, notes apps, and texts.",
    "targetUsers": "Engaged couples planning a wedding together, often with different levels of involvement.",
    "keyScreens": [
      "Shared checklist by category",
      "Budget tracker with running total",
      "Vendor contact list",
      "Timeline countdown to the big day"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Design for both desktop and tablet breakpoints"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Shared checklist UI",
      "Budget visualization",
      "Contact list design",
      "Countdown/timeline patterns"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-4989",
    "title": "Stacks",
    "difficulty": "Intermediate",
    "platform": "Responsive website",
    "industry": "Public libraries",
    "overview": "Stacks lets library patrons browse upcoming events and reserve study rooms directly from the library's website.",
    "problemToSolve": "Patrons miss out on library events and rooms because booking currently requires a phone call or in-person visit.",
    "targetUsers": "Library patrons of all ages, plus library staff managing room and event capacity.",
    "keyScreens": [
      "Event calendar with RSVP",
      "Study room availability grid",
      "Room booking confirmation",
      "My upcoming bookings page"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Must hold up from a 360px phone screen to a 1440px desktop"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Calendar UI",
      "Availability grid design",
      "Booking confirmation flows",
      "Personal dashboard design"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-1938",
    "title": "PalletTrack",
    "difficulty": "Advanced",
    "platform": "Desktop app",
    "industry": "Logistics",
    "overview": "PalletTrack helps warehouse staff track inventory pallets from receiving through shipping with barcode scanning and location mapping.",
    "problemToSolve": "Warehouses lose time searching for misplaced pallets because location tracking lives in people's memory rather than a system.",
    "targetUsers": "Warehouse floor staff and the operations managers overseeing inventory accuracy.",
    "keyScreens": [
      "Scan-in receiving flow",
      "Warehouse map with pallet locations",
      "Pick-and-move workflow",
      "Manager dashboard with discrepancy alerts"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Make good use of a larger screen and multi-pane layout without overwhelming it"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Scan-based workflows",
      "Spatial/map-based UI",
      "Task-oriented flows for floor staff",
      "Exception/alert design"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-5814",
    "title": "Bookmarked",
    "difficulty": "Beginner",
    "platform": "Browser extension",
    "industry": "Reading habits",
    "overview": "Bookmarked tracks how long you spend reading saved articles and nudges you to actually finish what you've saved.",
    "problemToSolve": "Saved articles pile up unread because there's no visibility into what's been saved versus actually read.",
    "targetUsers": "People who save articles to read later but rarely go back to them.",
    "keyScreens": [
      "Saved articles list with read progress",
      "Reading session view",
      "Weekly reading summary",
      "Gentle nudge for oldest unread items"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Keep the popup or overlay lightweight and unobtrusive to the page underneath"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Progress indicators",
      "List management UI",
      "Summary visualization",
      "Gentle nudge patterns"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-4408",
    "title": "Exhale",
    "difficulty": "Intermediate",
    "platform": "Smartwatch app",
    "industry": "Mental health",
    "overview": "Exhale offers a short guided breathing exercise the moment it detects signs of rising stress from heart rate patterns.",
    "problemToSolve": "People often don't notice they're stressed until it's already affecting their day, missing the best moment to intervene.",
    "targetUsers": "Anyone wanting lightweight, in-the-moment stress support.",
    "keyScreens": [
      "Stress-detected prompt",
      "Guided breathing exercise with haptic pacing",
      "Post-exercise check-in",
      "Weekly stress pattern summary"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Design for glanceable, few-second interactions on a small watch face"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Haptic-paced interactions",
      "Calm, low-stimulation visual design",
      "Prompt timing and tone",
      "Trend summaries on small screens"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-3056",
    "title": "CheckPoint",
    "difficulty": "Advanced",
    "platform": "Tablet app",
    "industry": "K-12 education",
    "overview": "CheckPoint gives teachers a real-time view of how the whole class is doing on an in-progress assignment, highlighting who needs help right now.",
    "problemToSolve": "Teachers can't tell who's struggling mid-assignment until it's already graded, losing the chance to help in the moment.",
    "targetUsers": "K-12 teachers running in-class independent work, and the students completing it.",
    "keyScreens": [
      "Class-wide live progress grid",
      "Individual student drill-down",
      "Flag-for-help alert to teacher",
      "End-of-class formative summary"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Design for both landscape and portrait use, ideally with a two-pane layout"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Real-time dashboard design",
      "Drill-down navigation",
      "Alert/flagging UX",
      "Dual audience design (teacher/student)"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-7330",
    "title": "Nightlight",
    "difficulty": "Beginner",
    "platform": "Voice or conversational interface",
    "industry": "Family routines",
    "overview": "Nightlight walks kids through a simple spoken bedtime routine checklist, like brushing teeth and picking pajamas.",
    "problemToSolve": "Bedtime routines fall apart because young kids need constant reminders parents don't always have the energy to give.",
    "targetUsers": "Children ages 3-7 going through a bedtime routine, with parent oversight.",
    "keyScreens": [
      "Routine start greeting",
      "Step-by-step checklist conversation",
      "Encouragement after each completed step",
      "Parent recap of the completed routine"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Script the full conversation, not just visuals \u2014 include what it says and how it recovers from a misheard request"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Designing for young children's speech",
      "Sequential checklist dialogue",
      "Positive reinforcement tone",
      "Parent-facing recap"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-8353",
    "title": "Tandem Local",
    "difficulty": "Intermediate",
    "platform": "Mobile app (iOS/Android)",
    "industry": "Language learning",
    "overview": "Tandem Local matches people who want to practice a language with nearby native speakers for real in-person meetups.",
    "problemToSolve": "Language learners plateau with apps alone because they rarely get real conversation practice with native speakers.",
    "targetUsers": "Language learners and native speakers open to casual conversation exchange meetups.",
    "keyScreens": [
      "Language and availability matching setup",
      "Nearby match browsing",
      "Meetup proposal and scheduling",
      "Post-meetup rating and notes"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Design for comfortable one-handed use on a small screen"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Matching flows",
      "Scheduling UI",
      "Location-based discovery",
      "Trust/rating design"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-7240",
    "title": "Grantwell",
    "difficulty": "Advanced",
    "platform": "Web app",
    "industry": "Nonprofit operations",
    "overview": "Grantwell helps small nonprofits track multiple grant applications, deadlines, and reporting requirements in one shared workspace.",
    "problemToSolve": "Small nonprofits miss grant deadlines and reporting requirements because tracking lives across one overworked staffer's inbox.",
    "targetUsers": "Nonprofit program managers and the small teams applying for and managing grants.",
    "keyScreens": [
      "Grant pipeline board by stage",
      "Grant detail with deadlines and requirements",
      "Reporting checklist per awarded grant",
      "Team-wide deadline calendar"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Design for both desktop and tablet breakpoints"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Pipeline/kanban design",
      "Deadline-critical UI",
      "Checklist patterns",
      "Team collaboration views"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-5820",
    "title": "Pawstep",
    "difficulty": "Beginner",
    "platform": "Responsive website",
    "industry": "Pet services",
    "overview": "Pawstep lets dog owners find and book a trusted local dog walker for a specific day and time.",
    "problemToSolve": "Dog owners struggle to find reliable, available walkers without asking around their neighborhood every time.",
    "targetUsers": "Busy dog owners who need occasional or regular dog-walking help.",
    "keyScreens": [
      "Browse walkers with ratings and rates",
      "Walker profile with availability",
      "Book a walk with time and instructions",
      "Booking confirmation and receipt"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Must hold up from a 360px phone screen to a 1440px desktop"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Profile/listing pages",
      "Availability and booking UI",
      "Trust signals (ratings/reviews)",
      "Confirmation states"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-8823",
    "title": "Frameset",
    "difficulty": "Intermediate",
    "platform": "Desktop app",
    "industry": "Creative freelancing",
    "overview": "Frameset lets photographers deliver a private, downloadable gallery to clients and collect their favorite picks in one place.",
    "problemToSolve": "Photographers waste time managing client photo selections over email threads and shared drive links.",
    "targetUsers": "Freelance and small-studio photographers delivering finished shoots to clients.",
    "keyScreens": [
      "Gallery upload and organization",
      "Client-facing gallery view with favoriting",
      "Client selection summary for the photographer",
      "Download and delivery settings"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Make good use of a larger screen and multi-pane layout without overwhelming it"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Gallery/grid layouts",
      "Dual-sided flows (photographer/client)",
      "Selection and favoriting UI",
      "Delivery/export settings"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-2841",
    "title": "Was It Ever",
    "difficulty": "Advanced",
    "platform": "Browser extension",
    "industry": "Consumer protection",
    "overview": "Was It Ever shows a product's real price history right on the shopping page, flagging fake 'sale' discounts.",
    "problemToSolve": "Shoppers get misled by inflated 'original prices' that make discounts look bigger than they really are.",
    "targetUsers": "Online shoppers trying to tell a genuine deal from a marked-up 'discount.'",
    "keyScreens": [
      "Inline price-history overlay on product pages",
      "Full price history chart",
      "Fake-discount flag and explanation",
      "Price-drop alert setup"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Keep the popup or overlay lightweight and unobtrusive to the page underneath"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Inline overlay design",
      "Chart/history visualization",
      "Trust and transparency messaging",
      "Alert setup flows"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-7451",
    "title": "Upright",
    "difficulty": "Beginner",
    "platform": "Smartwatch app",
    "industry": "Ergonomics",
    "overview": "Upright taps your wrist when it detects you've been slouching at a desk for too long and suggests a quick posture reset.",
    "problemToSolve": "Desk workers develop posture-related pain because they don't notice slouching until it already hurts.",
    "targetUsers": "Remote and office workers who sit at a desk most of the day.",
    "keyScreens": [
      "Posture status glance",
      "Slouch-detected reminder tap",
      "Guided posture reset",
      "Daily posture summary"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Design for glanceable, few-second interactions on a small watch face"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Ambient/glanceable UI",
      "Reminder pacing and tone",
      "Guided exercise micro-flows",
      "Daily summary design"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-7523",
    "title": "Chairside",
    "difficulty": "Intermediate",
    "platform": "Tablet app",
    "industry": "Beauty & salons",
    "overview": "Chairside lets salon clients browse a stylist's portfolio, book an appointment, and build a style mood board together in-chair.",
    "problemToSolve": "Clients and stylists struggle to communicate the exact look a client wants before a service begins.",
    "targetUsers": "Salon clients booking a service and the stylists consulting with them.",
    "keyScreens": [
      "Stylist portfolio browse",
      "Appointment booking with service selection",
      "In-chair style mood board builder",
      "Booking confirmation and reminders"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Design for both landscape and portrait use, ideally with a two-pane layout"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Portfolio/gallery UX",
      "Booking flows",
      "Collaborative mood-board UI",
      "Confirmation and reminder design"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-5225",
    "title": "FieldLog",
    "difficulty": "Advanced",
    "platform": "Voice or conversational interface",
    "industry": "Agriculture",
    "overview": "FieldLog lets farmers log equipment maintenance and issues by voice while out in the field with dirty or gloved hands.",
    "problemToSolve": "Equipment maintenance records go untracked because farmers can't stop to type notes while working in the field.",
    "targetUsers": "Farmers and the mechanics or co-op staff who service their equipment.",
    "keyScreens": [
      "Voice-logged maintenance entry",
      "Equipment history conversational lookup",
      "Issue-reported follow-up conversation",
      "Weekly maintenance summary for the co-op"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Script the full conversation, not just visuals \u2014 include what it says and how it recovers from a misheard request"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Hands-free field-condition design",
      "Structured voice logging",
      "History lookup dialogue",
      "Summary reporting for a second audience"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-9059",
    "title": "Sprout",
    "difficulty": "Beginner",
    "platform": "Mobile app (iOS/Android)",
    "industry": "Home & garden",
    "overview": "Sprout reminds houseplant owners when to water, feed, and rotate each plant based on its specific care needs.",
    "problemToSolve": "Houseplants die because generic watering schedules don't match what each specific plant actually needs.",
    "targetUsers": "New and casual houseplant owners building their plant care routine.",
    "keyScreens": [
      "Add-a-plant with care profile",
      "Home screen with today's care tasks",
      "Mark task complete with a photo",
      "Plant detail with care history"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Design for comfortable one-handed use on a small screen"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Onboarding/setup flows",
      "Task-list UI",
      "Photo logging",
      "Detail/history pages"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-9923",
    "title": "TwoHomes",
    "difficulty": "Intermediate",
    "platform": "Web app",
    "industry": "Co-parenting",
    "overview": "TwoHomes helps separated parents coordinate a shared custody calendar, expenses, and messages in one neutral space.",
    "problemToSolve": "Co-parenting logistics break down when scheduling and expense-splitting happen over contentious text threads.",
    "targetUsers": "Separated or divorced parents sharing custody of children.",
    "keyScreens": [
      "Shared custody calendar",
      "Expense log with split tracking",
      "Neutral messaging thread",
      "Handoff checklist per exchange"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Design for both desktop and tablet breakpoints"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Neutral, low-conflict tone design",
      "Calendar coordination UI",
      "Expense-splitting visualization",
      "Checklist patterns"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-1006",
    "title": "TransitAccess",
    "difficulty": "Advanced",
    "platform": "Responsive website",
    "industry": "Transit accessibility",
    "overview": "TransitAccess crowdsources and displays real accessibility conditions at transit stops, like broken elevators, from riders who use them.",
    "problemToSolve": "Riders with mobility needs get stranded because official accessibility status often doesn't reflect real, current conditions.",
    "targetUsers": "Transit riders who use wheelchairs, strollers, or other mobility aids, and transit agency staff.",
    "keyScreens": [
      "Station map with live accessibility status",
      "Report-an-issue flow from riders",
      "Issue detail and agency response status",
      "Trip planner that avoids inaccessible stops"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Must hold up from a 360px phone screen to a 1440px desktop"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Crowdsourced data UI",
      "Reporting flows",
      "Trust/verification design",
      "Accessible trip planning"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-3034",
    "title": "Recipe Box",
    "difficulty": "Beginner",
    "platform": "Desktop app",
    "industry": "Home cooking",
    "overview": "Recipe Box lets home cooks save recipes from anywhere on the web into one clean, ad-free personal collection.",
    "problemToSolve": "Home cooks lose track of recipes scattered across bookmarks, screenshots, and cluttered recipe sites.",
    "targetUsers": "Home cooks who collect recipes from many different sources.",
    "keyScreens": [
      "Save-a-recipe flow with clean formatting",
      "Personal recipe collection grid",
      "Recipe detail with adjustable servings",
      "Search and tag filtering"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Make good use of a larger screen and multi-pane layout without overwhelming it"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Clean content formatting",
      "Collection/grid browsing",
      "Detail page design",
      "Search and filter UI"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-9818",
    "title": "Threadline",
    "difficulty": "Intermediate",
    "platform": "Browser extension",
    "industry": "Student productivity",
    "overview": "Threadline organizes open research tabs into labeled threads by topic so students don't lose their place mid-research.",
    "problemToSolve": "Students lose their research train of thought when dozens of open tabs blur together with no structure.",
    "targetUsers": "College students doing paper or project research across many sources.",
    "keyScreens": [
      "Tab-to-thread organization panel",
      "Thread detail with notes per source",
      "Resume-a-thread later",
      "Export thread as a source list"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Keep the popup or overlay lightweight and unobtrusive to the page underneath"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Organizational/grouping UI",
      "Note-taking patterns",
      "Resume/continuity design",
      "Export flows"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-8612",
    "title": "Pacer Pro",
    "difficulty": "Advanced",
    "platform": "Smartwatch app",
    "industry": "Endurance sports",
    "overview": "Pacer Pro gives marathon runners live pacing guidance and recovery recommendations based on real-time effort, not just pace.",
    "problemToSolve": "Runners blow their race pace early because raw speed numbers don't reflect how hard their body is actually working.",
    "targetUsers": "Serious recreational and competitive marathon runners in training and on race day.",
    "keyScreens": [
      "Live pacing guidance during a run",
      "Effort-vs-pace comparison view",
      "Post-run recovery recommendation",
      "Training block trend overview"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Design for glanceable, few-second interactions on a small watch face"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Real-time athletic data UI",
      "Comparative data visualization",
      "Recommendation design",
      "Long-term trend views"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-6331",
    "title": "Doodleway",
    "difficulty": "Beginner",
    "platform": "Tablet app",
    "industry": "Children's creativity",
    "overview": "Doodleway is a simple drawing and coloring app for young kids with big, forgiving touch tools.",
    "problemToSolve": "Young kids get frustrated with drawing apps built for adults, with tiny controls and complex tool sets.",
    "targetUsers": "Children ages 3-8 drawing and coloring independently.",
    "keyScreens": [
      "Blank canvas with big tool palette",
      "Coloring templates gallery",
      "Save and view my drawings",
      "Simple sharing to a parent's device"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Design for both landscape and portrait use, ideally with a two-pane layout"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Designing for young children",
      "Large touch-target tool design",
      "Gallery/collection UI",
      "Simple sharing flows"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-2234",
    "title": "Ring Round",
    "difficulty": "Intermediate",
    "platform": "Voice or conversational interface",
    "industry": "Senior companionship",
    "overview": "Ring Round places a friendly daily check-in call to an older adult living alone and alerts a family member if something seems off.",
    "problemToSolve": "Isolated older adults can go a full day without any contact, and family can't always call every day themselves.",
    "targetUsers": "Older adults living alone and the family members who worry about them.",
    "keyScreens": [
      "Daily friendly check-in conversation",
      "Wellness question sequence",
      "Concern-detected escalation conversation",
      "Family-side daily status summary"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Script the full conversation, not just visuals \u2014 include what it says and how it recovers from a misheard request"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Warm, unscripted-feeling dialogue design",
      "Escalation logic and tone",
      "Dual audience design (senior/family)",
      "Daily summary reporting"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-9773",
    "title": "Lendit",
    "difficulty": "Advanced",
    "platform": "Mobile app (iOS/Android)",
    "industry": "Sharing economy",
    "overview": "Lendit lets neighbors lend and borrow tools and equipment instead of everyone buying their own for occasional use.",
    "problemToSolve": "People buy rarely-used tools because there's no easy, trustworthy way to borrow from a neighbor who already owns one.",
    "targetUsers": "Neighbors willing to lend occasional-use items, and those looking to borrow instead of buy.",
    "keyScreens": [
      "Nearby available items browse",
      "Item detail with borrow request",
      "Borrow agreement and pickup scheduling",
      "Return confirmation and rating"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Design for comfortable one-handed use on a small screen"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Marketplace browsing",
      "Request/negotiation flows",
      "Trust and rating design",
      "Scheduling and handoff UI"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-1215",
    "title": "Nearby Nights",
    "difficulty": "Beginner",
    "platform": "Web app",
    "industry": "Local discovery",
    "overview": "Nearby Nights shows a simple weekly list of low-key local events happening within walking distance.",
    "problemToSolve": "People stay in more than they'd like because finding out what's happening nearby takes too much digging.",
    "targetUsers": "People looking for easy, casual things to do near home on a given night.",
    "keyScreens": [
      "This week's nearby events list",
      "Event detail with time and location",
      "Save an event to my week",
      "Simple map view of events"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Design for both desktop and tablet breakpoints"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "List/feed design",
      "Detail page layout",
      "Saving/bookmarking UI",
      "Lightweight map integration"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-1299",
    "title": "Fundmatch",
    "difficulty": "Intermediate",
    "platform": "Responsive website",
    "industry": "Education funding",
    "overview": "Fundmatch matches students to scholarships they're actually eligible for based on a short profile, instead of endless generic search.",
    "problemToSolve": "Students miss scholarships they'd qualify for because search tools return thousands of irrelevant results.",
    "targetUsers": "High school and college students searching for scholarship funding.",
    "keyScreens": [
      "Short eligibility profile builder",
      "Matched scholarship results list",
      "Scholarship detail with deadline and requirements",
      "Saved and applied tracker"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Must hold up from a 360px phone screen to a 1440px desktop"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Profile-driven matching UI",
      "Result list design",
      "Deadline-aware detail pages",
      "Tracking/status views"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-1888",
    "title": "Reeler",
    "difficulty": "Advanced",
    "platform": "Desktop app",
    "industry": "Creative production",
    "overview": "Reeler helps video editors organize footage, notes, and versions across a multi-editor project without losing track of the latest cut.",
    "problemToSolve": "Video projects get chaotic when multiple editors work from different footage versions and scattered feedback notes.",
    "targetUsers": "Freelance and small-studio video editors collaborating on a shared project.",
    "keyScreens": [
      "Project media library with version tags",
      "Timeline of cuts with editor attribution",
      "Feedback and note threads per clip",
      "Final version lock and export"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Make good use of a larger screen and multi-pane layout without overwhelming it"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Media library/asset management UI",
      "Versioning design",
      "Threaded feedback patterns",
      "Multi-user collaboration states"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-5621",
    "title": "Quietly",
    "difficulty": "Beginner",
    "platform": "Browser extension",
    "industry": "Focus & productivity",
    "overview": "Quietly blocks a short list of distracting sites during a focus session you set, with an honest way to end it early.",
    "problemToSolve": "People lose focus sessions to distracting sites because most blockers feel either too rigid or too easy to bypass without thought.",
    "targetUsers": "Students and remote workers trying to stay focused during work sessions.",
    "keyScreens": [
      "Start-a-focus-session setup",
      "Blocked-site interstitial with honest override",
      "Session progress indicator",
      "End-of-session summary"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Keep the popup or overlay lightweight and unobtrusive to the page underneath"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Setup flows",
      "Interstitial/blocking screen design",
      "Progress indicators",
      "Honest, non-shaming tone"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-7271",
    "title": "GlucoTrack",
    "difficulty": "Intermediate",
    "platform": "Smartwatch app",
    "industry": "Diabetes management",
    "overview": "GlucoTrack lets people with diabetes log glucose readings, meals, and insulin from their wrist and see same-day patterns.",
    "problemToSolve": "People with diabetes skip logging because pulling out a phone mid-meal or mid-activity is disruptive.",
    "targetUsers": "People managing type 1 or type 2 diabetes day to day.",
    "keyScreens": [
      "Quick glucose reading log",
      "Meal and insulin quick-log",
      "Same-day pattern view",
      "Out-of-range alert"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Design for glanceable, few-second interactions on a small watch face"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Quick-log micro-interactions",
      "Same-day trend visualization",
      "Alert design",
      "Designing for a medical, high-stakes context"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-4514",
    "title": "Sitewalk",
    "difficulty": "Advanced",
    "platform": "Tablet app",
    "industry": "Architecture & construction",
    "overview": "Sitewalk lets architects and contractors annotate a building site walkthrough with photos, notes, and issues tied to exact locations on the floor plan.",
    "problemToSolve": "Site issues get lost in email threads because they aren't tied to a specific location on the actual plan.",
    "targetUsers": "Architects, contractors, and site managers coordinating during a construction project.",
    "keyScreens": [
      "Floor plan with pinned issue markers",
      "Issue detail with photo and notes",
      "Walkthrough mode for a live site visit",
      "Issue status board across the whole project"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Design for both landscape and portrait use, ideally with a two-pane layout"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Spatial annotation UI",
      "Photo/note capture flows",
      "Live walkthrough mode design",
      "Cross-role status board"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-7910",
    "title": "Driftwood",
    "difficulty": "Beginner",
    "platform": "Voice or conversational interface",
    "industry": "Sleep & wellness",
    "overview": "Driftwood talks someone through a slow, calming wind-down conversation to help them fall asleep without screens.",
    "problemToSolve": "People struggle to fall asleep because winding down usually means staring at a screen right before bed.",
    "targetUsers": "Adults trying to build a screen-free wind-down routine before sleep.",
    "keyScreens": [
      "Wind-down conversation start",
      "Guided calming script with pacing",
      "Gentle fade-to-silence ending",
      "Morning check-in on sleep quality"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Script the full conversation, not just visuals \u2014 include what it says and how it recovers from a misheard request"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Calm, screen-free interaction design",
      "Pacing and tone in spoken content",
      "Gentle session-ending design",
      "Simple follow-up check-ins"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-4722",
    "title": "Nextblock",
    "difficulty": "Intermediate",
    "platform": "Mobile app (iOS/Android)",
    "industry": "Neighborhood safety",
    "overview": "Nextblock lets neighbors post and see real-time safety alerts for their specific block instead of a whole noisy city feed.",
    "problemToSolve": "Useful local safety information gets buried in citywide social feeds full of unrelated noise.",
    "targetUsers": "Residents of a specific neighborhood block wanting relevant, local safety updates.",
    "keyScreens": [
      "Block-specific alert feed",
      "Post-an-alert flow with category",
      "Alert detail with neighbor responses",
      "Block settings and notification preferences"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Design for comfortable one-handed use on a small screen"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Hyperlocal feed design",
      "Posting/reporting flows",
      "Threaded response UI",
      "Notification preference settings"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-2397",
    "title": "Hauler",
    "difficulty": "Advanced",
    "platform": "Web app",
    "industry": "Freight & logistics",
    "overview": "Hauler helps small freight dispatchers match available trucks to loads and track shipments across a regional network.",
    "problemToSolve": "Small freight dispatchers waste time and fuel matching loads to trucks over phone calls with no shared visibility.",
    "targetUsers": "Regional freight dispatchers, drivers, and the shippers waiting on deliveries.",
    "keyScreens": [
      "Load board with truck matching",
      "Dispatch assignment and driver notification",
      "Live shipment status tracking",
      "Delivery confirmation and proof of delivery"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Design for both desktop and tablet breakpoints"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Matching/marketplace UI",
      "Assignment workflows",
      "Live tracking visualization",
      "Multi-role status design"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-4907",
    "title": "Swap Plate",
    "difficulty": "Beginner",
    "platform": "Responsive website",
    "industry": "Community food sharing",
    "overview": "Swap Plate lets neighbors post homemade extra food to share or trade instead of letting it go to waste.",
    "problemToSolve": "Home cooks throw away good extra food because there's no easy, trusted way to offer it to neighbors.",
    "targetUsers": "Neighbors interested in sharing or trading homemade food locally.",
    "keyScreens": [
      "Nearby available food browse",
      "Post-an-offering flow with photo",
      "Claim-and-arrange pickup",
      "Simple neighbor rating after pickup"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Must hold up from a 360px phone screen to a 1440px desktop"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Local listing/browse UI",
      "Posting flows",
      "Claim/arrangement patterns",
      "Lightweight trust signals"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-5807",
    "title": "Setlist",
    "difficulty": "Intermediate",
    "platform": "Desktop app",
    "industry": "Music production",
    "overview": "Setlist helps working musicians plan setlists, track rehearsal notes, and share the final lineup with bandmates before a show.",
    "problemToSolve": "Bands waste rehearsal time re-deciding setlists because nothing is tracked between practices.",
    "targetUsers": "Gigging musicians and bands coordinating setlists and rehearsals.",
    "keyScreens": [
      "Song library with key and tempo notes",
      "Drag-to-build setlist for a show",
      "Rehearsal notes per song",
      "Share final setlist with the band"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Make good use of a larger screen and multi-pane layout without overwhelming it"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Library/catalog UI",
      "Drag-and-drop ordering",
      "Note-taking patterns",
      "Sharing/export flows"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-3857",
    "title": "Who's Watching",
    "difficulty": "Advanced",
    "platform": "Browser extension",
    "industry": "Digital privacy",
    "overview": "Who's Watching shows shoppers exactly which trackers and ad networks are active on a page before they browse further.",
    "problemToSolve": "Shoppers have no visibility into how many trackers are quietly collecting their data while they browse.",
    "targetUsers": "Privacy-conscious shoppers and general web users wanting transparency.",
    "keyScreens": [
      "Live tracker count badge",
      "Full tracker breakdown by category",
      "Block/allow controls per tracker",
      "Weekly privacy summary across sites visited"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Keep the popup or overlay lightweight and unobtrusive to the page underneath"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Transparency-focused UI",
      "Technical data made approachable",
      "Granular control design",
      "Summary reporting"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-7288",
    "title": "AquaCue",
    "difficulty": "Beginner",
    "platform": "Smartwatch app",
    "industry": "Athlete hydration",
    "overview": "AquaCue reminds athletes to hydrate during training sessions based on workout intensity and duration.",
    "problemToSolve": "Athletes under-hydrate during training because they lose track of time and effort once they're focused on the workout.",
    "targetUsers": "Recreational and competitive athletes during training sessions.",
    "keyScreens": [
      "Workout-in-progress hydration reminder",
      "One-tap hydration log",
      "Post-workout hydration summary",
      "Daily hydration goal progress"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Design for glanceable, few-second interactions on a small watch face"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "In-activity reminder design",
      "Quick-log interactions",
      "Post-activity summaries",
      "Goal progress visualization"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-4023",
    "title": "CivicKiosk",
    "difficulty": "Intermediate",
    "platform": "Tablet app",
    "industry": "Civic education",
    "overview": "CivicKiosk is a public library kiosk that walks visitors through how local government works and what's on the next local ballot.",
    "problemToSolve": "Many residents don't engage with local government because it's unclear what it does or how decisions affect them.",
    "targetUsers": "Library visitors and community members curious about local government and upcoming elections.",
    "keyScreens": [
      "How-local-government-works overview",
      "Interactive 'what affects you' explorer",
      "Upcoming ballot preview",
      "Where-to-learn-more and register-to-vote info"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Design for both landscape and portrait use, ideally with a two-pane layout"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Educational/explainer UI",
      "Interactive exploration patterns",
      "Public kiosk design considerations",
      "Plain-language civic content"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-2940",
    "title": "HarvestLine",
    "difficulty": "Advanced",
    "platform": "Voice or conversational interface",
    "industry": "Agriculture supply chain",
    "overview": "HarvestLine lets farm co-op staff check crop delivery status and supply chain questions by voice while working in the field or on the loading dock.",
    "problemToSolve": "Supply chain questions go unanswered in real time because staff can't stop physical work to look things up on a screen.",
    "targetUsers": "Farm co-op logistics staff and the farmers delivering crops.",
    "keyScreens": [
      "Delivery status voice lookup",
      "Supply chain question-and-answer conversation",
      "Issue-reported follow-up dialogue",
      "End-of-day summary read-back"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Script the full conversation, not just visuals \u2014 include what it says and how it recovers from a misheard request"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Domain-specific conversation design",
      "Real-time status lookup dialogue",
      "Field-condition-appropriate UX",
      "Summary read-back design"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-3969",
    "title": "Studyspot",
    "difficulty": "Beginner",
    "platform": "Mobile app (iOS/Android)",
    "industry": "Student life",
    "overview": "Studyspot helps college students find and join open study groups for their specific class on campus.",
    "problemToSolve": "Students struggle to find study partners for a specific class beyond posting in a chaotic group chat.",
    "targetUsers": "College students looking for classmates to study with.",
    "keyScreens": [
      "Browse study groups by class",
      "Group detail with meeting time and location",
      "Join or request to join a group",
      "My upcoming study sessions"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Design for comfortable one-handed use on a small screen"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Browse/filter UI",
      "Group detail pages",
      "Join/request flows",
      "Personal schedule view"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-1247",
    "title": "Wattwise",
    "difficulty": "Intermediate",
    "platform": "Web app",
    "industry": "Home energy",
    "overview": "Wattwise shows homeowners which appliances are driving their electricity bill and suggests specific ways to cut usage.",
    "problemToSolve": "Homeowners want to lower their electric bill but get only a total number with no idea what's actually driving it.",
    "targetUsers": "Homeowners looking to understand and reduce their home energy usage.",
    "keyScreens": [
      "Usage breakdown by appliance category",
      "Bill trend over time",
      "Personalized savings suggestions",
      "Goal-setting for next month's usage"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Design for both desktop and tablet breakpoints"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Data breakdown visualization",
      "Trend charts",
      "Recommendation design",
      "Goal-setting UI"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-7701",
    "title": "Legal Bridge",
    "difficulty": "Advanced",
    "platform": "Responsive website",
    "industry": "Legal access",
    "overview": "Legal Bridge helps people without a lawyer describe their legal situation in plain language and get matched to the right type of free or low-cost help.",
    "problemToSolve": "People with legal problems often don't seek help because they don't know what kind of legal help they even need.",
    "targetUsers": "People facing a legal issue who can't afford or don't know how to find a lawyer.",
    "keyScreens": [
      "Plain-language situation intake",
      "Matched resource results by issue type",
      "Resource detail with eligibility and contact info",
      "Save and track resources I've contacted"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Must hold up from a 360px phone screen to a 1440px desktop"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Sensitive intake form design",
      "Matching/triage logic UI",
      "Plain-language legal content",
      "Personal tracking view"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-6592",
    "title": "Folio",
    "difficulty": "Beginner",
    "platform": "Desktop app",
    "industry": "Creative freelancing",
    "overview": "Folio helps freelance illustrators organize their portfolio pieces by client and project for easy sharing.",
    "problemToSolve": "Freelance illustrators waste time rebuilding portfolio selections for each new potential client.",
    "targetUsers": "Freelance illustrators and designers managing a growing body of work.",
    "keyScreens": [
      "Project library organized by client",
      "Portfolio piece detail with tags",
      "Build a shareable portfolio set",
      "Shareable link preview"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Make good use of a larger screen and multi-pane layout without overwhelming it"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Portfolio/gallery UI",
      "Tagging and organization",
      "Curated collection building",
      "Shareable preview design"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-2653",
    "title": "Savvy",
    "difficulty": "Intermediate",
    "platform": "Browser extension",
    "industry": "Shopping savings",
    "overview": "Savvy checks for available coupon codes and cashback offers automatically at checkout across shopping sites.",
    "problemToSolve": "Shoppers overpay because they don't have time to hunt for coupon codes before completing checkout.",
    "targetUsers": "Online shoppers who want to save money without manually searching for deals.",
    "keyScreens": [
      "Checkout-time coupon detection popup",
      "Applied savings summary",
      "Cashback tracking dashboard",
      "Redeem cashback flow"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Keep the popup or overlay lightweight and unobtrusive to the page underneath"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Checkout-moment UI",
      "Savings summary visualization",
      "Dashboard design",
      "Redemption flows"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-9500",
    "title": "Nightwatch",
    "difficulty": "Advanced",
    "platform": "Smartwatch app",
    "industry": "Sleep medicine",
    "overview": "Nightwatch tracks breathing pattern irregularities overnight to help flag possible sleep apnea symptoms for discussion with a doctor.",
    "problemToSolve": "Sleep apnea often goes undiagnosed because symptoms only happen while the person is asleep and unaware.",
    "targetUsers": "Adults with suspected sleep apnea symptoms and the doctors they eventually consult.",
    "keyScreens": [
      "Overnight tracking status glance",
      "Morning summary of irregular events",
      "Multi-night pattern trend view",
      "Doctor-ready exportable report"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Design for glanceable, few-second interactions on a small watch face"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Overnight/passive tracking UX",
      "Morning summary design",
      "Long-term trend visualization",
      "Medical report export design"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-2680",
    "title": "Curious",
    "difficulty": "Beginner",
    "platform": "Tablet app",
    "industry": "Science education",
    "overview": "Curious is an interactive science museum kiosk where kids tap through simple experiments to learn a concept hands-on.",
    "problemToSolve": "Museum placards explain science concepts kids don't engage with as much as something they can actually touch and try.",
    "targetUsers": "Children ages 6-11 visiting a science museum with family.",
    "keyScreens": [
      "Concept intro with a simple question",
      "Interactive experiment simulation",
      "'What happened and why' explanation",
      "Try-another-experiment prompt"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Design for both landscape and portrait use, ideally with a two-pane layout"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Interactive simulation UI",
      "Designing for young children in public kiosks",
      "Explanation/reveal patterns",
      "Encouraging continued exploration"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-9199",
    "title": "SubChef",
    "difficulty": "Intermediate",
    "platform": "Voice or conversational interface",
    "industry": "Home cooking",
    "overview": "SubChef answers 'what can I substitute' questions out loud while you're mid-recipe and missing an ingredient.",
    "problemToSolve": "Cooks abandon a recipe or make a bad substitution because looking up alternatives mid-cooking is disruptive.",
    "targetUsers": "Home cooks who hit a missing-ingredient snag while actively cooking.",
    "keyScreens": [
      "Substitution question conversation",
      "Suggested substitute with ratio adjustment",
      "Follow-up clarifying question handling",
      "Confirmation and return to recipe"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Script the full conversation, not just visuals \u2014 include what it says and how it recovers from a misheard request"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Task-interruption-friendly dialogue design",
      "Clarifying question flows",
      "Confident recommendation tone",
      "Context-return design"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-7764",
    "title": "Compass Home",
    "difficulty": "Advanced",
    "platform": "Mobile app (iOS/Android)",
    "industry": "Refugee & immigrant services",
    "overview": "Compass Home helps newly resettled refugees find and navigate local services like housing, healthcare, and English classes in their own language.",
    "problemToSolve": "Newly resettled families struggle to navigate unfamiliar local systems, often in a language they're still learning.",
    "targetUsers": "Newly resettled refugee and immigrant families, and the case workers supporting them.",
    "keyScreens": [
      "Multilingual service category browse",
      "Service detail with steps and required documents",
      "Appointment and deadline tracker",
      "Case worker shared progress view"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Design for comfortable one-handed use on a small screen"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Multilingual UI design",
      "Plain-language, low-literacy-friendly content",
      "Step-by-step guided flows",
      "Dual audience design (family/case worker)"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-9366",
    "title": "Spine",
    "difficulty": "Beginner",
    "platform": "Web app",
    "industry": "Personal reading",
    "overview": "Spine is a simple personal library where readers log books they've read, are reading, or want to read next.",
    "problemToSolve": "Readers lose track of what they've read and what they meant to read next across scattered notes and apps.",
    "targetUsers": "Casual readers tracking their own reading for fun.",
    "keyScreens": [
      "My shelves: reading, read, want-to-read",
      "Add-a-book search and log",
      "Book detail with personal notes and rating",
      "Yearly reading summary"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Design for both desktop and tablet breakpoints"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Shelf/collection UI",
      "Search and add flows",
      "Personal notes/rating design",
      "Yearly summary visualization"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-6939",
    "title": "ShiftGiver",
    "difficulty": "Intermediate",
    "platform": "Responsive website",
    "industry": "Volunteer coordination",
    "overview": "ShiftGiver lets shelters post volunteer shift needs and lets volunteers browse and sign up for the ones that fit their schedule.",
    "problemToSolve": "Shelters struggle to fill volunteer shifts because sign-ups happen through inconsistent phone calls and paper sheets.",
    "targetUsers": "Volunteers looking for flexible shifts and the shelter staff coordinating coverage.",
    "keyScreens": [
      "Open shifts browse by date and role",
      "Shift detail with sign-up",
      "My upcoming volunteer shifts",
      "Coordinator view of shift coverage"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Must hold up from a 360px phone screen to a 1440px desktop"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Browse/filter UI",
      "Sign-up flows",
      "Personal schedule view",
      "Coordinator/admin dashboard"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-1698",
    "title": "Blueprint Books",
    "difficulty": "Advanced",
    "platform": "Desktop app",
    "industry": "Architecture practice",
    "overview": "Blueprint Books helps small architecture firms track project hours, phases, and billing against fixed-fee contracts.",
    "problemToSolve": "Small firms lose money on fixed-fee projects because they can't easily see when a project phase is going over budgeted hours.",
    "targetUsers": "Small architecture firm principals and the staff logging time against projects.",
    "keyScreens": [
      "Project phase and budget overview",
      "Time entry against project phases",
      "Budget-vs-actual alert per phase",
      "Client-ready billing summary export"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Make good use of a larger screen and multi-pane layout without overwhelming it"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Budget-tracking dashboards",
      "Time entry UX",
      "Alert/threshold design",
      "Client-facing report export"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-1416",
    "title": "Just The Recipe",
    "difficulty": "Beginner",
    "platform": "Browser extension",
    "industry": "Home cooking",
    "overview": "Just The Recipe strips a recipe webpage down to just the ingredients and steps, cutting out ads and life-story intros.",
    "problemToSolve": "Cooks scroll through long unrelated stories just to reach the actual recipe buried at the bottom of the page.",
    "targetUsers": "Home cooks who just want the recipe, fast, without the extra content.",
    "keyScreens": [
      "One-click 'just the recipe' view",
      "Cleaned ingredient list with checkboxes",
      "Cleaned step-by-step instructions",
      "Print or save the cleaned version"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Keep the popup or overlay lightweight and unobtrusive to the page underneath"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Content stripping/cleanup UI",
      "Checklist interactions",
      "Readable step formatting",
      "Print/export design"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-5378",
    "title": "CareCue",
    "difficulty": "Intermediate",
    "platform": "Smartwatch app",
    "industry": "Family caregiving",
    "overview": "CareCue reminds an adult child caring for a parent when it's time for the parent's next medication, right on their own wrist.",
    "problemToSolve": "Family caregivers miss medication windows for a parent because reminders live on the parent's device, not the caregiver's.",
    "targetUsers": "Adult children acting as caregivers for an aging parent's daily medication routine.",
    "keyScreens": [
      "Upcoming medication reminder glance",
      "Mark-as-given quick action",
      "Missed-dose alert",
      "Weekly adherence summary"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Design for glanceable, few-second interactions on a small watch face"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Caregiver-facing reminder design",
      "Quick-action interactions",
      "Alert/escalation design",
      "Summary reporting"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-4068",
    "title": "Bedside",
    "difficulty": "Advanced",
    "platform": "Tablet app",
    "industry": "Patient education",
    "overview": "Bedside gives hospital patients a tablet at their bedside to understand their diagnosis, upcoming procedures, and recovery steps in plain language.",
    "problemToSolve": "Patients leave the hospital confused about their own care plan because verbal explanations are rushed and easy to forget.",
    "targetUsers": "Hospital patients and the nurses and doctors managing their care.",
    "keyScreens": [
      "Plain-language diagnosis overview",
      "Upcoming procedure explainer with what to expect",
      "Daily recovery checklist",
      "Questions-for-my-doctor note builder"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Design for both landscape and portrait use, ideally with a two-pane layout"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Plain-language medical content design",
      "Explainer/educational UI",
      "Checklist patterns",
      "Patient empowerment through note-taking"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-2303",
    "title": "AisleFind",
    "difficulty": "Beginner",
    "platform": "Voice or conversational interface",
    "industry": "Grocery shopping",
    "overview": "AisleFind answers 'where's the...' questions in a grocery store using in-store kiosk voice interaction to point shoppers to the right aisle.",
    "problemToSolve": "Shoppers waste time wandering large stores looking for one specific item.",
    "targetUsers": "Grocery shoppers in a large or unfamiliar store.",
    "keyScreens": [
      "Item location question conversation",
      "Aisle direction with a simple map cue",
      "Related-item suggestion follow-up",
      "Store hours and department info"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Script the full conversation, not just visuals \u2014 include what it says and how it recovers from a misheard request"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Quick-answer conversation design",
      "Simple spatial direction-giving",
      "Related suggestion dialogue",
      "In-store kiosk UX considerations"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-2953",
    "title": "FixMyStreet Mini",
    "difficulty": "Intermediate",
    "platform": "Mobile app (iOS/Android)",
    "industry": "Civic infrastructure",
    "overview": "FixMyStreet Mini lets residents report potholes and broken streetlights with a photo and location, then track the city's response.",
    "problemToSolve": "Infrastructure issues go unreported because residents don't know who to call or whether reporting even leads anywhere.",
    "targetUsers": "City residents noticing infrastructure issues, and the city staff who respond to them.",
    "keyScreens": [
      "Report-an-issue with photo and pinned location",
      "My reported issues with status",
      "Issue detail with city response updates",
      "Nearby reported issues map"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Design for comfortable one-handed use on a small screen"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Photo/location capture flows",
      "Status tracking UI",
      "Map-based issue browsing",
      "Transparency-focused status design"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-5670",
    "title": "Slotwise",
    "difficulty": "Advanced",
    "platform": "Web app",
    "industry": "Higher education operations",
    "overview": "Slotwise helps university registrars build a conflict-free course schedule across departments, rooms, and instructor availability.",
    "problemToSolve": "Registrars spend weeks manually resolving scheduling conflicts across hundreds of courses, rooms, and instructors.",
    "targetUsers": "University registrar staff building each semester's course schedule.",
    "keyScreens": [
      "Constraint setup by department and room",
      "Auto-generated schedule with conflict flags",
      "Manual conflict resolution view",
      "Final schedule review and publish"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Design for both desktop and tablet breakpoints"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Complex constraint-based UI",
      "Conflict visualization",
      "Manual override/resolution flows",
      "Multi-department coordination design"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-7026",
    "title": "Trailhead",
    "difficulty": "Beginner",
    "platform": "Responsive website",
    "industry": "Outdoor recreation",
    "overview": "Trailhead shows current trail conditions, like mud or closures, reported by recent hikers for trails near you.",
    "problemToSolve": "Hikers show up to trails that are muddy, closed, or overcrowded because conditions aren't visible until they arrive.",
    "targetUsers": "Casual and regular hikers planning a trip to a nearby trail.",
    "keyScreens": [
      "Nearby trails list with recent conditions",
      "Trail detail with recent hiker reports",
      "Report-a-condition flow after a hike",
      "Save favorite trails"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Must hold up from a 360px phone screen to a 1440px desktop"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "List/detail browsing UI",
      "Crowdsourced report design",
      "Simple reporting flows",
      "Favoriting patterns"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-7615",
    "title": "Greenroom",
    "difficulty": "Intermediate",
    "platform": "Desktop app",
    "industry": "Podcast production",
    "overview": "Greenroom helps podcast hosts track guest outreach, scheduling, and episode notes from first contact to publish day.",
    "problemToSolve": "Podcast hosts lose track of where each guest is in the outreach-to-recording pipeline as the show grows.",
    "targetUsers": "Independent podcast hosts and producers managing guest bookings.",
    "keyScreens": [
      "Guest pipeline board by stage",
      "Guest detail with contact and scheduling notes",
      "Episode prep checklist per guest",
      "Publish-day checklist and show notes draft"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Make good use of a larger screen and multi-pane layout without overwhelming it"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Pipeline/kanban UI",
      "Contact and scheduling patterns",
      "Checklist design",
      "Content drafting UI"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-6836",
    "title": "Sourcecheck",
    "difficulty": "Advanced",
    "platform": "Browser extension",
    "industry": "Academic integrity",
    "overview": "Sourcecheck flags potential bias and missing citations while a student writes a research paper directly in their browser-based editor.",
    "problemToSolve": "Students submit weakly sourced or biased claims because checking sources rigorously is tedious to do manually while writing.",
    "targetUsers": "College students writing research papers, and the instructors evaluating source quality.",
    "keyScreens": [
      "Inline flagged-claim highlighting",
      "Claim detail with suggested source check",
      "Citation completeness checklist",
      "Pre-submission source quality summary"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Keep the popup or overlay lightweight and unobtrusive to the page underneath"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Inline writing-assistant UI",
      "Flagging and highlighting patterns",
      "Checklist design",
      "Summary/readiness reporting"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-2305",
    "title": "Standby",
    "difficulty": "Beginner",
    "platform": "Smartwatch app",
    "industry": "Workplace wellness",
    "overview": "Standby gently reminds desk workers to stand and move for a couple minutes after long stretches of sitting.",
    "problemToSolve": "Long uninterrupted sitting at a desk goes unnoticed until it's already affecting someone's energy and health.",
    "targetUsers": "Office and remote workers who sit for long stretches during the day.",
    "keyScreens": [
      "Sitting-time glance indicator",
      "Stand-up reminder tap",
      "Quick movement suggestion",
      "Daily movement summary"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Design for glanceable, few-second interactions on a small watch face"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Ambient status indicators",
      "Reminder tone and pacing",
      "Micro-suggestion design",
      "Daily summary view"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-6530",
    "title": "Firebell",
    "difficulty": "Intermediate",
    "platform": "Tablet app",
    "industry": "Restaurant operations",
    "overview": "Firebell is a kitchen display screen that shows incoming orders, prep status, and timing so cooks can prioritize without paper tickets.",
    "problemToSolve": "Kitchens fall behind during rushes because paper tickets get lost, reordered, or hard to read at a glance.",
    "targetUsers": "Line cooks and kitchen managers during service.",
    "keyScreens": [
      "Incoming orders queue by priority",
      "Order detail with modifications",
      "Mark-in-progress and mark-complete actions",
      "End-of-rush timing summary for the manager"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Design for both landscape and portrait use, ideally with a two-pane layout"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "High-speed, glanceable queue design",
      "Status/priority visualization",
      "Quick-action touch targets",
      "Post-service summary reporting"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-8445",
    "title": "RideAloud",
    "difficulty": "Advanced",
    "platform": "Voice or conversational interface",
    "industry": "Accessible transportation",
    "overview": "RideAloud narrates a rideshare trip's progress and surroundings out loud for blind and low-vision passengers riding alone.",
    "problemToSolve": "Blind and low-vision riders feel anxious in rideshares because they can't visually confirm the route or driver actions.",
    "targetUsers": "Blind and low-vision passengers using rideshare services independently.",
    "keyScreens": [
      "Trip-start confirmation conversation",
      "Live route and surroundings narration",
      "Unexpected-stop or detour explanation",
      "Arrival and drop-off confirmation"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Script the full conversation, not just visuals \u2014 include what it says and how it recovers from a misheard request"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Accessibility-first conversation design",
      "Real-time narration pacing",
      "Reassurance and trust-building tone",
      "Designing for high-stakes independence"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-8076",
    "title": "Handoff",
    "difficulty": "Beginner",
    "platform": "Mobile app (iOS/Android)",
    "industry": "Family resale",
    "overview": "Handoff is a local marketplace just for secondhand baby and kids' gear between nearby families.",
    "problemToSolve": "Parents accumulate outgrown baby gear because general marketplaces mix it in with everything else and feel less trustworthy for kids' items.",
    "targetUsers": "Parents looking to sell or find gently used baby and kids' gear locally.",
    "keyScreens": [
      "Browse nearby listings by category and age range",
      "Listing detail with condition notes",
      "Message-and-arrange-pickup flow",
      "Post-a-listing flow with photos"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Design for comfortable one-handed use on a small screen"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Category-filtered browsing",
      "Listing detail design",
      "Messaging/arrangement UI",
      "Listing creation flows"
    ],
    "estimatedTime": "4-8 hours"
  },
  {
    "ticketId": "DX-9556",
    "title": "Scopewise",
    "difficulty": "Intermediate",
    "platform": "Web app",
    "industry": "Freelance operations",
    "overview": "Scopewise helps freelancers track project scope against a signed contract so scope creep gets caught before it derails a project.",
    "problemToSolve": "Freelancers lose money to scope creep because there's no easy way to compare current requests against what was originally agreed.",
    "targetUsers": "Freelancers and consultants managing client project scope.",
    "keyScreens": [
      "Original scope summary from the contract",
      "New request logged against scope",
      "Scope-creep flag with suggested change order",
      "Client-facing change order summary"
    ],
    "constraints": [
      "Support at least two distinct user roles or states",
      "Include an empty, a loading, and an error state",
      "Meet WCAG AA color contrast",
      "Design for both desktop and tablet breakpoints"
    ],
    "deliverables": [
      "Wireframes for all core flows",
      "A high-fidelity mockup set with a mini style guide",
      "A clickable prototype covering the main path and one edge case"
    ],
    "skillsPracticed": [
      "Comparison/baseline UI",
      "Flagging and alert design",
      "Change-request workflows",
      "Client-facing summary documents"
    ],
    "estimatedTime": "10-16 hours"
  },
  {
    "ticketId": "DX-3041",
    "title": "ReadyHome",
    "difficulty": "Advanced",
    "platform": "Responsive website",
    "industry": "Household disaster planning",
    "overview": "ReadyHome walks a household through building a personalized disaster preparedness plan based on their location's specific risks.",
    "problemToSolve": "Most households don't have a real disaster plan because generic checklists don't account for their specific location and needs.",
    "targetUsers": "Households preparing for region-specific risks like wildfire, flood, or earthquake.",
    "keyScreens": [
      "Location-based risk assessment",
      "Personalized checklist by risk type",
      "Household member and pet plan builder",
      "Printable emergency plan summary"
    ],
    "constraints": [
      "Design for at least three interconnected user roles or systems",
      "Account for offline, low-bandwidth, or interrupted-connection scenarios",
      "Meet WCAG AA (ideally AAA) accessibility standards",
      "Must hold up from a 360px phone screen to a 1440px desktop"
    ],
    "deliverables": [
      "End-to-end wireframes across all flows",
      "A full high-fidelity UI kit or mini design system",
      "An interactive prototype covering edge cases and error recovery",
      "A short case-study write-up of your design decisions"
    ],
    "skillsPracticed": [
      "Risk-based personalization UI",
      "Checklist design",
      "Multi-member planning flows",
      "Printable summary/export design"
    ],
    "estimatedTime": "20-30 hours"
  },
  {
    "ticketId": "DX-4992",
    "title": "Rootline",
    "difficulty": "Beginner",
    "platform": "Desktop app",
    "industry": "Genealogy",
    "overview": "Rootline helps hobbyist genealogists build and visualize their family tree with photos and short stories per relative.",
    "problemToSolve": "Family history gets lost because relatives' stories and photos live scattered across drives and photo albums with no shared structure.",
    "targetUsers": "Hobbyists researching and documenting their family history.",
    "keyScreens": [
      "Family tree visual builder",
      "Relative detail with photo and story",
      "Add-a-relative flow with relationship linking",
      "Export or print the family tree"
    ],
    "constraints": [
      "Keep the flow to 4-5 screens",
      "Design for one primary user type only",
      "Follow basic accessible color contrast",
      "Make good use of a larger screen and multi-pane layout without overwhelming it"
    ],
    "deliverables": [
      "Low-fidelity wireframes for the core flow",
      "One polished high-fidelity screen",
      "A simple clickable prototype"
    ],
    "skillsPracticed": [
      "Tree/graph visualization",
      "Detail page design",
      "Relationship-linking UI",
      "Export/print design"
    ],
    "estimatedTime": "4-8 hours"
  }
];
