import React from "react";
import Avatar from "./Avatar";

export default function KanbanAvatar({ name, userId, size = "sm", className = "" }) {
  // Generate pravatar URL using userId or name as seed
  const avatarSeed = userId || name || "default";
  const avatarUrl = `https://i.pravatar.cc/40?u=${encodeURIComponent(avatarSeed)}`;

  return (
    <Avatar
      src={avatarUrl}
      alt={name || "User"}
      size={size}
      className={className}
    />
  );
}
