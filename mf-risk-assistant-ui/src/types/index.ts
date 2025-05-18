export interface PropertyData {
    property_age: number;
    number_of_units: number;
    construction_type: string;
    location: string;
    safety_features: string[];
}

export interface RiskAssessment {
    risk_assessment: string;
    property_data: PropertyData;
}

export interface ErrorResponse {
    detail: string;
} 