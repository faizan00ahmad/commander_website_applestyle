"use client";
import { useState, type FormEvent } from "react";
import { site } from "@/content/data";

function useMail(subject: string) {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = [...fd.entries()].map(([k, v]) => `${k}: ${v}`).join("\n");
    const subj = (fd.get("Subject") as string) || subject;
    location.href = `mailto:${site.emails[0]}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return { sent, submit };
}

export function ContactForm() {
  const { sent, submit } = useMail("Website enquiry");
  return (
    <form className="form" onSubmit={submit}>
      <div className="row">
        <label>Your Name<input name="Name" required /></label>
        <label>Your Email<input name="Email" type="email" required /></label>
      </div>
      <label>Subject<input name="Subject" required /></label>
      <label>Message<textarea name="Message" required /></label>
      <div><button className="btn primary" type="submit">Send Message! →</button></div>
      {sent && <div className="sent">Opening your email app to send the message…</div>}
    </form>
  );
}

export function CareerForm() {
  const { sent, submit } = useMail("Job application");
  return (
    <form className="form" onSubmit={submit}>
      <h3>Personal Info</h3>
      <div className="row">
        <label>Name of Candidate *<input name="Name" required /></label>
        <label>Email Address *<input name="Email" type="email" required /></label>
      </div>
      <div className="row">
        <label>Contact Number *<input name="Phone" required /></label>
        <label>Applying for the job of *<input name="Position" required /></label>
      </div>
      <h3>Qualification</h3>
      <div className="row">
        <label>Recent / Last Qualification *<input name="Qualification" required /></label>
        <label>Majors *<input name="Majors" required /></label>
      </div>
      <div className="row">
        <label>Institute<input name="Institute" /></label>
        <label>Passing Year<input name="Passing Year" /></label>
      </div>
      <h3>Experience</h3>
      <label>Tell us About Yourself<textarea name="About" /></label>
      <div><button className="btn primary" type="submit">Send Message! →</button></div>
      {sent && <div className="sent">Opening your email app to send the application…</div>}
    </form>
  );
}
