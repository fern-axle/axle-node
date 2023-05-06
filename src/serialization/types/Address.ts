/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { AxleApi } from "@fern-api/axle";
import * as core from "../../core";

export const Address: core.serialization.ObjectSchema<serializers.Address.Raw, AxleApi.Address> =
    core.serialization.object({
        addressLine1: core.serialization.string().optional(),
        country: core.serialization.string().optional(),
        addressLine2: core.serialization.string().optional(),
        state: core.serialization.string().optional(),
        city: core.serialization.string().optional(),
        postalCode: core.serialization.string().optional(),
    });

export declare namespace Address {
    interface Raw {
        addressLine1?: string | null;
        country?: string | null;
        addressLine2?: string | null;
        state?: string | null;
        city?: string | null;
        postalCode?: string | null;
    }
}