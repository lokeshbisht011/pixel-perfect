"use client";

import { motion } from "framer-motion";
import { Inbox } from "lucide-react";

export default function EmptyState({
  text,
  icon: Icon = Inbox,
  action,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-16 text-center"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-muted">
        <Icon className="h-7 w-7 text-muted-foreground" />
      </div>

      <p className="max-w-xs text-sm text-muted-foreground">{text}</p>

      {action && <div className="mt-4">{action}</div>}
    </motion.div>
  );
}
