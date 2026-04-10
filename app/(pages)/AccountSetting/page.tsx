"use client";

import DashboardSidebar from "@/app/Components/Sidebar";
import { useState } from "react";

// ── Icons ─────────────────────────────────────────────────────────────────────
const AVATAR        = "/images/avatar.png";
const ICON_CAMERA   = "/images/camera-photo.svg";
const ICON_TRASH    = "/images/trash-bin.svg";
const ICON_PHONE    = "/images/phone.svg";
const ICON_LOCK     = "/images/lock.svg";
const ICON_LOGOUT   = "/images/arrow-left-to-bracket.svg";
const ICON_CLOCK    = "/images/computer.svg";
const ICON_EDIT     = "/images/user-edit.svg";

// ── Toggle component ──────────────────────────────────────────────────────────
function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={[
        "relative inline-flex h-6 w-11 items-center rounded-full border transition-colors shrink-0",
        checked ? "bg-golden-1000 border-golden-1000" : "bg-gray-1400 border-gray-1100",
      ].join(" ")}
    >
      <span className={[
        "inline-block size-5 rounded-full bg-white shadow-sm transition-transform",
        checked ? "translate-x-[22px]" : "translate-x-[2px]",
      ].join(" ")} />
    </button>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function AccountSettingsPage() {
  // Form state
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "" });

  // Notification preferences
  const [notifs, setNotifs] = useState({
    emailNotifications: false,
    reviewReplies: true,
    commentReplies: true,
  });

  // Privacy
  const [visibility, setVisibility] = useState<"Public" | "Private">("Public");
  const [showActivity, setShowActivity] = useState(false);

  const handleInput = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [key]: e.target.value }));
  };

  return (
    <div className="flex min-h-screen bg-[#FAF7F2]">
    
<DashboardSidebar></DashboardSidebar>
      <main className="flex-1 min-w-0 p-4 pt-16 lg:px-6 lg:pt-10">
        <div className=" flex flex-col gap-6">

          {/* ── Header ── */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pt-2 lg:pt-0">
            <div className="flex flex-col gap-2">
              <h1 className="font-Inter font-semibold text-2xl sm:text-[32px] leading-6 text-black-1000">Your Profile</h1>
              <p className="font-Inter font-normal text-base leading-6 text-gray-1600">Manage your profile information and view your activity</p>
            </div>
            <button type="button"
              className="self-start flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-white text-sm font-medium w-[185px] justify-center transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(to bottom, #222121, #615a45)" }}>
              Edit profile
              <img src={ICON_EDIT} alt="" className="size-4 object-contain brightness-0 invert" />
            </button>
          </div>

          {/* ── Basic Account Information ── */}
          <div className="bg-white border border-gray-1100 rounded-2xl p-6 flex flex-col gap-6 shadow-sm">
            <div className="border-b border-gray-1100 pb-2">
              <h3 className="font-Inter font-medium text-xl leading-6 text-black-1000">Basic Account Information</h3>
            </div>

            {/* Avatar row */}
            <div className="flex items-center gap-[18px] flex-wrap">
              <img src={AVATAR} alt="Avatar" className="size-20 rounded-full object-cover shrink-0" />
              <button type="button"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-white text-sm font-medium transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(to bottom, #222121, #615a45)" }}>
                Change
                <img src={ICON_CAMERA} alt="" className="size-4 object-contain brightness-0 invert" />
              </button>
              <button type="button"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-gray-1100 text-sm font-medium text-black-1100 shadow-sm hover:bg-gray-1000 transition-colors">
                Remove
                <img src={ICON_TRASH} alt="" className="size-4 object-contain" />
              </button>
            </div>

            {/* Name row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[26px]">
              {[
                { label: "First name", key: "firstName" as const, placeholder: "" },
                { label: "Last name",  key: "lastName"  as const, placeholder: "" },
              ].map(f => (
                <div key={f.key} className="flex flex-col gap-2.5">
                  <label className="font-Inter font-medium text-sm leading-5 text-black-1000">
                    {f.label} <span className="text-[#C70036]">*</span>
                  </label>
                  <input type="text" value={form[f.key]} onChange={handleInput(f.key)} placeholder={f.placeholder}
                    className="w-full bg-gray-1000 border border-gray-1100 rounded-xl px-3 py-2.5 text-sm text-black-1000 placeholder:text-gray-1200 outline-none focus:ring-2 focus:ring-golden-1000 shadow-sm transition-all" />
                </div>
              ))}
            </div>

            {/* Email + Phone row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[26px]">
              <div className="flex flex-col gap-2.5">
                <label className="font-Inter font-medium text-sm leading-5 text-black-1000">
                  Email Address <span className="text-[#C70036]">*</span>
                </label>
                <input type="email" value={form.email} onChange={handleInput("email")} placeholder="Your full name"
                  className="w-full bg-gray-1000 border border-gray-1100 rounded-xl px-3 py-2.5 text-sm text-black-1000 placeholder:text-gray-1200 outline-none focus:ring-2 focus:ring-golden-1000 shadow-sm transition-all" />
              </div>
              <div className="flex flex-col gap-2.5">
                <label className="font-Inter font-medium text-sm leading-5 text-black-1000">
                  Phone Number <span className="text-[#C70036]">*</span>
                </label>
                <div className="flex items-center gap-2 bg-gray-1000 border border-gray-1100 rounded-xl px-3 py-2.5 shadow-sm">
                  <img src={ICON_PHONE} alt="" className="size-4 object-contain shrink-0" />
                  <input type="tel" value={form.phone} onChange={handleInput("phone")} placeholder="+41 XX XXX XX XX"
                    className="flex-1 bg-transparent outline-none text-sm text-black-1000 placeholder:text-gray-1200" />
                </div>
              </div>
            </div>

            {/* Reset password button */}
            <div>
              <button type="button"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-white text-sm font-medium transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(to bottom, #222121, #615a45)" }}>
                Reset password
                <img src={ICON_LOCK} alt="" className="size-4 object-contain brightness-0 invert" />
              </button>
            </div>
          </div>

          {/* ── Security ── */}
          <div className="bg-white border border-gray-1100 rounded-2xl p-6 flex flex-col gap-[18px] shadow-sm">
            <div className="border-b border-gray-1100 pb-2">
              <h3 className="font-Inter font-medium text-xl leading-6 text-black-1000">Security</h3>
            </div>

            {/* Last login */}
            <div className="flex items-center justify-between py-3 border-b border-gray-1100">
              <div className="flex flex-col gap-1">
                <p className="font-Inter font-medium text-sm text-black-1000">Last Login</p>
                <p className="font-Inter font-normal text-sm text-gray-1600">March 23, 2026 at 10:45 AM</p>
              </div>
              <img src={ICON_CLOCK} alt="" className="size-5 object-contain" />
            </div>

            {/* Active sessions */}
            <div className="flex items-center justify-between py-3 border-b border-gray-1100">
              <div className="flex flex-col gap-1">
                <p className="font-Inter font-medium text-sm text-black-1000">Active Sessions</p>
                <p className="font-Inter font-normal text-sm text-gray-1600">You are currently logged in on 2 devices</p>
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded-[4px] bg-[rgba(177,165,131,0.1)] font-Inter font-normal text-xs text-golden-1000">
                2 Active
              </span>
            </div>

            {/* Log out all */}
            <div>
              <button type="button"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-gray-1100 text-sm font-medium text-black-1100 shadow-sm hover:bg-gray-1000 transition-colors">
                <img src={ICON_LOGOUT} alt="" className="size-4 object-contain" />
                Log out from all devices
              </button>
            </div>
          </div>

          {/* ── Notification Preferences ── */}
          <div className="bg-white border border-gray-1100 rounded-2xl p-6 flex flex-col gap-[18px] shadow-sm">
            <div className="border-b border-gray-1100 pb-2">
              <h3 className="font-Inter font-medium text-xl leading-6 text-black-1000">Notification Preferences</h3>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { key: "emailNotifications" as const, label: "Email Notifications",   desc: "Receive email updates about your account activity" },
                { key: "reviewReplies"      as const, label: "Review Replies",         desc: "Get notified when someone replies to your reviews" },
                { key: "commentReplies"     as const, label: "Comment Replies",        desc: "Get notified when someone replies to your comments" },
              ].map(item => (
                <div key={item.key} className="flex items-center justify-between py-3 border-b border-gray-1100 last:border-b-0">
                  <div className="flex flex-col gap-1 flex-1 mr-8">
                    <p className="font-Inter font-medium text-sm text-black-1000">{item.label}</p>
                    <p className="font-Inter font-normal text-sm text-gray-1600">{item.desc}</p>
                  </div>
                  <Toggle checked={notifs[item.key]} onChange={() => setNotifs(p => ({ ...p, [item.key]: !p[item.key] }))} />
                </div>
              ))}
            </div>
          </div>

          {/* ── Privacy Settings ── */}
          <div className="bg-white border border-gray-1100 rounded-2xl p-6 flex flex-col gap-[18px] shadow-sm">
            <div className="border-b border-gray-1100 pb-2">
              <h3 className="font-Inter font-medium text-xl leading-6 text-black-1000">Privacy Settings</h3>
            </div>
            <div className="flex flex-col gap-4">

              {/* Profile visibility */}
              <div className="flex flex-col gap-3 py-3 border-b border-gray-1100">
                <p className="font-Inter font-medium text-sm text-black-1000">Profile Visibility</p>
                <div className="grid grid-cols-2 gap-3">
                  {(["Public", "Private"] as const).map(v => (
                    <button key={v} type="button" onClick={() => setVisibility(v)}
                      className={[
                        "h-[43px] rounded-xl text-sm font-Inter font-normal transition-colors",
                        visibility === v
                          ? "bg-[rgba(177,165,131,0.1)] border border-golden-1000 text-golden-1000"
                          : "bg-white border border-gray-1100 text-black-1000 hover:bg-gray-1000",
                      ].join(" ")}>
                      {v}
                    </button>
                  ))}
                </div>
                <p className="font-Inter font-normal text-sm text-gray-1600">
                  {visibility === "Public" ? "Your profile is visible to all LexKarma users" : "Your profile is private"}
                </p>
              </div>

              {/* Show Activity */}
              <div className="flex items-center justify-between py-3 border-b border-gray-1100">
                <div className="flex flex-col gap-1 flex-1 mr-8">
                  <p className="font-Inter font-medium text-sm text-black-1000">Show Activity</p>
                  <p className="font-Inter font-normal text-sm text-gray-1600">Display your reviews, comments, and interactions on your profile</p>
                </div>
                <Toggle checked={showActivity} onChange={() => setShowActivity(p => !p)} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
