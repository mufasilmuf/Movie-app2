import { range } from "lodash";
import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

import "./pageInnation.css";

const PageInnation = (props) => {
  const { setPage, totalPages, pageNo } = props;

  let ArrayOfPages = range(totalPages);

  let handleClick = (p) => {
    setPage(p);
  };

  return (
    <div className="PageInnation">
      <Pagination className="style">
        {ArrayOfPages.map((page, idx) => {
          return (
            <PaginationItem onClick={handleClick()}>
              <PaginationLink>{idx + 1}</PaginationLink>
            </PaginationItem>
          );
        })}
      </Pagination>
      {/* 
      first ,previous and next last
      <Pagination>
        <PaginationItem>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" previous />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">5</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" next />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" last />
        </PaginationItem>
      </Pagination> */}
    </div>
  );
};
export default PageInnation;
