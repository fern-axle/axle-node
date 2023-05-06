/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { AxleApi } from "@fern-api/axle";
import * as core from "../../core";

export const Insured: core.serialization.ObjectSchema<serializers.Insured.Raw, AxleApi.Insured> =
    core.serialization.object({
        property: core.serialization.string().optional(),
        firstName: core.serialization.string(),
        lastName: core.serialization.string(),
        dateOfBirthYear: core.serialization.string().optional(),
        licenseNo: core.serialization.string().optional(),
        licenseState: core.serialization.string().optional(),
        licenseStatus: core.serialization.string().optional(),
        dateOfBirth: core.serialization.string().optional(),
        type: core.serialization.string().optional(),
    });

export declare namespace Insured {
    interface Raw {
        property?: string | null;
        firstName: string;
        lastName: string;
        dateOfBirthYear?: string | null;
        licenseNo?: string | null;
        licenseState?: string | null;
        licenseStatus?: string | null;
        dateOfBirth?: string | null;
        type?: string | null;
    }
}
