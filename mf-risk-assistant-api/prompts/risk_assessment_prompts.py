from fastmcp import FastMCP, Context
from models.property import PropertyData

mcp = FastMCP(
    name="Risk Assessment Server",
    instructions="""
    This server provides risk assessment tools for multi-family properties.
    Each prompt is designed to generate specific parts of the risk assessment.
    """
)

@mcp.prompt(
    name="base_assessment",
    description="Base template for risk assessment",
    tags={"risk", "property", "assessment"}
)

def get_base_prompt(property_data: PropertyData, ctx: Context) -> str:
    return f"""You are an expert insurance risk assessor. Analyze this multi-family property and provide a risk assessment following this EXACT format. Do not include any introductory text or disclaimers. Start directly with the assessment:

Property Details:
- Age: {property_data.property_age} years
- Number of Units: {property_data.number_of_units}
- Construction Type: {property_data.construction_type}
- Location: {property_data.location}
- Safety Features: {', '.join(property_data.safety_features)}

OVERALL RISK ASSESSMENT:
Risk Level: [LOW/MEDIUM/HIGH]
Summary: [2-3 sentences]

PROPERTY CONDITION:
• Age-Related Risks: [List specific risks]
• Structural Integrity: [List specific concerns]
• Maintenance Needs: [List specific needs]

SAFETY AND SECURITY:
• Current Measures: [List existing features]
• Vulnerabilities: [List specific vulnerabilities]
• Required Improvements: [List specific improvements]

LOCATION RISK FACTORS:
• Geographic Risks: [List specific risks]
• Environmental Factors: [List specific factors]
• Neighborhood Considerations: [List specific considerations]

RECOMMENDATIONS:
• Immediate Actions (High Priority):
  - [List specific actions]
• Short-term Improvements (Medium Priority):
  - [List specific improvements]
• Long-term Considerations (Low Priority):
  - [List specific considerations]"""

@mcp.prompt(
    name="risk_factors",
    description="Risk factors analysis section",
    tags={"risk", "factors"}
)
def get_risk_factors_prompt(ctx: Context) -> str:
    return """
RISK FACTORS ANALYSIS:
• Property-Specific Risks:
  - [List property-specific risk factors]
• Market-Related Risks:
  - [List market-related risk factors]
• Operational Risks:
  - [List operational risk factors]
• Financial Risks:
  - [List financial risk factors]"""

@mcp.prompt(
    name="insurance_considerations",
    description="Insurance considerations section",
    tags={"insurance", "coverage"}
)

def get_insurance_prompt(ctx: Context) -> str:
    return """
INSURANCE CONSIDERATIONS:
• Recommended Coverage Types:
  - [List recommended insurance types]
• Coverage Limits:
  - [List suggested coverage limits]
• Policy Considerations:
  - [List important policy considerations]
• Risk Mitigation Impact:
  - [List how risk mitigation affects insurance]""" 