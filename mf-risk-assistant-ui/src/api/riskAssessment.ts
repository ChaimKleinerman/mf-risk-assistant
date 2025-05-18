import { PropertyData, RiskAssessment, ErrorResponse } from '../types';

export const fetchRiskAssessment = async (propertyData: PropertyData): Promise<RiskAssessment> => {
    const response = await fetch('http://localhost:8000/assess-risk', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(propertyData),
    });

    if (!response.ok) {
        const errorData = await response.json() as ErrorResponse;
        throw new Error(errorData.detail || 'Failed to get risk assessment');
    }

    return response.json();
}; 