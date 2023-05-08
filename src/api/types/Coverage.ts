/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Axle } from "@fern-api/axle";

export interface Coverage {
    property?: string;
    code: Axle.CoverageCode;
    label: string;
    limitPerPerson?: number;
    limitPerAccident?: number;
    deductible?: number;
}
