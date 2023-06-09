/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * User to attach to Ignition session. If user is set, unique `id` must be provided.
 */
export interface User {
    /** Your application's unique user id. */
    id: string;
    /** User's first name. */
    firstName?: string;
    /** User's last name. */
    lastName?: string;
    /** User's email address. */
    email?: string;
    /** User's phone number in E.164 format. */
    phone?: string;
}
