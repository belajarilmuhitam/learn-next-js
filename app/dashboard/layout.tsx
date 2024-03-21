import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>ini layout untuk children</p>
      {children}
    </div>
  );
}
