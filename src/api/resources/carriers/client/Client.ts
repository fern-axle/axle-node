/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import { Axle } from "@fern-api/axle";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Carriers {
    interface Options {
        environment: string;
        apiKey?: core.Supplier<string>;
        clientId: string;
        clientSecret: string;
    }
}

export class Carriers {
    constructor(private readonly options: Carriers.Options) {}

    public async getCarrier(id: string): Promise<Axle.GetCarrierResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `carriers/${id}`),
            method: "GET",
            headers: {
                "x-client-id": this.options.clientId,
                "x-client-secret": this.options.clientSecret,
                "x-access-token": await core.Supplier.get(this.options.apiKey),
            },
        });
        if (_response.ok) {
            return await serializers.GetCarrierResponse.parseOrThrow(
                _response.body as serializers.GetCarrierResponse.Raw,
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

    public async getCarriers(): Promise<Axle.GetCarriersResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "carriers"),
            method: "GET",
            headers: {
                "x-client-id": this.options.clientId,
                "x-client-secret": this.options.clientSecret,
                "x-access-token": await core.Supplier.get(this.options.apiKey),
            },
        });
        if (_response.ok) {
            return await serializers.GetCarriersResponse.parseOrThrow(
                _response.body as serializers.GetCarriersResponse.Raw,
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
