import logging
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from services.risk_assessment import RiskAssessmentService
from models.property import PropertyData, RiskAssessment
from config import GOOGLE_API_KEY, CORS_ORIGINS, HOST, PORT

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Risk Assessment API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

risk_assessment_service = RiskAssessmentService(GOOGLE_API_KEY)

@app.get("/")
async def root():
    return {"message": "Risk Assessment API is running"}

@app.post("/assess-risk", response_model=RiskAssessment)
async def assess_risk(property_data: PropertyData):
    try:
        assessment = await risk_assessment_service.generate_assessment(property_data)
        return assessment
    except Exception as e:
        logger.error(f"Error generating risk assessment: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host=HOST, port=PORT) 