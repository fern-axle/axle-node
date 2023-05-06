/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { AxleApi } from "@fern-api/axle";
import * as core from "../../core";

export const GetCarrierResponse: core.serialization.ObjectSchema<
    serializers.GetCarrierResponse.Raw,
    AxleApi.GetCarrierResponse
> = core.serialization.object({
    success: core.serialization.lazy(async () => (await import("..")).Success).optional(),
    data: core.serialization.lazyObject(async () => (await import("..")).Carrier).optional(),
});

export declare namespace GetCarrierResponse {
    interface Raw {
        success?: serializers.Success.Raw | null;
        data?: serializers.Carrier.Raw | null;
    }
}
