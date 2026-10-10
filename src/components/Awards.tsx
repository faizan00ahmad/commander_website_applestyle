import { awardsText } from "@/content/data";
import Reveal from "./Reveal";

export default function Awards() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="awards">
            <div className="cert"><img src="/img/certificate-1-1.jpg" alt="Certificate" /></div>
            <div className="cert"><img src="/img/certificate-1-2.jpg" alt="Certificate" /></div>
            <div>
              <div className="eyebrow">Recognition</div>
              <h2>Winning awards</h2>
              <p className="lead" style={{ marginTop: 16 }}>{awardsText}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
