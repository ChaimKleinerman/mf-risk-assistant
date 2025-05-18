from google import genai
from models.property import PropertyData, RiskAssessment
from prompts.risk_assessment_prompts import get_base_prompt, get_risk_factors_prompt, get_insurance_prompt, mcp
from fastmcp import Context

class RiskAssessmentService:
    def __init__(self, api_key: str):
        self.client = genai.Client(api_key=api_key)

    def generate_risk_assessment_prompt(self, property_data: PropertyData) -> str:
        """Generates a structured risk assessment prompt for the property."""
        prompt = get_base_prompt(property_data, Context(fastmcp=mcp))
        
        if property_data.include_risk_factors:
            prompt += get_risk_factors_prompt(Context(fastmcp=mcp))
            
        if property_data.include_insurance_concepts:
            prompt += get_insurance_prompt(Context(fastmcp=mcp))
            
        prompt += "\n\nIMPORTANT: Start directly with the assessment. Do not include any introductory text, disclaimers, or explanations about the assessment process."
        
        return prompt

    async def generate_assessment(self, property_data: PropertyData) -> RiskAssessment:
        prompt = self.generate_risk_assessment_prompt(property_data)
        
        try:
            response = self.client.models.generate_content(
                model="gemini-2.0-flash",
                contents=prompt
            )
            
            return RiskAssessment(
                risk_assessment=response.text,
                property_data=property_data
            )
        except Exception as e:
            raise Exception(f"Failed to generate risk assessment: {str(e)}") 