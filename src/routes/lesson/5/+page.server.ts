import type { PageServerLoad } from "./$types";


// Get username from cookie.
export const load: PageServerLoad = async ({ cookies }) => {
    let username = cookies.get("username");    

	return { username: username };
};
