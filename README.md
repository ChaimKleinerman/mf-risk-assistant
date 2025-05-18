# Multi-Family Property Risk Assistant

An AI-powered tool that helps insurance professionals quickly assess risk factors for multi-family properties.

## Project Structure

- `mf-risk-assistant-api/`: FastAPI backend
- `mf-risk-assistant-ui/`: React TypeScript frontend

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd mf-risk-assistant-api
   ```

2. Create and activate a virtual environment:

   ```bash
   python -m venv venv
   # On Windows
   venv\Scripts\activate
   # On Unix/MacOS
   source venv/bin/activate
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```



4. Start the backend server:
   ```bash
   uvicorn main:app --reload
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
2. Fill out the property information form
3. Click "Assess Risk" to generate a risk assessment
4. Review the generated risk assessment report

## Features

- Property age and unit count analysis
- Construction type evaluation
- Safety features assessment
- Location-based risk factors
- AI-powered risk analysis using OpenAI's GPT model

## Technology Stack

- Backend:

  - FastAPI
  - OpenAI API
  - Python 3.8+

- Frontend:
  - React
  - TypeScript
  - Vite
  - Modern CSS

## Note

Make sure to keep your OpenAI API key secure and never commit it to version control.
