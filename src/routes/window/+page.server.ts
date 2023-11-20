import type { Actions } from "./$types";
import type { types } from "$lib";

import { error, fail, type HttpError } from "@sveltejs/kit";
import { utils, MAX_TRAITS, database } from "$lib";


// Form actions.
export const actions = {
    // Default: handles POST request, registers a new user to the database.
	default: async ({ platform, request, cookies }) => {
        // Safeguard.
        if (platform === undefined || platform.env.johari === undefined) {
            throw error(500, "application could not connect to platform database.");
        }

        // Format data for database.
        let rawData: types.RawForm = utils.formToObj(await request.formData());
        rawData.username = rawData.username.trim();
        
        // Validate username.
        if (!utils.validateUsername(rawData.username)) { return fail(400, { invalidUsername: true }) }
        
        let data = rawData as unknown as types.UserData;
        data.descriptors = utils.stringToNumArr(rawData.descriptors);

        // Validate length.
        if (data.descriptors.length > MAX_TRAITS) { return fail(400, { tooMany: true }) }
        else if (data.descriptors.length <= 0) { return fail(400, { missingDescriptors: true }) }
        
        // Add empty review field.
        data.reviews = [];
        console.log(data);

        // Add to database.
        try {
            await database.createEntry(platform.env.johari, data);
        } catch (err) {
            if ((err as HttpError).status == 409) {
                return fail(409, { userTaken: true })
            }
        }

        // Set the cookie.
        cookies.set("username", data.username, { path: "/" });

		return { success: true, username: data.username };
	},
} satisfies Actions;

// Pre-rendered.
export const ssr = true;
