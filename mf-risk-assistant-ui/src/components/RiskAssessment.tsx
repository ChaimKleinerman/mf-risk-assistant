interface RiskAssessmentProps {
    assessment: string;
}

export const RiskAssessment = ({ assessment }: RiskAssessmentProps) => {
    const formatAssessment = (text: string) => {
        if (!text) return <p>No assessment data available</p>;

        // Remove the introductory text and property details section
        const cleanedText = text
            .replace(/^Okay, here's a risk assessment of the multi-family property, formatted exactly as requested, with specific details where possible and considerations based on typical best practices:\s*/i, '')
            .replace(/Property Details:[\s\S]*?Safety Features:[\s\S]*?\n\n/i, '');

        // Split into sections by double newlines
        const sections = cleanedText.split(/\n\n+/);

        return sections.map((section, index) => {
            const trimmed = section.trim();
            if (!trimmed) return null;

            // Check if this is a header (ends with a colon)
            if (trimmed.endsWith(':')) {
                return <h2 key={index} className="section-header">{trimmed}</h2>;
            }

            // Split the section into lines
            const lines = trimmed.split('\n');

            return (
                <div key={index} className="section-content">
                    {lines.map((line, lineIndex) => {
                        const trimmedLine = line.trim();
                        if (!trimmedLine) return null;

                        // Check if this is a subheader (contains a colon)
                        if (trimmedLine.includes(':')) {
                            return <h3 key={lineIndex} className="subsection-header">{trimmedLine}</h3>;
                        }

                        // Check if this is a numbered or bulleted item
                        if (/^[\d\.]+|^[\*\-]/.test(trimmedLine)) {
                            return <li key={lineIndex} className="list-item">{trimmedLine.replace(/^[\d\.]+|^[\*\-]\s*/, '')}</li>;
                        }

                        // Regular paragraph
                        return <p key={lineIndex} className="paragraph">{trimmedLine}</p>;
                    })}
                </div>
            );
        });
    };

    return (
        <div className="assessment">
            <h2>Risk Assessment</h2>
            <div className="assessment-content">
                {formatAssessment(assessment)}
            </div>
        </div>
    );
}; 