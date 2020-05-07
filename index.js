"use strict";

/**
 * Clamp the number of occurrences of a list of items.
 *
 * @param {number} maximum Maximum occurrences for an item.
 * @param {any[]} Items to clamp.
 *
 * @return {any[]} The clamped items.
 *
 * @example
 * maximumOccurrences(1, [1, 2, 2, 2, 3, 3]); // [1, 2, 3]
 * maximumOccurrences(2, [1, 2, 2, 2, 3, 3]); // [1, 2, 2, 3, 3]
 */
module.exports = function clampOccurrences(maximum, items) {
    let result = []

    // If there is no maximum or maximum is 0 return an empty array
    // If there is no items return an empty array
    if (!maximum || !items)
        return result


    // Convert the items array to a set to have only unique values
    const itemsSet = new Set(items)

    // Convert the set to a map to have a key value pair of the item's value with its occurences
    const itemsMap = new Map([...itemsSet].map(v => [v, 0]))



    let i = 0


    // Loop through the whole array
    while (i < items.length) {
        const value = items[i]
        // Get the number of occurences for the current element through a Map
        const itemOccurence = itemsMap.get(value)

        // Check if the current element has reached the maximum number of appearences
        if (itemOccurence < maximum) {
            // If so, add the item to the result array
            result.push(value)
            // And set the correct number of appearences
            itemsMap.set(value, itemOccurence + 1)
        }

        i++
    }


    return result
}
