import React from 'react';
import { ArrowRightIcon, PlayIcon, CheckCircleIcon, ShieldIcon, TrendingUpIcon, MessageIcon, BarChartIcon, BookOpenIcon, TargetIcon, LogoIcon } from '../components/Icons';
import heroImage from '../assets/image_right_panel.png';

function Home() {
  const targetAppUrl = "https://ai-interview-coach-project.streamlit.app/";

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge">
            <span>🚀</span> Your Personal AI Interviewer
          </div>
          <h1 className="hero-title">
            Crack Interviews with <span className="highlight">Confidence</span>
          </h1>
          <p className="hero-subtitle">
            AI-powered mock interviews, real-time feedback, and personalized
            learning plans to help you ace your dream job.
          </p>
          <div className="hero-actions">
            <a
              href={targetAppUrl}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Free Practice <ArrowRightIcon />
            </a>
            <a href="#" className="btn btn-outline">
              View Demo <PlayIcon />
            </a>
          </div>
          <div className="hero-tags">
            <div className="tag success">
              <CheckCircleIcon /> AI Powered
            </div>
            <div className="tag info">
              <ShieldIcon /> Adaptive Learning
            </div>
            <div className="tag primary">
              <TrendingUpIcon /> Track Progress
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={heroImage}
            alt="AI Interview Coach Interface"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = "none";
              if (e.target.nextSibling)
                e.target.nextSibling.style.display = "block";
            }}
          />
          <div
            style={{
              display: "none",
              width: "100%",
              height: "400px",
              background: "linear-gradient(135deg, #1e1e2d 0%, #0b0c10 100%)",
              borderRadius: "16px",
              border: "1px solid #272733",
              boxShadow: "0 20px 40px rgba(123, 63, 228, 0.2)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <LogoIcon />
              <p style={{ marginTop: "1rem", color: "#9ca3af" }}>
                AI Interview Coach Interface
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-grid">
        <div className="feature-card">
          <div className="feature-icon" style={{ backgroundColor: "#7b3fe4" }}>
            <MessageIcon />
          </div>
          <h3>AI Mock Interviews</h3>
          <p>Realistic interviews tailored to your role and experience.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon" style={{ backgroundColor: "#22c55e" }}>
            <BarChartIcon />
          </div>
          <h3>Smart Feedback</h3>
          <p>Get detailed feedback on your answers and performance.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon" style={{ backgroundColor: "#f97316" }}>
            <BookOpenIcon />
          </div>
          <h3>Personalized Learning</h3>
          <p>Receive a custom learning plan based on your weak areas.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon" style={{ backgroundColor: "#3b82f6" }}>
            <TargetIcon />
          </div>
          <h3>Track & Improve</h3>
          <p>Track your progress and see improvement over time.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
