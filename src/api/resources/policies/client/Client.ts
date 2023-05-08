/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Axle from "../../..";
import URLSearchParams from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Policies {
    interface Options {
        environment?: environments.AxleEnvironment | string;
        clientId: core.Supplier<string>;
        clientSecret: core.Supplier<string>;
    }
}

export class Policies {
    constructor(protected readonly options: Policies.Options) {}

    public async getPolicy(id: string, request: Axle.GetPolicyRequest): Promise<Axle.GetPolicyResponse> {
        const { expand, accessToken } = request;
        const _queryParams = new URLSearchParams();
        if (expand != null) {
            _queryParams.append("expand", expand.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.AxleEnvironment.Production, `policies/${id}`),
            method: "GET",
            headers: {
                "x-client-id": await core.Supplier.get(this.options.clientId),
                "x-client-secret": await core.Supplier.get(this.options.clientSecret),
                "x-access-token": accessToken,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.GetPolicyResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
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
