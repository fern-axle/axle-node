/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { Axle } from "@fern-api/axle";
import * as core from "../../core";

export const StartIgnitionResponse: core.serialization.ObjectSchema<
    serializers.StartIgnitionResponse.Raw,
    Axle.StartIgnitionResponse
> = core.serialization.object({
    success: core.serialization.lazy(async () => (await import("..")).Success),
    data: core.serialization.lazyObject(async () => (await import("..")).StartIgnitionResponseData),
});

export declare namespace StartIgnitionResponse {
    interface Raw {
        success: serializers.Success.Raw;
        data: serializers.StartIgnitionResponseData.Raw;
    }
}
