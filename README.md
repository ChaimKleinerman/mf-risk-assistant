# Multi-Family Property Risk Assessment

An AI-powered tool that helps insurance professionals quickly assess risk factors for multi-family properties using Google's Gemini AI.

> **Note**: This application is currently only supported on Windows operating systems.

## Project Structure

```
mf-risk-assistant/
├── mf-risk-assistant-api/     # FastAPI backend
│   ├── models/               # Data models
│   ├── prompts/             # AI prompt templates
│   ├── services/            # Business logic
│   └── main.py             # FastAPI application
│
└── mf-risk-assistant-ui/     # React frontend
    ├── src/                 # Source code
    ├── public/             # Static files
    └── package.json        # Node.js dependencies
```

## Features

- Comprehensive risk assessment for multi-family properties
- Property condition analysis
- Safety and security evaluation
- Location risk factor assessment
- Insurance coverage recommendations
- Customizable assessment options

## System Requirements

- Windows 10 or later
- Python 3.11 or higher
- Node.js 16 or higher

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd mf-risk-assistant-api
   ```

2. Create and activate a virtual environment:

   ```bash
   python -m venv venv
   venv\Scripts\activate
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```



4. Start the backend server:
   ```bash
   python main.py
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd mf-risk-assistant-ui
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Open your browser and navigate to `http://localhost:5173`
2. Fill out the property information form with:
   - Property age
   - Number of units
   - Construction type
   - Location
   - Safety features
3. Click "Assess Risk" to generate a risk assessment
4. Review the generated risk assessment report

## Technology Stack

### Backend

- FastAPI
- Google Gemini AI
- FastMCP for prompt management
- Python 3.8+

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Query for data fetching and caching

## API Documentation

Once the backend server is running, visit:

- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`



