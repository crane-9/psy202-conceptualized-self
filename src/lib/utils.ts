/**
 * This file contains miscellaneous utility functions to simplify the rest of the project and reduce repetition.
 */

interface EvFunction {
    (event: Event): void
};


// Combines an array of arrays into a single array.
function combineArrays(...arrs: any[]): any[] {
    let combined = [];

    for (let ar of arrs) {
        combined.push(...ar);
    }

    return combined;
}


// Counts how many times a value appears in an array of arrays.
function countAppearances(value: any, arrs: any[][]): number {
    let count = 0;

    for (let arr of arrs) {
        if (arr.includes(value)) count ++;
    }

    return count;
}

// On:mouseevent function caller.
function eventCall(func: Function): EvFunction {
    return (ev: Event) => { func(); };
}


// Transforms `FormData` into object.
function formToObj(data: FormData): any {
    let obj: any = {};
    for (let [name, value] of data) {
        obj[name] = value;
    }
    return obj;
}


// Function that generates a function call with the given unique parameter.
function functionWithArg(func: Function, ...args: any): Function {
    return () => { func(...args) };
}


// Removes an item from an array. Note: only removes one instance.
function removeItem(arr: any[], value: any): any[] {
    let idx = arr.indexOf(value);

    if (idx > -1) {
      arr.splice(idx, 1);
    }
    return arr;
  }


// Converts a string to an array of numbers.
function stringToNumArr(value: string, sep: string = ","): number[] {
    if (value.length <= 0) return [];

    let result: number[] = [];
    
    // Initial trim
    value = value.trim();

    // Convert and push.
    for (let val of value.split(sep)) {
        // Secondary trim and guard.
        val = val.trim()
        if (val.length <= 0) continue;

        result.push(Number(val));
    }

    return result;
}


// Ensures that a username is not too long and does not contain any inappropriate characters.
// Returns FALSE if invalid.
function validateUsername(username: string): boolean {
    // Easy invalidation.
    if (username.length > 50 || username.length <= 0) return false;

    let invalidChars = "\\/:.*|\"<>()";
    
    // Simple loop check.
    for (let char of invalidChars) {
        if (username.includes(char)) return false;
    }

    return true;
}


export {
    combineArrays,
    countAppearances,
    eventCall,
    formToObj,
    functionWithArg,
    removeItem,
    stringToNumArr,
    validateUsername,
};
