import type { PageServerLoad } from "./$types";
import type { types } from "$lib";

import { database, errors } from "$lib";


export const load: PageServerLoad = async ({ params, platform}) => {
	// Safeguard.
    if (platform === undefined || platform.env.johari === undefined) {
        return errors.platformError();
    }

    // Get user data. Raises error on fail.
    let userData = await database.checkFor(platform.env.johari, params.username, true);
    console.log(userData);

	return (userData as types.UserData);
};


export const ssr = true;
