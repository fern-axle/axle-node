/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Axle from "../../api";
import * as core from "../../core";

export const Coverage: core.serialization.ObjectSchema<serializers.Coverage.Raw, Axle.Coverage> =
    core.serialization.object({
        property: core.serialization.string().optional(),
        code: core.serialization.lazy(async () => (await import("..")).CoverageCode),
        label: core.serialization.string(),
        limitPerPerson: core.serialization.number().optional(),
        limitPerAccident: core.serialization.number().optional(),
        deductible: core.serialization.number().optional(),
    });

export declare namespace Coverage {
    interface Raw {
        property?: string | null;
        code: serializers.CoverageCode.Raw;
        label: string;
        limitPerPerson?: number | null;
        limitPerAccident?: number | null;
        deductible?: number | null;
    }
}
