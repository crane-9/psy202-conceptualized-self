/**
 * Functions to interact with the KV namespace.
 */
import type { KVNamespace } from "@cloudflare/workers-types";
import type { UserData } from "./types";

import { error } from "@sveltejs/kit";


/**
 * Checks the database for a user's data.
 * @param kv Expects "Johari" CF KV namespace.
 * @param username Username to check for.
 * @param expected `true` if result is expected, `false` otherwise.
 * @throws 404 error if user is expected and not found.
 * @throws 409 error if the user is unexpected and found.
 * @returns The user's dat, if they exist. Else void.
 */
async function checkFor(kv: KVNamespace, username: string, expected: boolean = false): Promise<UserData | void> {
    console.log(kv);
    let userData = await kv.get(username.toLowerCase());

    // Errors.
    if (expected && (userData === null)) {
        throw error(404, `user '${username}' was not found.`)
    } else if (!expected && (userData !== null)) {
        throw error(409, `username '${username}' already taken`);
    }
    
    // Return.
    if (userData === null) return; 
    return JSON.parse(userData);
}


/**
 * Adds a new user to the database.
 * @param kv Expects CF KV namespace.
 * @param newEntry New user's data object.
 * @throws 409 if username is taken.
 * @returns Void.
 */
async function createEntry(kv: KVNamespace, newEntry: UserData): Promise<void> {
    // Check -- anticipate error.
    await checkFor(kv, newEntry.username);

    // Add JSON-encoded data.
    await kv.put(newEntry.username.toLowerCase(), JSON.stringify(newEntry));

    return;
}


/**
 * Adds a review to a user's data.
 * @param kv Expects CF KV namepsace.
 * @param username The user who is being reviewed.
 * @param review The list of descriptor codes.
 */
async function addReview(kv: KVNamespace, username: string, review: number[]): Promise<void> {
    // Get.
    let userData = await checkFor(kv, username, true) as UserData;

    // Alter.
    userData.reviews.push(review);

    // Re-export
    await kv.put(username.toLowerCase(), JSON.stringify(userData));
}


export {
    checkFor,
    createEntry,
    addReview,
};
