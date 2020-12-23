import React, { createContext } from "react";
import Search from "./Search";
import { useStateValue } from "./StateProvider";
import "./scss/JobList.scss";
import JobCard from "./JobCard";
import data from "./data.json";

function JobList() {
  const [{ tags }] = useStateValue();

  return (
    <div className="job-list">
      {tags?.length > 0 && <Search />}
      <div className="jobs">
        {data
          .filter((card) => {
            let str = [card.role, card.level, ...card.languages, ...card.tools];
            return tags.every((tag) => str.includes(tag));
          })
          .map((card) => {
            console.log(card);
            return <JobCard key={card.id} details={card} />;
          })}
      </div>
    </div>
  );
}

export default JobList;
