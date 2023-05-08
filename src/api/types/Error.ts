/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Axle } from "@fern-api/axle";

export interface Error {
    success?: Axle.Success;
    /** Provides a reason for why the operation failed, if available. */
    message?: string;
}
