/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Axle from "../../api";
import * as core from "../../core";

export const Account: core.serialization.ObjectSchema<serializers.Account.Raw, Axle.Account> =
    core.serialization.object({
        id: core.serialization.string(),
        carrier: core.serialization.string(),
        firstName: core.serialization.string(),
        lastName: core.serialization.string(),
        phone: core.serialization.string().optional(),
        email: core.serialization.string().optional(),
        policies: core.serialization.list(core.serialization.string()),
        createdAt: core.serialization.string(),
        modifiedAt: core.serialization.string(),
        refreshedAt: core.serialization.string(),
    });

export declare namespace Account {
    interface Raw {
        id: string;
        carrier: string;
        firstName: string;
        lastName: string;
        phone?: string | null;
        email?: string | null;
        policies: string[];
        createdAt: string;
        modifiedAt: string;
        refreshedAt: string;
    }
}
