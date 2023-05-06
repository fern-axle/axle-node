/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { AxleApi } from "@fern-api/axle";
import * as core from "../../core";

export const ThirdParty: core.serialization.ObjectSchema<serializers.ThirdParty.Raw, AxleApi.ThirdParty> =
    core.serialization.object({
        property: core.serialization.string().optional(),
        type: core.serialization.lazy(async () => (await import("..")).ThirdPartyType),
        name: core.serialization.string(),
        address: core.serialization.lazyObject(async () => (await import("..")).Address).optional(),
    });

export declare namespace ThirdParty {
    interface Raw {
        property?: string | null;
        type: serializers.ThirdPartyType.Raw;
        name: string;
        address?: serializers.Address.Raw | null;
    }
}
