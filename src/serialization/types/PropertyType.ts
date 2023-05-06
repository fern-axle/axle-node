/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { AxleApi } from "@fern-api/axle";
import * as core from "../../core";

export const PropertyType: core.serialization.Schema<serializers.PropertyType.Raw, AxleApi.PropertyType> =
    core.serialization.enum_(["vehicle"]);

export declare namespace PropertyType {
    type Raw = "vehicle";
}
