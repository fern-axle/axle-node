/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { AxleApi } from "@fern-api/axle";
import * as core from "../../core";

export const Vehicle: core.serialization.ObjectSchema<serializers.Vehicle.Raw, AxleApi.Vehicle> =
    core.serialization.object({
        bodyStyle: core.serialization.string().optional(),
        vin: core.serialization.string(),
        model: core.serialization.string(),
        year: core.serialization.string(),
        make: core.serialization.string(),
    });

export declare namespace Vehicle {
    interface Raw {
        bodyStyle?: string | null;
        vin: string;
        model: string;
        year: string;
        make: string;
    }
}
