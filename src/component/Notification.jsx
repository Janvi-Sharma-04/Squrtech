import React from "react";
import { Bell, CheckCircle, AlertCircle } from "lucide-react";

const notifications = [
  {
    id: 1,
    type: "info",
    message: "Your profile has been updated successfully.",
    time: "2 mins ago",
    isNew: true,
  },
  {
    id: 2,
    type: "alert",
    message: "Server maintenance scheduled at 12:00 AM.",
    time: "1 hour ago",
    isNew: true,
  },
  {
    id: 3,
    type: "success",
    message: "Your password was changed.",
    time: "Yesterday",
    isNew: false,
  },
];

const getIcon = (type) => {
  switch (type) {
    case "success":
      return <CheckCircle className="text-green-500" />;
    case "alert":
      return <AlertCircle className="text-red-500" />;
    default:
      return <Bell className="text-blue-500" />;
  }
};

const Notification = () => {
  return (
    <main className="w-full max-w-9xl mx-auto">
      <div className="rounded-2xl bg-white shadow-xl border-0 h-[calc(100vh-4rem)] flex flex-col overflow-hidden">
        <div className="max-w-7xl w-full mx-auto mt-10 p-4 rounded-xl">
          <h2 className="text-2xl font-semibold mb-5">Notifications</h2>

          <div className="h-[calc(100vh-12rem)] overflow-y-auto pr-2 scroll-hidden">
            <ul className="space-y-4">
              {notifications.map((item) => (
                <li
                  key={item.id + Math.random()} // ensure unique key
                  className={`flex items-start gap-4 p-4 rounded-lg border ${item.isNew
                    ? "bg-blue-50 border-blue-200"
                    : "bg-gray-50 border-gray-200"
                    }`}
                >
                  <div className="mt-1">{getIcon(item.type)}</div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-700">{item.message}</p>
                    <span className="text-xs text-gray-500">{item.time}</span>
                  </div>
                  {item.isNew && (
                    <span className="text-xs text-blue-600 font-medium">New</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Notification;
