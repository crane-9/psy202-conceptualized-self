# Concept Demonstration Design 

>Started 11/15/2023

**Topic:** The conceptualized self.
**Format:** Website.

For my PSY 202 final, my concept demonstration project will be a small website exploring the *conceptualized self* and related/foundational concepts.

**Key concept list:**
- Conceptualized self / autobiographical self
	- Present self [^1]
	- Observing self[^1]
- RTF: Relational frame theory and functional contextualism[^2]
- ACT: Acceptance and commitment therapy
	- Psychological inflexibility
	- Six processes that cause or exacerbate psychological distress:
		- Experiential avoidance
		- Cognitive fusion[^3]
		- Attention rigidity to the past and future
		- Conceptualized self
		- Unclear/avoidant motives
		- Unworkable actions
- Depression / depressive symptoms
- Johari window[^4]

These concepts are all relevant and will be explored to some extent. I also would like to link to additional resources.

### **Website planning**
Iwill use [Sveltekit](https://kit.svelte.dev/) and [Cloudflare Workers](https://workers.cloudflare.com/) to host a small site with a small user-built database.

**Core sitemap:**
- `/`: homepage
- `/window`: Johari exercise page
	- `/window/[user]`: to submit to a specific user's window.
	- `/window/[user]/view`: to view the user's window.
- `/lesson/[n]`: series of pages exploring the concepts.
	- `/lesson`: re-routes to `/lesson/1`

The user will navigate through the website, starting with the Johari exercise. Then they will read through the lesson. Finally, they will return to the Johari exercise, be given a greater explanation on it, and again be prompted to share a link with friends.

>[Further design notes begin here](website%20design)

---
[^1] Antonio Damasio's three selves.
[^2] [RTF introduction here](https://psycnet.apa.org/fulltext/2014-44008-007.html)
[^3] [Cognitive fusion introduction here](https://www.habitsforwellbeing.com/what-is-cognitive-fusion/)
[^4] [Wikipedia](https://en.wikipedia.org/wiki/Johari_window), find a better source though. discuss at the end of the lesson.