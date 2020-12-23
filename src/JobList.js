import React, { createContext } from "react";

function JobList() {
  const TagsContent = createContext();

  return (
    <div className="job-list">
      <TagsContent.Provider value={[]}>{/* <Search /> */}</TagsContent.Provider>
    </div>
  );
}

export default JobList;
