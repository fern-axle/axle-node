/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Axle from "../../api";
import * as core from "../../core";

export const Carrier: core.serialization.ObjectSchema<serializers.Carrier.Raw, Axle.Carrier> =
    core.serialization.object({
        id: core.serialization.string(),
        name: core.serialization.string(),
        domain: core.serialization.string(),
        address: core.serialization.lazyObject(async () => (await import("..")).Address),
        phone: core.serialization.string(),
        logoUrl: core.serialization.string().optional(),
        modifiedAt: core.serialization.string(),
    });

export declare namespace Carrier {
    interface Raw {
        id: string;
        name: string;
        domain: string;
        address: serializers.Address.Raw;
        phone: string;
        logoUrl?: string | null;
        modifiedAt: string;
    }
}
