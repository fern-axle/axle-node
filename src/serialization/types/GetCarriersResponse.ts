/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { Axle } from "@fern-api/axle";
import * as core from "../../core";

export const GetCarriersResponse: core.serialization.ObjectSchema<
    serializers.GetCarriersResponse.Raw,
    Axle.GetCarriersResponse
> = core.serialization.object({
    success: core.serialization.lazy(async () => (await import("..")).Success).optional(),
    data: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).Carrier)).optional(),
});

export declare namespace GetCarriersResponse {
    interface Raw {
        success?: serializers.Success.Raw | null;
        data?: serializers.Carrier.Raw[] | null;
    }
}
