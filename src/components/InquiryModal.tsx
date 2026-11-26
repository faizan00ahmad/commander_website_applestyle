"use client";

import { useState, useEffect, useCallback } from "react";

export default function InquiryModal({
  open,
  onClose,
  productName,
  productSize,
}: {
  open: boolean;
  onClose: () => void;
  productName: string;
  productSize: string;
}) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, handleKey]);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    }
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry about ${productName} (${productSize})`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nProduct: ${productName} (${productSize})\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:hr@comdgroup.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="inquiry-overlay" onClick={onClose}>
      <div className="inquiry-modal" onClick={(e) => e.stopPropagation()}>
        <button className="inquiry-close" onClick={onClose} aria-label="Close">&times;</button>

        {submitted ? (
          <div className="inquiry-success">
            <div className="inquiry-success-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3db86a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h3>Email Client Opened!</h3>
            <p>Your inquiry details have been pre-filled in your email client. Just hit send!</p>
            <button className="btn btn-primary" onClick={onClose} style={{ marginTop: 16 }}>Close</button>
          </div>
        ) : (
          <>
            <h3 className="inquiry-title">Product Inquiry</h3>
            <p className="inquiry-subtitle">Inquiring about <strong>{productName}</strong> ({productSize})</p>

            <form onSubmit={handleSubmit} className="inquiry-form">
              <div className="inquiry-field">
                <label htmlFor="inq-name">Full Name</label>
                <input
                  id="inq-name"
                  type="text"
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="inquiry-field">
                <label htmlFor="inq-email">Email Address</label>
                <input
                  id="inq-email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="inquiry-field">
                <label htmlFor="inq-phone">Phone Number</label>
                <input
                  id="inq-phone"
                  type="tel"
                  required
                  placeholder="+92 300 1234567"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
              <div className="inquiry-field">
                <label htmlFor="inq-msg">Your Inquiry</label>
                <textarea
                  id="inq-msg"
                  required
                  rows={3}
                  placeholder="What would you like to know about this product?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn-primary inquiry-submit">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Send Inquiry
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
