import "./contact.css";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Background blobs */}
      <div className="blob-blue-contact"></div>
      <div className="blob-purple-contact"></div>

      {/* Title */}
      <h1 className={`${greatVibes.className} contact-title`}>Let's keep in touch!</h1>

      {/* Cards */}
      <div className="contact-grid">
        <div className="contact-card">
          <div className="contact-header">
            <em><a href="https://www.linkedin.com/in/manya-sinvhal-780ba5378/" target="_blank"><u>Linkden</u></a></em>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-header">
            <em><a href="https://github.com/Manya-msk" target="_blank"><u>Github</u></a></em>

          </div>
        </div>



        <div className="contact-card">
          <div className="contact-header">
            <em>manya.sinvhal@berkeley.edu</em>

          </div>
        </div>
      </div>
    </div>
  );
}
