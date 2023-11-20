import type { PageServerLoad, Actions } from "./$types";
import type { types } from "$lib";

import { fail, redirect } from "@sveltejs/kit";
import { database, utils, MAX_TRAITS, errors } from "$lib";

// Server load function
export const load: PageServerLoad = async ({ params, platform }) => {
	// Safeguard.
    if (platform === undefined) {
        return errors.platformError();
    }

    // Get user data. Raises error on fail.
    let userData = await database.checkFor(platform.env.johari, params.username, true);

	return (userData as types.UserData);
};


// Form actions.
export const actions = {
    // Default: add a review to another user.
    default: async ({ platform, request }) => {
        // Safeguard.
        if (platform === undefined || platform.env.johari === undefined) {
            return errors.platformError();
        }
        
        // Convert and fetch user data. Confirm it exists.
        let rawData: types.RawForm = utils.formToObj(await request.formData());
        let userData = (await database.checkFor(platform.env.johari, rawData.username, true)) as types.UserData;

        let reviewTraits = utils.stringToNumArr(rawData.descriptors);
        
        // Validate length.
        if (reviewTraits.length > MAX_TRAITS) { return fail(400, { tooMany: true }) }
        else if (reviewTraits.length <= 0) { return fail(400, { missingDescriptors: true }) }

        // Submit to database.
        await database.addReview(platform.env.johari, userData.username, reviewTraits);

        throw redirect(303, `/window/${userData.username}/view`);
    },
} satisfies Actions;


export const ssr = true;
