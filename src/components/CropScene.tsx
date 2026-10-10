// Animated hero art: crops growing on one side, LPG tank + pipeline + flame on the other.
export default function CropScene() {
  const stalks = [60, 105, 150, 195, 240];
  return (
    <div className="scene" aria-hidden>
      <svg viewBox="0 0 500 500">
        <defs>
          <radialGradient id="sun" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#6fd24a" stopOpacity=".5" /><stop offset="1" stopColor="#6fd24a" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="fl" cx="50%" cy="70%" r="60%">
            <stop offset="0" stopColor="#fff2c2" /><stop offset=".5" stopColor="#ff9a3c" /><stop offset="1" stopColor="#ff4d2e" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="250" cy="250" r="240" fill="url(#sun)" />
        <circle cx="250" cy="250" r="200" fill="none" style={{ stroke: "rgba(var(--fg),.08)" }} />
        <circle cx="250" cy="250" r="150" fill="none" strokeDasharray="3 9" style={{ stroke: "rgba(var(--fg),.1)" }} />
        <path d="M20 420 H480" style={{ stroke: "rgba(var(--fg),.22)" }} />
        {stalks.map((x, i) => {
          const top = 180 - (i % 2) * 30;
          return (
            <g key={x} className="sway" style={{ animationDelay: `${i * 0.4}s` }}>
              <path className="stalk" style={{ animationDelay: `${i * 0.35}s` }} d={`M${x} 420 C${x - 8} 330 ${x + 8} 270 ${x} ${top}`} />
              {[0, 1, 2, 3, 4].map((k) => (
                <g key={k}>
                  <ellipse className="grain-dot" style={{ animationDelay: `${2 + i * 0.35 + k * 0.12}s` }} cx={x - 7} cy={top + 10 + k * 14} rx="3.4" ry="7" transform={`rotate(-25 ${x - 7} ${top + 10 + k * 14})`} />
                  <ellipse className="grain-dot" style={{ animationDelay: `${2.1 + i * 0.35 + k * 0.12}s` }} cx={x + 7} cy={top + 16 + k * 14} rx="3.4" ry="7" transform={`rotate(25 ${x + 7} ${top + 16 + k * 14})`} />
                </g>
              ))}
            </g>
          );
        })}
        <g>
          <rect x="300" y="330" width="150" height="90" rx="45" fill="rgba(85,96,255,.16)" stroke="#5560ff" strokeWidth="2" />
          <path d="M325 345 V405 M375 335 V415 M425 345 V405" stroke="rgba(85,96,255,.35)" />
          <path className="flow" d="M375 330 V270 H440 V215" />
          <g className="flame" transform="translate(440 160)">
            <path d="M0 55 C-26 38 -20 8 0 -22 C4 4 26 18 20 40 C18 50 8 56 0 55Z" fill="url(#fl)" />
            <path d="M0 52 C-10 42 -8 28 0 14 C6 28 12 38 6 48Z" fill="#fff6d6" opacity=".9" />
          </g>
        </g>
        <circle cx="250" cy="250" r="3" fill="#6fd24a">
          <animate attributeName="r" values="3;9;3" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
      <div className="float-chip" style={{ top: "10%", left: "2%" }}><b>ISO 17025</b> R&amp;D certified</div>
      <div className="float-chip" style={{ bottom: "8%", left: "4%", animationDelay: "-2s" }}><b>50</b> territorial offices</div>
      <div className="float-chip" style={{ top: "30%", right: "0", animationDelay: "-4s" }}><b>300 MT</b> LPG / day</div>
    </div>
  );
}
