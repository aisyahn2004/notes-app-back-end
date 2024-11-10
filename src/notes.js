/* eslint-disable linebreak-style */
/**
 * @typedef {Object} Note
 * @property {string} id - The unique identifier of the note.
 * @property {string} title - The title of the note.
 * @property {string} createdAt - The creation date of the note.
 * @property {string} updatedAt - The last update date of the note.
 * @property {string[]} tags - An array of tags associated with the note.
 * @property {string} body - The body content of the note.
 */

/** @type {Note[]} */
const notes = [];

module.exports = notes;
