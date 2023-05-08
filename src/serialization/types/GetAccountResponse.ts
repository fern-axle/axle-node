/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { Axle } from "@fern-api/axle";
import * as core from "../../core";

export const GetAccountResponse: core.serialization.ObjectSchema<
    serializers.GetAccountResponse.Raw,
    Axle.GetAccountResponse
> = core.serialization.object({
    success: core.serialization.lazy(async () => (await import("..")).Success).optional(),
    data: core.serialization.lazyObject(async () => (await import("..")).Account).optional(),
});

export declare namespace GetAccountResponse {
    interface Raw {
        success?: serializers.Success.Raw | null;
        data?: serializers.Account.Raw | null;
    }
}
