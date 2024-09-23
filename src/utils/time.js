export const timeAgo = (dateString) => {
    const now = new Date();
    const pastDate = new Date(dateString);
    const diffInSeconds = Math.floor((now - pastDate) / 1000);
  
    const seconds = Math.floor(diffInSeconds % 60);
    const minutes = Math.floor((diffInSeconds / 60) % 60);
    const hours = Math.floor((diffInSeconds / 3600) % 24);
    const days = Math.floor(diffInSeconds / 86400);
  
    if (days > 365) return `${(days/365).toFixed("0")} year${days/365 > 1 ? "s" : ""} ago`;
    if (days > 30) return `${(days/30).toFixed("0")} month${days/30 > 1 ? "s" : ""} ago`;
    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    if (seconds > 0) return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
    return "Just now";
  };