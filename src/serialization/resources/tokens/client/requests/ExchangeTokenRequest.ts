/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Axle from "../../../../../api";
import * as core from "../../../../../core";

export const ExchangeTokenRequest: core.serialization.Schema<
    serializers.ExchangeTokenRequest.Raw,
    Axle.ExchangeTokenRequest
> = core.serialization.object({
    authCode: core.serialization.string(),
});

export declare namespace ExchangeTokenRequest {
    interface Raw {
        authCode: string;
    }
}
