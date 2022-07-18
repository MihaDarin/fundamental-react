import React from "react";
import { getPagesArray } from "../../../utils/pages";
export const Pagination = ({ totalPages, page, changePage }) => {
  const pagesArray = getPagesArray(totalPages);
  return (
    <div className="pages__btns">
      {pagesArray.map((p) => {
        return (
          <span
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? "page page__current " : "page"}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};
