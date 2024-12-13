import React, { useEffect, useState } from "react";

function NotificationBadge() {
  const styles = {
    position: "absolute",
    right: "5px",
    width: "10px",
    height: "10px",
    background: "red",
    borderRadius: "100%",
  };

  return <span style={styles} />;
}

export default NotificationBadge;
