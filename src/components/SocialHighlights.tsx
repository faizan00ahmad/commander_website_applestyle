"use client";

import { socialHighlights } from "@/content/data";

export default function SocialHighlights() {
  const items = [...socialHighlights, ...socialHighlights];

  return (
    <div className="social-scroll-wrap">
      <div className="social-scroll">
        {items.map((v, i) => (
          <div className="social-card" key={`${v.id}-${i}`}>
            <iframe
              src={`https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/${v.id}/&show_text=false&width=260&height=260`}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              title={`Social highlight ${v.id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
