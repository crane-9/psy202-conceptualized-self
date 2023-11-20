import { error } from "@sveltejs/kit";

// For consistency, when the platform is unavailable.
function platformError(): void {
    console.log("PLATFORM UNAVAILABLE.");
    throw error(500, "application could not connect to platform database.");
}


export {
    platformError
}