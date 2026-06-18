import React from 'react';
import { TargetIcon, PlayIcon, BarChartIcon, CheckCircleIcon } from '../components/Icons';

function HowItWorks() {
  const steps = [
    {
      icon: <TargetIcon />,
      title: "1. Set Your Goals",
      description: "Tell us about the role, industry, and experience level you are targeting. The AI customizes the interview to match real-world expectations for your specific position.",
      color: "#3b82f6"
    },
    {
      icon: <PlayIcon />,
      title: "2. Take a Mock Interview",
      description: "Engage in a live, conversational interview with our AI. Answer behavioral, technical, and situational questions just like you would in a real interview.",
      color: "#f97316"
    },
    {
      icon: <BarChartIcon />,
      title: "3. Review Your Feedback",
      description: "Instantly receive comprehensive feedback on your performance. The AI evaluates your content, tone, delivery, and provides specific suggestions for improvement.",
      color: "#7b3fe4"
    },
    {
      icon: <CheckCircleIcon />,
      title: "4. Improve and Ace It",
      description: "Follow your personalized learning plan to strengthen your weak areas. Practice again and track your progress until you are confident and ready.",
      color: "#22c55e"
    }
  ];

  return (
    <div style={{ padding: '4rem 5%', minHeight: 'calc(100vh - 80px)' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="hero-title">
          How It <span className="highlight">Works</span>
        </h1>
        <p className="hero-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Four simple steps to transform your interview skills and land your dream job.
        </p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {steps.map((step, index) => (
          <div key={index} style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            background: 'rgba(255, 255, 255, 0.03)', 
            padding: '2rem', 
            borderRadius: '16px',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            alignItems: 'flex-start'
          }}>
            <div className="feature-icon" style={{ backgroundColor: step.color, flexShrink: 0 }}>
              {step.icon}
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#f3f4f6' }}>{step.title}</h3>
              <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowItWorks;
