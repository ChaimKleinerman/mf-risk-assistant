import os
from dotenv import load_dotenv


load_dotenv()

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
if not GOOGLE_API_KEY:
    raise ValueError("GOOGLE_API_KEY environment variable is not set")


HOST = "0.0.0.0"
PORT = 8000


CORS_ORIGINS = ["http://localhost:5173"]  

