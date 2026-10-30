"use client";

import { useState } from "react";

export function SettingsForm() {
  const [workspace, setWorkspace] = useState("Acme Inc.");
  const [email, setEmail] = useState("billing@acme.example");
  const [timezone, setTimezone] = useState("Asia/Tokyo");
  const [notifications, setNotifications] = useState(true);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [saving, setSaving] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-sm text-gray-500">Manage your workspace settings.</p>
      </div>

      <form
        onSubmit={async (event) => {
          event.preventDefault();
          setMessage(null);
          if (!workspace) {
            setMessage({ type: "error", text: "Error: Workspace name is required." });
            return;
          }
          if (!email.includes("@")) {
            setMessage({ type: "error", text: "Error: Invalid email address." });
            return;
          }
          setSaving(true);
          await new Promise((resolve) => setTimeout(resolve, 600));
          setSaving(false);
          setMessage({ type: "success", text: "Settings saved successfully!" });
        }}
        className="space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
      >
        <h2 className="text-lg font-bold">General</h2>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-gray-700">Workspace Name</span>
          <input
            value={workspace}
            onChange={(event) => setWorkspace(event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-gray-700">Billing Email</span>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-gray-700">Timezone</span>
          <select
            value={timezone}
            onChange={(event) => setTimezone(event.target.value)}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm"
          >
            <option>Asia/Tokyo</option>
            <option>America/New_York</option>
            <option>Europe/London</option>
          </select>
        </label>
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={notifications}
            onChange={(event) => setNotifications(event.target.checked)}
            className="size-4 accent-indigo-600"
          />
          <span className="text-sm text-gray-700">Enable email notifications</span>
        </label>
        {message && (
          <p className={`text-sm ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>{message.text}</p>
        )}
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </form>

      <div className="space-y-3 rounded-xl border border-red-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-red-600">Danger Zone</h2>
        <p className="text-sm text-gray-600">Once you delete a workspace, there is no going back. Please be certain.</p>
        <button
          type="button"
          onClick={() => setConfirmDelete(true)}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
        >
          Delete Workspace
        </button>
      </div>

      {confirmDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-sm space-y-4 rounded-xl bg-white p-6 shadow-xl">
            <h2 className="text-lg font-bold">Are you sure?</h2>
            <p className="text-sm text-gray-600">This action cannot be undone.</p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setConfirmDelete(false)}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => setConfirmDelete(false)}
                className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
