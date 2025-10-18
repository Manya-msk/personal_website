import "./research.css";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export default function Research() {
  return (
    <div className="research-page">
      {/* Background blobs */}
      <div className="blob blob-blue"></div>
      <div className="blob blob-purple"></div>

      {/* Title */}
      <h1 className={`${greatVibes.className} research-title`}>Research</h1>

      {/* Cards */}
      <div className="research-grid">
        <div className="research-card">
          <div className="research-header">
            <em>Search Engine Bias</em>
          </div>
          <div className="research-body">
            Accepted to International Journal of Undergraduate Research:

                 Deployed Haar Cascade Classifier to investigate bias in media U.S. congressional representation 
          </div>
        </div>

        <div className="research-card">
          <div className="research-header">
            <em>Analyzing Hate Speech on X</em>
          </div>
          <div className="research-body">
            Presented at Southern California Conference of Undergraduate Research: Built ML hate speech identifier and used Extended Moral Foundations Dictionary to study motivations of hate speech

          </div>
        </div>

        <div className="research-card">
          <div className="research-header">
            <em>Public Sentiment on Climate Change</em>
          </div>
          <div className="research-body">
            Published in International Journal of High School Research: 
            
            Used Python, VADER, Jupyter Notebooks, pandas, and data visualization to conduct temporal and spatial analysis on posts on X

          </div>
        </div>
      </div>
    </div>
  );
}
