import { useQuery } from '@tanstack/react-query'
import { PropertyForm } from './components/PropertyForm'
import { RiskAssessment } from './components/RiskAssessment'
import { fetchRiskAssessment } from './api/riskAssessment'
import { PropertyData } from './types'
import './App.css'
import { useState } from 'react'

function App() {
    const [formData, setFormData] = useState<PropertyData | null>(null)

    const { data: assessment, isLoading, error } = useQuery({
        queryKey: ['riskAssessment', formData],
        queryFn: () => fetchRiskAssessment(formData!),
        enabled: !!formData, 
        gcTime: 1000 * 60 * 30, 
        staleTime: 1000 * 60 * 5, 
        retry: false, 
    })

    const handleSubmit = async (data: PropertyData) => {
        setFormData(data)
    }

    return (
        <div className="container">
            <h1>Multi-Family Property Risk Assistant</h1>

            <PropertyForm onSubmit={handleSubmit} isLoading={isLoading} />

            {error && (
                <div className="error">
                    <h3>Error</h3>
                    <p>{error.message}</p>
                </div>
            )}

            {isLoading && (
                <div className="loading">
                    <div className="loading-spinner"></div>
                    <p>Generating your risk assessment...</p>
                </div>
            )}

            {assessment?.risk_assessment && (
                <RiskAssessment assessment={assessment.risk_assessment} />
            )}
        </div>
    )
}

export default App 