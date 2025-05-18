import { useState } from 'react';
import { PropertyData } from '../types';

interface PropertyFormProps {
    onSubmit: (data: PropertyData) => void;
    isLoading: boolean;
}

export const PropertyForm = ({ onSubmit, isLoading }: PropertyFormProps) => {
    const [formData, setFormData] = useState<PropertyData>({
        property_age: 0,
        number_of_units: 0,
        construction_type: '',
        location: '',
        safety_features: []
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'property_age' || name === 'number_of_units' ? Number(value) : value
        }));
    };

    const handleSafetyFeaturesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            safety_features: checked
                ? [...prev.safety_features, value]
                : prev.safety_features.filter(feature => feature !== value)
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
                <label htmlFor="property_age">Property Age (years):</label>
                <input
                    type="number"
                    id="property_age"
                    name="property_age"
                    value={formData.property_age}
                    onChange={handleInputChange}
                    required
                    min="0"
                />
            </div>

            <div className="form-group">
                <label htmlFor="number_of_units">Number of Units:</label>
                <input
                    type="number"
                    id="number_of_units"
                    name="number_of_units"
                    value={formData.number_of_units}
                    onChange={handleInputChange}
                    required
                    min="1"
                />
            </div>

            <div className="form-group">
                <label htmlFor="construction_type">Construction Type:</label>
                <select
                    id="construction_type"
                    name="construction_type"
                    value={formData.construction_type}
                    onChange={handleInputChange}
                    required
                >
                    <option value="">Select construction type</option>
                    <option value="Wood Frame">Wood Frame</option>
                    <option value="Concrete">Concrete</option>
                    <option value="Steel Frame">Steel Frame</option>
                    <option value="Masonry">Masonry</option>
                    <option value="Mixed">Mixed</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="location">Location (optional):</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g., New York, NY"
                />
            </div>

            <div className="form-group">
                <label>Safety Features:</label>
                <div className="checkbox-group">
                    <label>
                        <input
                            type="checkbox"
                            value="Fire Sprinklers"
                            checked={formData.safety_features.includes('Fire Sprinklers')}
                            onChange={handleSafetyFeaturesChange}
                        />
                        Fire Sprinklers
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Security Cameras"
                            checked={formData.safety_features.includes('Security Cameras')}
                            onChange={handleSafetyFeaturesChange}
                        />
                        Security Cameras
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Gated Access"
                            checked={formData.safety_features.includes('Gated Access')}
                            onChange={handleSafetyFeaturesChange}
                        />
                        Gated Access
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            value="Emergency Lighting"
                            checked={formData.safety_features.includes('Emergency Lighting')}
                            onChange={handleSafetyFeaturesChange}
                        />
                        Emergency Lighting
                    </label>
                </div>
            </div>

            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Assessing...' : 'Assess Risk'}
            </button>
        </form>
    );
}; 