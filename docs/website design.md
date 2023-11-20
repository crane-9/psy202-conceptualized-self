# Site Design

The goal of this website is to present a lesson on the conceptualized self for hypothetical first-year community college students. A major factor of this website will be a modified [Johari window](https://www.communicationtheory.org/the-johari-window-model/), a brief and neutral demonstration of the conceptualized self. it will allow the user to share a link with others, similar to [kevan.org](https://kevan.org/johari)'s Johari window.

In addition to a series of lesson pages, there will be a few meta pages and error pages to improve user experience.

**Sitemap**
- [Core](#core)
	- `/`: homepage
	- `/window`: Johari exercise page
		- `/window/[user]`: to submit to a specific user's window.
		- `/window/[user]/view`: to view the user's window.
	- `/lesson/[n]`: series of pages exploring the concepts.
		- `/lesson`: re-route to `/lesson/1`
- [Meta](#meta)
	- `/sources`: itemized list of all sources.
	- `/about`: a brief page describing what and why and who.
	- `/privacy-policy`: a brief page describing what data is collected, and what cookies are stored.
	-`/johari`: more context on what a Johari window is.[^2]

---
## Page-by-page planning

As I am new to Sveltekit, here is where I plan out which pages will need what and which pages will do what.

### Core
Core pages that are keyframes in the "journey" or presentation.
#### Home page
The home page has limited needs, however it will establish the entire site's general layout.
- Introduces topic and purpose.
- Will highlight and direct to the Johari exercise.
- Meta links laid out plain and openly.
- Link related *resources* for depression?

#### `/window`
This page is where users will select which traits they use to describe/define themselves. It will also imply/setup the future layout for viewing a user's window.

> `+page.server.ts` will handle `POST` requests.

- `POST` form.
	- Trait grid.
	- "Submit" and "complete and keep private" buttons.[^1]
- Browser cookies:
	- Set `username` cookie.
- Link to privacy policy.

##### `/window/[user]`
This is where users will select traits to describe others. 

> `+page.server.ts` will handle `POST` requests. \[and *possibly* but not likely page loading.]

- Same `POST` form.
	- Trait grid component.
	- No username entry.
- Browser cookies:
	- read/write `reviewedUsers` list: attempt to prevent double-reviews.
	- IGNORE `username` cookie.
		- I will not track who reviews who. 
		- You do not need to have submitted a chart to review others.
- Link below to the user's `view` page.
- Link to privacy policy

##### `/window/[user]/view`
This page will display a user's window results. It will use a similar layout to its parent, but present the Johari window in place of the adjective grid. Additionally, below, it will display data and statistics for how others described them.

> `+page.server.ts` will fetch user data with which to load the page. it will also possibly handle some statistical analysis for simplicity/organization.

- Consider that this is the first/second page on the site someone sees.
	- Link to `/window` for the user to build their own.
	- Link to home or `/about`.
- Link back to `/window/[user]`.

##### `/lesson`
This page will automatically redirect to `/lesson/1`. this category holds the bulk of the website.

> `+layout.svelte` keeps consistency between all subpages.

##### `/lesson/[n]`
These pages are outlined in a Google Doc. Due to time restraints and the need for visual interest, I do not expect to make these pages procedural with the exception of the nature of svelte.

- Consider navigation between pages.
	- Consistent placement to ground between varying layouts.
	- Possible lesson timeline -- only thinkable use of JS.
- At the end:
	- If submitted a window: link back to `/window/[user]/view` using cookies.
	- If not, link back to `/window`.

### Meta
Meta pages provide more information about the site/project. These are not key components of the site's intention, but still hold important information to the user.

> These pages will be pre-rendered.
##### `/about`
This will be a standard about page. It will describe the site's intention, the project, and  so on. There is not much to put on this page.

- Link to sources.
- Link to [kevan.org](https://kevan.org) as inspiration.

##### `/sources`
This will be an academic page listing my sources. the purpose is to provide credit to my sources, *and* direct any user interested in more information.

- Note this will be safe-guarded by the submitted PDF of sources for the class.
- Clear and concise formatting.
- Consider a "read more" section as well, including [Kevan's johari](https://kevan.org/johari).

##### `/privacy-policy`
This page will detail what data is collected and why. This is my exercise in being responsible about what I create.

- No data is sold.
- The only data collected is an array of adjectives connected to your provided username.
	- When describing another user, no identifying data is collected.
	- This data cannot be removed.
- What cookies are stored and why.
	- Your username is stored for user experience.

##### `/johari`
This page will provide some basic information on what a Johari window *is*. 

- Link to the window page.


---
[^1] I removed the "continue without submitting" button as it is implicit.
[^2] Added at the end of the project.
