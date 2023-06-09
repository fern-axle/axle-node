/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Axle from "../../api";
import * as core from "../../core";

export const ExchangeTokenResponse: core.serialization.ObjectSchema<
    serializers.ExchangeTokenResponse.Raw,
    Axle.ExchangeTokenResponse
> = core.serialization.object({
    success: core.serialization.lazy(async () => (await import("..")).Success),
    data: core.serialization.lazyObject(async () => (await import("..")).ExchangeTokenResponseData),
});

export declare namespace ExchangeTokenResponse {
    interface Raw {
        success: serializers.Success.Raw;
        data: serializers.ExchangeTokenResponseData.Raw;
    }
}
