import "./projects.css";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export default function Projects() {
  return (
    <div className="projects-page">
      {/* Background blobs */}
      <div className="projectblobblue"></div>
      <div className="projectblobpurple"></div>

      {/* Title */}
      <h1 className={`${greatVibes.className} projects-title`}>Projects</h1>

      {/* Cards */}
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-header">
            <em>NEXT for Autism DSP</em>
          </div>
          <div className="project-body">
            Developed interactive dashboards with drill-down analytics, leaderboards, and self-report vs observer comparisons

          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <em>Color-tracking robot</em>
          </div>
          <div className="project-body">
            Computer vision to identify shape and color
            
            w/ ultrasonic sensors for adaptive autonomous movement
            Skills: Raspberry Pi, Python, 
          </div>
        </div>

        <div className="project-card">
          <div className="project-header">
            <em>Tech Challenge: Kinetic Commotion</em>
          </div>
          <div className="project-body">
            Won globally best overall with analog timed communication system made from upcycled household items
          </div>
        </div>
      </div>
    </div>
  );
}