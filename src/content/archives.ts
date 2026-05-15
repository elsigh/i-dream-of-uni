// Local archives of talks and writing — preserved here so the content
// survives if the original hosts go offline. The original URLs are still
// linked for canonical viewing.

export type Archive = {
  slug: string
  title: string
  sourceLabel: string
  originalHref: string
  year: string
  archivedAt: string
  /** Markdown body. Leave empty if only metadata could be archived. */
  markdown: string
  /** Optional note shown when archive content is limited. */
  note?: string
}

export const talkArchives: Record<string, Archive> = {
  'effective-thinking': {
    slug: 'effective-thinking',
    title: 'Effective Thinking in the Age of Augmented Tooling',
    sourceLabel: 'TechLead Conf Amsterdam 2026',
    originalHref: 'https://gitnation.com/person/lindsey_simon',
    year: '2026',
    archivedAt: '2026-05-15',
    markdown: `
**Event:** TechLead Conf Amsterdam 2026 — Adopting AI in Orgs Edition
**Speaker:** Lindsey Simon, VP of Engineering, Vercel

## Abstract

AI tools are generating more code than ever, but the engineers and leaders extracting the most value aren't those with superior prompts — they're the ones whose thinking is clearest.

The talk references *The 5 Elements of Effective Thinking* by Lindsey's former math professor Michael Starbird, arguing that a generalist's mindset — deep comprehension, "productive failure," and persistent questioning — is the genuine force multiplier in AI-assisted work. The habits that sharpen your own thinking also sharpen your ability to collaborate with machines.

The session pulls from Vercel's internal experience adopting AI: deploying AI tooling across the company, establishing shared terminology for working with coding agents, and constructing systems that link AI-produced code to real production outcomes. Lindsey shares concrete takeaways on successes, failures, and why "learning how to think" may be the most underrated leadership skill in tech right now.

## Tags

Best practices · Artificial intelligence
`.trim(),
  },

  'how-vercel-uses-ai': {
    slug: 'how-vercel-uses-ai',
    title: 'How Vercel Uses AI',
    sourceLabel: 'Jam.dev AI Speedrun',
    originalHref: 'https://youtu.be/nGRyvYax1BI',
    year: '2025',
    archivedAt: '2026-05-15',
    note: 'YouTube does not expose video descriptions or transcripts to off-platform fetches, so only the link survives in the archive. Watch the original to see the talk.',
    markdown: `
**Event:** Jam.dev AI Speedrun
**Format:** Video talk
**Speaker:** Lindsey Simon, VP of Engineering, Vercel

A talk on how Vercel's engineering organization has adopted AI tooling internally — the workflows, the shared language, and the production-grade systems that connect AI-generated code to real product outcomes.

> The full talk is hosted on YouTube. See the original link to watch.
`.trim(),
  },

  'conducting-interviews-ai': {
    slug: 'conducting-interviews-ai',
    title: 'Conducting Interviews and Interviewing in the Age of AI Tools',
    sourceLabel: 'TechLead Conference 2024',
    originalHref: 'https://gitnation.com/person/lindsey_simon',
    year: '2024',
    archivedAt: '2026-05-15',
    markdown: `
**Event:** TechLead Conference 2024 (also delivered at C3 Dev Festival 2024)
**Duration:** ~29 min
**Speaker:** Lindsey Simon, VP of Engineering, Vercel

## Topic

How engineering managers and candidates should rethink technical interviews now that AI tools are widely available to both sides of the table. What signal still matters, what's noise, and how the rituals of hiring need to evolve.

## Tags

Soft skills · Artificial intelligence · Builders and founders
`.trim(),
  },

  'modern-web-podcast': {
    slug: 'modern-web-podcast',
    title: 'Developer-led Innovation and the Future of Frontend',
    sourceLabel: 'More Than A Refresh, Episode 44',
    originalHref: 'https://open.spotify.com/episode/1oW2O5Ez7su7uxyj9CuQmi',
    year: '2024',
    archivedAt: '2026-05-15',
    markdown: `
**Show:** *More Than A Refresh — Conversations with the most interesting people you've never met*
**Episode:** 44 — "Differentiating between failure and opportunity, and the link between advertising and UX"
**Published:** February 6, 2024
**Duration:** 59 min
**Host:** JD
**Guest:** Lindsey Simon, VP Engineering, Vercel

## Episode description

A conversation about distinguishing failure from opportunity, the relationship between advertising and user experience, and why "the long road" is actually just "the road." JD also finally gets Rickrolled.
`.trim(),
  },

  'frontend-cloud': {
    slug: 'frontend-cloud',
    title: 'Frontend Cloud: Unleashing Creative Power',
    sourceLabel: 'Tech Leaders Unplugged',
    originalHref:
      'https://www.techleadersunplugged.com/frontend-cloud-unleashing-creative-power/',
    year: '2023',
    archivedAt: '2026-05-15',
    markdown: `
**Show:** Tech Leaders Unplugged
**Published:** August 18, 2023
**Hosts:** Carlos R Ponce, Wade Erickson
**Guest:** Lindsey Simon, VP of Engineering, Vercel

## Episode description

A conversation about open-source solutions for the next generation of developers and how the frontend cloud model unleashes creative power for product teams.

## Topics

- Frontend cloud platforms
- Open-source software solutions
- Tools and approaches for the next generation of developers
- Engineering leadership at Vercel
`.trim(),
  },

  'career-path': {
    slug: 'career-path',
    title: 'Your Career Path: From the Outside, from the Inside',
    sourceLabel: 'ELC Annual 2022',
    originalHref:
      'https://sfelc.com/annual2022/topics/your-career-path-from-the-outside-from-the-inside',
    year: '2022',
    archivedAt: '2026-05-15',
    markdown: `
**Event:** ELC Annual 2022 (Engineering Leadership Community), October 27–28, San Francisco
**Category:** Career
**Speaker:** Lindsey Simon, VP of Engineering, Vercel

## Abstract

The way you reflect on your past career — and the way you visualize your future career — shapes who you become. If you can learn to visualize the story of your future, you can make choices today that grow you to new heights. For anyone weighing new opportunities, rehearsing that story in advance can help you recognize whether a role is the right next step.

In this talk, Lindsey walks through his own career journey: paths he took (and ones he didn't), how those choices appear in hindsight, and where he sees the future heading at Vercel.

## Speaker bio

Making the web faster has been Lindsey's lifelong career ambition. Before joining Vercel, he spent seven years at Google, where he was an original core team member who helped launch App Engine and later served as tech lead on both the Google Translate and Web Performance teams. He has lived in San Francisco for 15 years and, outside of coding, writes music and forages for wild mushrooms.
`.trim(),
  },

  'faster-safer-browsers': {
    slug: 'faster-safer-browsers',
    title: 'Faster, Safer, More Consistent Browsers',
    sourceLabel: 'Velocity 2012',
    originalHref: 'https://www.youtube.com/watch?v=RwvcjPE2Rm0',
    year: '2012',
    archivedAt: '2026-05-15',
    note: 'YouTube does not expose video descriptions or transcripts to off-platform fetches, so only the link and event context survive here.',
    markdown: `
**Event:** Velocity Conference 2012
**Format:** Lightning demo
**Speaker:** Lindsey Simon, Google

A short demo presented at O'Reilly Velocity 2012, the leading web performance conference of its era. The talk covered the work behind [Browserscope](https://www.browserscope.org/) — a crowdsourced project for measuring browser behavior across network, security, selectors, rich-text, and Acid3 categories — and the broader effort to make browsers faster, safer, and more consistent for developers and end users alike.

> The full recording is hosted on YouTube. See the original link to watch.
`.trim(),
  },

  'minimizing-browser-reflow': {
    slug: 'minimizing-browser-reflow',
    title: 'Minimizing Browser Reflow',
    sourceLabel: 'Google Search Central',
    originalHref:
      'https://developers.google.com/speed/docs/insights/browser-reflow',
    year: '2010',
    archivedAt: '2026-05-15',
    markdown: `
**Author:** Lindsey Simon, UX Developer
**Originally published on:** Google Search Central / PageSpeed Insights documentation
**Recommended knowledge:** Basic HTML, basic JavaScript, working knowledge of CSS

## Overview

Reflow is the browser's process of recalculating element positions and geometries in order to re-render part or all of a document. Because reflow blocks the user, developers benefit from understanding how to improve reflow time and how factors like DOM depth, CSS rule efficiency, and different types of style changes affect it. Reflowing one element can sometimes require reflowing its parent elements and any elements that follow it.

## What triggers reflow

Many user actions and DHTML changes can trigger reflow, including:

- Resizing the browser window
- JavaScript methods involving computed styles
- Adding or removing DOM elements
- Changing an element's classes

Some operations cause more reflow than expected — a diagram from Steve Souders' *Even Faster Web Sites* talk illustrates this well. Not every style change in JavaScript triggers reflow in every browser, and reflow durations vary across engines, though modern browsers continue to improve.

## Key points

- Reflow is a user-blocking operation that can significantly impact perceived performance.
- Various actions — resizing, DOM manipulation via JS — can trigger reflow, with varying costs.
- Developers can minimize reflow by reducing DOM depth, optimizing CSS, using absolute or fixed positioning for complex changes, and avoiding expensive selectors.
- Browsers continue to improve, but mitigating reflow remains important.

At Google, page and application speed is tested in multiple ways, and reflow is a key consideration when adding UI features, with the goal of delivering lively, interactive, and delightful user experiences.

## Guidelines

Simple ways to minimize reflow:

1. **Reduce unnecessary DOM depth.** Changes at one level of the DOM tree can cascade upward to the root and downward into children of the modified node, increasing reflow time.
2. **Minimize CSS rules, and remove unused CSS rules.**
3. **Perform complex rendering changes (like animations) out of the flow** — use \`position: absolute\` or \`position: fixed\`.
4. **Avoid unnecessarily complex CSS selectors** — especially descendant selectors — since they require more CPU for selector matching.

## Additional resources

- Opera, *Repaints and Reflows*
- Satoshi Ueyama's debug-Firefox reflow demos (google.co.jp, mozilla.org, ja.wikipedia.org)
- Nicole Sullivan on reflows and repaints

---

*Originally licensed under Creative Commons Attribution 4.0; code samples under Apache 2.0.*
`.trim(),
  },
}

export const writingArchives: Record<string, Archive> = {
  'measuring-task-completion': {
    slug: 'measuring-task-completion',
    title: 'Measuring the Performance of Task Completion',
    sourceLabel: 'Web Performance Calendar',
    originalHref:
      'https://calendar.perfplanet.com/2010/measuring-the-performance-of-task-completion/',
    year: '2010',
    archivedAt: '2026-05-15',
    markdown: `
**Author:** Lindsey Simon ([@elsighmon](http://twitter.com/elsighmon))
**Published:** December 19, 2010
**Source:** Web Performance Calendar, 2010 Edition

## About the author

Lindsey Simon is a front-end developer for Google's User Experience group and project lead for the open source Browserscope.org project. He hails from Austin, TX, where he worked at startups, taught computing at the Griffin School, and served as webmaster for the Austin Chronicle. He currently lives in San Francisco, writes acoustic guitar songs, and helps run a foodie website, dishola.com.

## Introduction

This entry takes a slightly liberal interpretation of performance and applies it to task completion and UI design. A few years ago there was a JavaScript library "speed war," largely focused on selector matching engine benchmarks. Peter Higgins's [TaskSpeed](http://dante.dojotoolkit.org/taskspeed/) suite (early 2009) was inspiring because it tested the performance of groups of common operations rather than isolated functions.

## The Google Translate redesign problem

Mid-2010, my team began redesigning Google Translate, focusing on the language selection process. The existing UI required four clicks from a mouse/touchpad user to pick a language pair: open the "from" SELECT, choose a language, open the "to" SELECT, and choose again. With 51 languages (and growing), picking from a native HTML SELECT dropdown was known to be slow and frustrating. A prototype alternative picker felt better, but we wanted hard data.

## Using Browserscope for a quick A/B test

While Google has infrastructure for small-percentage experiments, integrating a large UI change into the Translate frontend would take time. As project lead for Browserscope, I realized its new User Test feature — which lets developers store data and correlate medians by user agent via a JavaScript include — could be leveraged. We built a quick A/B test, hosted it at \`groupmenuselect.appspot.com\`, and shared the link with friends. Results were viewable grouped by browser on Browserscope.

## What we learned

The proposed new picker (GroupMenuSelect) was faster on average.

> The average time for a desktop user to choose a language from the native SELECT was 3.7 seconds while the average time for choosing from the GroupMenuSelect was 2.5 seconds.

While saving only seconds per use, frequent users (such as language learners) would see meaningful gains, and the savings multiply across all selections.

Looking at per-browser results was illuminating. Most surprising: the difference on Safari was essentially negligible. Examining screenshots of how each OS renders a native SELECT revealed a clear correlation between the number of visible options (without scrolling) and the speed of choosing the right one — supporting the new design's motivation.

### Native SELECT visible option counts

\`\`\`
NATIVE SELECT
----------------------
Total:   51 language options
Mac:     45 visible at a time
Windows: 30 visible at a time
Ubuntu:  20 visible at a time
Android:  7 visible at a time
iPhone:   5 visible at a time, with an extra click for "Done"
\`\`\`

## Broad conclusion

Once a SELECT list contains roughly 30 options or more (as in a language picker), most desktop users would benefit greatly from an alternative interface.

## Mobile caveats

Speed improvements were less clear on mobile. Horizontal constraints and tiny text made it hard to read all the languages at once, undermining the new design's advantages. On Android, GroupMenuSelect completion times were sometimes higher than the native SELECT — the Android result row was incomplete because it refused to fire \`mousedown\` on the native SELECT, and misses weren't well captured by our timer. On iPhone, layout, interactions, and affordance worked well for GroupMenuSelect, yielding a slight gain over the native control (which requires considerable scrolling). Ultimately we flipped a bit in Translate to disable GroupMenuSelect on mobile before launch, pending more definitive data.

## Outcome and takeaway

After the August launch, more granular and precise tracking with less selection bias confirmed the experimental findings. The story illustrates the value of experimenting and collecting data on performance, then using those signals to investigate further and refine the design.

## Links referenced

- [TaskSpeed](http://dante.dojotoolkit.org/taskspeed/) by Peter Higgins
- [Browserscope](http://www.browserscope.org)
- [Browserscope User Test howto](http://www.browserscope.org/user/tests/howto)
`.trim(),
  },

  'xsldatagrid': {
    slug: 'xsldatagrid',
    title: 'The XSLDataGrid: XSLT Rocks Ajax',
    sourceLabel: 'XML.com',
    originalHref: 'https://www.xml.com/pub/a/2006/08/23/xsldatagrid-xslt-ajax.html',
    year: '2006',
    archivedAt: '2026-05-15',
    markdown: `
**Author:** Lindsey Simon
**Published:** August 23, 2006
**Source:** XML.com (O'Reilly Media)

## Overview

This article presents a datagrid component built with XSLT and JavaScript, designed for easy setup, strong performance, and minimal dependencies. The dynamic datagrid is an often cumbersome widget to set up.

## The problem

Three common approaches to JavaScript widget creation:

**Approach #1 — Server-side instantiation.** PHP example:

\`\`\`
$dg = new DataGrid();
$dg->columns = array( "field1", "field2", "field3" );
$dg->data = $data;
$dg->render();
\`\`\`

**Approach #2 — Browser-side instantiation through DOM creation.** Using ActiveWidgets Grid:

\`\`\`
var myCells = [
  ["MSFT","Microsoft Corporation", "314,571.156"],
  ["ORCL", "Oracle Corporation", "62,615.266"]
];
var myHeaders = ["Ticker", "Company Name", "Market Cap."];

var obj = new AW.UI.Grid;
obj.setCellText(myCells);
obj.setHeaderText(myHeaders);
obj.setColumnCount(3);
obj.setRowCount(2);
document.write(obj);
\`\`\`

**Approach #3 — Hybrid.** Declarative XHTML serves as a base, then is enhanced. Like building a house: the declarative XHTML is the frame, while DOM additions are the siding, air conditioning, and champagne-filled hot tub.

\`\`\`
var myGrid = new XSLDataGrid( 'renderDiv', { width: 480, height: 200, transformer:'client', debugging: true } );
\`\`\`

Approach #1 lacks portability since it depends on the server language. Approach #2 fails when JavaScript is disabled and struggles with large datasets. Approach #3 is the chosen compromise.

## In defense of the table tag

While CSS has rightly reduced reliance on tables for layout, the \`<table>\` family provides a declarative, semantic language for describing tabular data — handling cases where nested DIVs and floats grow unwieldy. With CSS disabled, pure DIV-based table presentation degrades poorly.

## XSLT on XHTML

XSLT lets us decorate the DOM with well-formed markup in a powerful, flexible way. The transform results are inserted back via the container's \`innerHTML\` property — a technique known as AHAH.

From quirksmode.org's "Benchmark — W3C DOM vs. innerHTML":

> innerHTML is faster than 'real' W3C DOM methods in all browsers. The W3C DOM table methods are slow to very slow, especially in Explorer.

## The XSLDataGrid process

Semantic XHTML Table + \`XSLDataGrid.xsl\` → Decorated XHTML (more tags, attributes, CSS) + JavaScript (instantiation, event listeners) → Rich DataGrid UI in the render tree, with the original XML DOM kept in memory.

## Dual-DOM, or, how I dealt with innerHTML

Three usage modes for the component:

1. Fetching fully-decorated XHTML from the server each time.
2. Fetching semantic XHTML from the server and transforming it client-side.
3. Transforming XHTML already present on the page client-side.

For case 1, all change operations (column resize, sort, reorder) can be delegated to the server. Cases 2 and 3 require XSLT to run repeatedly, so well-formed XHTML must remain available. Internet Explorer "optimizes" \`innerHTML\` by stripping quotation marks and end tags, making round-tripping unreliable.

To work around this, on initialization the XSLDataGrid stores an XML DOM Document built from the original semantic XHTML — the "Dual-DOM" technique. For column resizing, instead of updating numerous DIVs, SPANs, THs, TDs, and COLs in the render tree, the component only changes one \`width\` attribute in the XML DOM and re-runs the XSLT.

## XSLT in the browser

Both Internet Explorer and Firefox expose XSLT APIs. Manos Batsis's free Sarissa library wraps the loading of XHTML and XSL and invokes the browser's native transform method. At publication time, XSLT was not exposed to JavaScript in Safari or Konqueror, and Opera's XSLT API was not yet implemented in the XSLDataGrid.

Client-side sorting works by extracting a subset of template nodes from the XSL via DOM, then transforming the current TBODY with that subset plus parameters. The technique is limited to XSLT 1.0 datatypes — only "text" and "number." Adding "date" support via qname stylesheet templates was on the roadmap.

## Benchmarks

Tests were run with the help of the Venkman profiler. Server-side tests used GNU/Linux with PHP 5.1.4; client tests used a 2GHz Pentium M running Firefox 1.5.0.6.

| Rows  | Pre-XSLT (KB) | Post-XSLT (KB) | Client-side XSLT (ms) | Server-side XSLT (sec) |
| ----- | -------------:| --------------:| ---------------------:| ----------------------:|
| 200   | 17.5          | 29.6           | 156.25                | 0.0306                 |
| 500   | 43.6          | 68.8           | 369.79                | 0.0356                 |
| 1000  | 87.1          | 134            | 781.25                | 0.0860                 |
| 2000  | 179.1         | 270.5          | 1684.38               | 0.2068                 |
| 4000  | 363.1         | 543.5          | 3070.31               | 0.3979                 |
| 8000  | 731.1         | 1089.5         | 6265.63               | 0.7861                 |
| 20000 | 1885.1        | 2787.5         | 16695.31              | 4.0880                 |

## Conclusions

The principal benefit of XSLT for a JavaScript widget is flexibility at instantiation time. Since most Ajax developers already work with a server-side stack, being able to skip the client-side decoration step boosts performance — though at a bandwidth cost. Projects often involve a mix of large dynamic datagrids (best served from the server) and smaller hand-coded tables. The XSLT-based design lets developers choose either client or server transformation while preserving a consistent look and feel.

## Required libraries (historical)

- prototype.js (Sam Stephenson)
- scriptaculous.js (Thomas Fuchs)
- sarissa.js (Manos Batsis)
- XSLDataGrid.css, XSLDataGrid.js, XSLDataGrid.xsl, Utility.js (Lindsey Simon)

---

*Originally © 1998–2008 O'Reilly Media, Inc.*
`.trim(),
  },

  'browserscope-security': {
    slug: 'browserscope-security',
    title: 'New Browserscope Security Tests',
    sourceLabel: 'High Performance Web Sites (Steve Souders)',
    originalHref:
      'https://www.stevesouders.com/blog/2010/02/19/new-browserscope-security-tests/',
    year: '2010',
    archivedAt: '2026-05-15',
    markdown: `
**Author:** Steve Souders
**Published:** February 19, 2010
**Source:** stevesouders.com / High Performance Web Sites
*(Archived here because Lindsey led the Browserscope project Steve writes about.)*

---

## Article

Browserscope is an open source project that builds on Souders' earlier UA Profiler work. Its purpose is to help make browsers "faster, safer, and more consistent" by running categories of tests that measure browser behavior. The current test categories include:

- Network
- Acid3
- Selectors API
- Rich Text
- Security

The project is led by Lindsey Simon, who posted updates on the Browserscope security tests the same day. The security category was originally created by Collin Jackson (CMU) and Adam Barth (UC Berkeley). For this release, they collaborated with David Lin-Shung Huang and Mustafa Acer (both from CMU) to add tests covering:

- HTTP Origin Header
- Strict Transport Security
- Sandbox Attribute
- X-Frame-Options
- X-Content-Type-Options

Other updates accompanied the release. The list of "top" browsers was refreshed — notably, IE 6 was dropped. Lindsey added a dropdown menu to each test category to make navigation easier. Souders, who runs the Network category, split the overloaded parallel script loading test into four more specific tests measuring whether external scripts load in parallel with images, stylesheets, iframes, and other scripts. Brian Kuhn (Google) contributed a test measuring support for the \`SCRIPT ASYNC\` attribute.

> All the data is crowdsourced.

That crowdsourcing is critical — it allows the project to operate without a dedicated test lab and to gather data under real-world conditions. Souders encourages readers to visit the Browserscope test page and click "Run All Tests"; it only takes a few minutes and runs automatically.

> We're all in this together.

## Selected comments

**Michael Bolin** asked whether IE6 could be restored to Browserscope.org, arguing it still held more market share than several tracked browsers and that web developers still needed to design for it.

**Steve Souders** replied that IE6 was still on the site "along with hundreds of other browsers." It had only been removed from the "Top Browsers" grouping to leave room for newer browsers. He suggested choosing "Major Versions" to view IE6 or using a querystring like:

\`\`\`
http://www.browserscope.org/?category=security&v=1&ua=IE+6,IE+7,IE+8
\`\`\`
`.trim(),
  },
}
