import React, { useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import {
  PaginationContainer,
  PaginationButton,
  PaginationNumbers,
} from './Paginator.styled';

export const Paginator = ({ currentPage, totalPages, onPageChange }) => {
  const [displayedPages, setDisplayedPages] = useState([1, 2, 3]);

  const handlePageClick = page => {
    onPageChange(page);
    updateDisplayedPages(page);
  };

  const updateDisplayedPages = page => {
    const totalPagesToDisplay = 5;
    const halfTotalPagesToDisplay = Math.floor(totalPagesToDisplay / 2);

    let startPage = page - halfTotalPagesToDisplay;
    if (startPage < 1) {
      startPage = 1;
    }

    let endPage = startPage + totalPagesToDisplay - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = endPage - totalPagesToDisplay + 1;
      if (startPage < 1) {
        startPage = 1;
      }
    }

    const newDisplayedPages = [];
    for (let i = startPage; i <= endPage; i++) {
      newDisplayedPages.push(i);
    }
    setDisplayedPages(newDisplayedPages);
  };

  // const handlePrevClick = () => {
  //   if (currentPage > 1) {
  //     onPageChange(currentPage - 1);
  //     updateDisplayedPages(currentPage - 1);
  //   }
  // };

  // const handlePrevClick = () => {
  //   const prevPage = currentPage - 1;
  //   if (prevPage > 0) {
  //     onPageChange(prevPage);
  //     updateDisplayedPages(prevPage);
  //   }
  // };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
      updateDisplayedPages(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    // if (currentPage < totalPages) {
    onPageChange(currentPage + 1);
    updateDisplayedPages(currentPage + 1);
    // }
  };

  // const handleNextClick = () => {
  //   const nextPage = currentPage + 1;
  //   if (nextPage <= totalPages) {
  //     onPageChange(nextPage);
  //     updateDisplayedPages(nextPage);
  //   }
  // };

  // const handleNextClick = () => {
  //   if (currentPage < totalPages) {
  //     onPageChange(currentPage + 1);
  //     updateDisplayedPages(currentPage + 1);
  //   }
  // };

  return (
    <PaginationContainer>
      <PaginationButton onClick={handlePrevClick}>
        <BsChevronLeft />
      </PaginationButton>
      <PaginationNumbers>
        {displayedPages.map(page => (
          <PaginationButton
            key={page}
            onClick={() => handlePageClick(page)}
            active={currentPage === page}
          >
            {page}
          </PaginationButton>
        ))}
      </PaginationNumbers>
      <PaginationButton onClick={handleNextClick}>
        <BsChevronRight />
      </PaginationButton>
    </PaginationContainer>
  );
};
