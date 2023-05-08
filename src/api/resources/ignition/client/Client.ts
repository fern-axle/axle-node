/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import { Axle } from "@fern-api/axle";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Ignition {
    interface Options {
        environment: string;
        apiKey?: core.Supplier<string>;
        clientId: string;
        clientSecret: string;
    }
}

export class Ignition {
    constructor(private readonly options: Ignition.Options) {}

    public async startIgnition(request: Axle.StartIgnitionRequest = {}): Promise<Axle.StartIgnitionResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "ignition"),
            method: "POST",
            headers: {
                "x-client-id": this.options.clientId,
                "x-client-secret": this.options.clientSecret,
                "x-access-token": await core.Supplier.get(this.options.apiKey),
            },
            body: await serializers.StartIgnitionRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.StartIgnitionResponse.parseOrThrow(
                _response.body as serializers.StartIgnitionResponse.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.AxleError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AxleError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AxleTimeoutError();
            case "unknown":
                throw new errors.AxleError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
