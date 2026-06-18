import React from 'react';
import { MessageIcon, BarChartIcon, BookOpenIcon, TargetIcon, CheckCircleIcon } from '../components/Icons';

function Features() {
  return (
    <div style={{ padding: '4rem 5%', minHeight: 'calc(100vh - 80px)' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="hero-title">
          Powerful <span className="highlight">Features</span>
        </h1>
        <p className="hero-subtitle" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Discover the tools that will help you prepare and ace your next interview.
        </p>
      </div>

      <div className="features-grid" style={{ marginTop: '2rem' }}>
        <div className="feature-card">
          <div className="feature-icon" style={{ backgroundColor: "#7b3fe4" }}>
            <MessageIcon />
          </div>
          <h3>Realistic AI Mock Interviews</h3>
          <p>Practice with our advanced AI that mimics real interview scenarios, customized for your specific role and industry.</p>
          <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#9ca3af' }}>
              <span style={{ color: '#22c55e' }}><CheckCircleIcon /></span> Real-time conversational AI
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#9ca3af' }}>
              <span style={{ color: '#22c55e' }}><CheckCircleIcon /></span> Role-specific questions
            </li>
          </ul>
        </div>

        <div className="feature-card">
          <div className="feature-icon" style={{ backgroundColor: "#22c55e" }}>
            <BarChartIcon />
          </div>
          <h3>Comprehensive Smart Feedback</h3>
          <p>Get instant, detailed analysis on your answers, highlighting strengths and pinpointing areas for improvement.</p>
          <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#9ca3af' }}>
              <span style={{ color: '#22c55e' }}><CheckCircleIcon /></span> Tone and clarity analysis
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#9ca3af' }}>
              <span style={{ color: '#22c55e' }}><CheckCircleIcon /></span> Actionable improvement tips
            </li>
          </ul>
        </div>

        <div className="feature-card">
          <div className="feature-icon" style={{ backgroundColor: "#f97316" }}>
            <BookOpenIcon />
          </div>
          <h3>Personalized Learning Plan</h3>
          <p>We generate a custom roadmap based on your interview performance to efficiently focus your study time.</p>
          <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#9ca3af' }}>
              <span style={{ color: '#22c55e' }}><CheckCircleIcon /></span> Curated study materials
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#9ca3af' }}>
              <span style={{ color: '#22c55e' }}><CheckCircleIcon /></span> Focused skill building
            </li>
          </ul>
        </div>

        <div className="feature-card">
          <div className="feature-icon" style={{ backgroundColor: "#3b82f6" }}>
            <TargetIcon />
          </div>
          <h3>Track Progress & Improve</h3>
          <p>Monitor your growth over time with clear metrics and history of past interview performances.</p>
          <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#9ca3af' }}>
              <span style={{ color: '#22c55e' }}><CheckCircleIcon /></span> Performance dashboard
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#9ca3af' }}>
              <span style={{ color: '#22c55e' }}><CheckCircleIcon /></span> Readiness scoring
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Features;
