import { ChangeTrackerContext } from "@/contexts/ChangeTrackerContext";
import { useEffect, useState } from "react";

export default function ChangeTracker({ currentFileIndex, children }) {
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => setHasChanges(false), [currentFileIndex]);

  return (
    <ChangeTrackerContext.Provider value={[hasChanges, setHasChanges]}>
      {children}
    </ChangeTrackerContext.Provider>
  );
}
