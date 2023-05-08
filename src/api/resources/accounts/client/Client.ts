/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import { AxleApi } from "@fern-api/axle";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Accounts {
    interface Options {
        environment: string;
        apiKey?: core.Supplier<string>;
        clientId: string;
        clientSecret: string;
    }
}

export class Accounts {
    constructor(private readonly options: Accounts.Options) {}

    public async getAccount(id: string, request: AxleApi.GetAccountRequest = {}): Promise<AxleApi.GetAccountResponse> {
        const { expand } = request;
        const _queryParams = new URLSearchParams();
        if (expand != null) {
            _queryParams.append("expand", expand.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `accounts/${id}`),
            method: "GET",
            headers: {
                "x-client-id": this.options.clientId,
                "x-client-secret": this.options.clientSecret,
                "x-access-token": await core.Supplier.get(this.options.apiKey),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.GetAccountResponse.parseOrThrow(
                _response.body as serializers.GetAccountResponse.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.AxleApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.AxleApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.AxleApiTimeoutError();
            case "unknown":
                throw new errors.AxleApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
