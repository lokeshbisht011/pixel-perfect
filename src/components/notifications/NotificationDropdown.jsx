"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotificationDropdown({ notifications, onMarkAllRead }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      className="
        absolute right-0 mt-2 w-80
        rounded-lg border border-border
        bg-background shadow-lg
        overflow-hidden z-50
      "
    >
      <div className="flex items-center justify-between px-3 py-2 border-b border-border font-mono">
        <span className="font-bold">Notifications</span>
        {/* <Button size="sm" variant="ghost" onClick={onMarkAllRead}>
          Mark all as read
        </Button> */}
      </div>

      <div className="max-h-96 overflow-y-auto">
        {notifications.length === 0 && (
          <div className="p-4 text-sm text-muted-foreground text-center">
            No notifications yet 👾
          </div>
        )}

        {notifications.map((n) => (
          <Link
            key={n.id}
            href={getNotificationLink(n)}
            className={`
              block px-4 py-3 text-sm font-mono
              hover:bg-muted transition
              ${!n.read ? "bg-muted/50" : ""}
            `}
          >
            {renderNotificationText(n)}
          </Link>
        ))}
      </div>
    </motion.div>
  );
}
