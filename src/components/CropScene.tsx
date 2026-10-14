// Lightweight hero art (phones, no-WebGL, reduced motion): a wheat field under attack by pests,
// a protective spray drone, and a shield that forms over the healthy crop. Pure SVG + CSS, no scripts.
export default function CropScene() {
  const stalks = [58, 100, 142, 184, 226, 268, 310];
  const pests = [[92, 150], [170, 118], [250, 140], [130, 96], [296, 112]];
  return (
    <div className="scene" aria-hidden>
      <svg viewBox="0 0 500 500">
        <defs>
          <radialGradient id="cs-sun" cx="50%" cy="55%" r="50%">
            <stop offset="0" stopColor="#3db86a" stopOpacity=".42" /><stop offset="1" stopColor="#3db86a" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="cs-shield" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3db86a" stopOpacity=".5" /><stop offset="1" stopColor="#3db86a" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="250" cy="270" r="235" fill="url(#cs-sun)" />
        <path d="M20 420 H480" style={{ stroke: "rgba(var(--fg),.25)" }} />
        <path d="M40 430 H460" style={{ stroke: "rgba(var(--fg),.12)" }} strokeDasharray="4 8" />

        {/* protective shield over the crop */}
        <path className="cs-shield" d="M40 420 C40 190 460 190 460 420" fill="url(#cs-shield)" stroke="#3db86a" strokeWidth="2" strokeDasharray="6 8" />

        {/* wheat: stressed colour fades to healthy as the loop heals */}
        {stalks.map((x, i) => {
          const top = 200 + (i % 3) * 20;
          return (
            <g key={x} className="sway" style={{ animationDelay: `${i * 0.35}s` }}>
              <path className="stalk" style={{ animationDelay: `${i * 0.3}s` }} d={`M${x} 420 C${x - 8} 340 ${x + 8} 280 ${x} ${top}`} />
              {[0, 1, 2, 3, 4].map((k) => (
                <g key={k}>
                  <ellipse className="grain-dot" style={{ animationDelay: `${1.8 + i * 0.3 + k * 0.1}s` }} cx={x - 7} cy={top + 8 + k * 14} rx="3.4" ry="7" transform={`rotate(-25 ${x - 7} ${top + 8 + k * 14})`} />
                  <ellipse className="grain-dot" style={{ animationDelay: `${1.9 + i * 0.3 + k * 0.1}s` }} cx={x + 7} cy={top + 14 + k * 14} rx="3.4" ry="7" transform={`rotate(25 ${x + 7} ${top + 14 + k * 14})`} />
                </g>
              ))}
            </g>
          );
        })}

        {/* pests that dissolve when the spray arrives */}
        {pests.map(([x, y], i) => (
          <g key={i} className="cs-pest" style={{ animationDelay: `${i * 0.5}s`, transformOrigin: `${x}px ${y}px` }}>
            <circle cx={x} cy={y} r="6" fill="#d6303a" />
            <path d={`M${x - 5} ${y - 3} l-7 -5 M${x + 5} ${y - 3} l7 -5`} stroke="#d6303a" strokeWidth="2" strokeLinecap="round" />
          </g>
        ))}

        {/* spray drone with mist */}
        <g className="cs-drone">
          <rect x="378" y="86" width="64" height="12" rx="5" fill="#e8edf5" />
          <rect x="366" y="82" width="88" height="3" rx="1.5" style={{ fill: "rgba(var(--fg),.5)" }} />
          <circle cx="410" cy="106" r="7" fill="#3db86a" />
          {[0, 1, 2, 3, 4, 5].map((k) => (
            <circle key={k} className="cs-mist" cx={394 + k * 7} cy="118" r="2.6" fill="#7ff0b0" style={{ animationDelay: `${k * 0.22}s` }} />
          ))}
        </g>
      </svg>
      <div className="float-chip" style={{ top: "10%", left: "2%" }}><b>ISO 17025</b> R&amp;D certified</div>
      <div className="float-chip" style={{ bottom: "7%", left: "4%", animationDelay: "-2s" }}><b>50</b> territorial offices</div>
      <div className="float-chip" style={{ top: "30%", right: "0", animationDelay: "-4s" }}><b>Crop</b> protection</div>
    </div>
  );
}
