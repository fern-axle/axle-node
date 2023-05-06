/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import { AxleApi } from "@fern-api/axle";
import * as core from "../../core";

export const ThirdPartyType: core.serialization.Schema<serializers.ThirdPartyType.Raw, AxleApi.ThirdPartyType> =
    core.serialization.enum_(["lienholder", "lessor", "interest"]);

export declare namespace ThirdPartyType {
    type Raw = "lienholder" | "lessor" | "interest";
}