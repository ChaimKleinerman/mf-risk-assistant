from typing import List
from pydantic import BaseModel, Field

class PropertyData(BaseModel):
    property_age: int = Field(..., description="Age of the property in years")
    number_of_units: int = Field(..., description="Number of units in the property")
    construction_type: str = Field(..., description="Type of construction (e.g., wood frame, concrete, steel)")
    location: str = Field(..., description="Location of the property")
    safety_features: List[str] = Field(..., description="List of safety features present in the property")
    include_risk_factors: bool = Field(True, description="Whether to include risk factors analysis")
    include_insurance_concepts: bool = Field(True, description="Whether to include insurance considerations")

    class Config:
        json_schema_extra = {
            "example": {
                "property_age": 25,
                "number_of_units": 50,
                "construction_type": "Wood Frame",
                "location": "New York, NY",
                "safety_features": ["Fire Sprinklers", "Security Cameras"],
                "include_risk_factors": True,
                "include_insurance_concepts": True
            }
        }

class RiskAssessment(BaseModel):
    risk_assessment: str
    property_data: PropertyData 