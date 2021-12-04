import { range } from "lodash";
import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

import "./pageInnation.css";

const PageInnation = (props) => {
  const { setPage, totalPages, pageNo } = props;

  let ArrayOfPages = range(totalPages);

  let PageNumbers = ArrayOfPages.slice(0, 5);

  let handleClick = (CurPage) => {
    setPage(CurPage);
  };

  let handleNext = () => {};

  let handlePrevious = () => {};

  return (
    <div className="PageInnation">
      <Pagination className="style">
        <PaginationItem>
          <PaginationLink onClick={handlePrevious}>previous</PaginationLink>
        </PaginationItem>
        {PageNumbers.map((page, idx) => {
          const currentPageNo = idx + 1;
          return (
            <PaginationItem active={currentPageNo === pageNo}>
              <PaginationLink
                onClick={() => {
                  handleClick(currentPageNo);
                }}
              >
                {currentPageNo}
              </PaginationLink>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <PaginationLink onClick={handleNext}>Next</PaginationLink>
        </PaginationItem>
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
