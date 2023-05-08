/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import { Axle } from "@fern-api/axle";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Policies {
    interface Options {
        environment: string;
        apiKey?: core.Supplier<string>;
        clientId: string;
        clientSecret: string;
    }
}

export class Policies {
    constructor(private readonly options: Policies.Options) {}

    public async getPolicy(id: string, request: Axle.GetPolicyRequest = {}): Promise<Axle.GetPolicyResponse> {
        const { expand } = request;
        const _queryParams = new URLSearchParams();
        if (expand != null) {
            _queryParams.append("expand", expand.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `policies/${id}`),
            method: "GET",
            headers: {
                "x-client-id": this.options.clientId,
                "x-client-secret": this.options.clientSecret,
                "x-access-token": await core.Supplier.get(this.options.apiKey),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.GetPolicyResponse.parseOrThrow(
                _response.body as serializers.GetPolicyResponse.Raw,
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
