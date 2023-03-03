import React from 'react';
import { styled } from '../../../stitches.config';

const StyledWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '2rem',
  px: '1rem',
  paddingBottom: '0.5rem',
});
const StyledSelectorWrapper = styled('div', {
  display: 'flex',
  gap: '1rem',
  alignItems: 'center',
});
const StyledArrowsWrapper = styled('div', { display: 'flex', gap: '0.5rem' });
const StyledSelect = styled('select', {
  background: 'transparent',
  border: 'none',
  borderRadius: '0px',
  py: '0.5rem',
});
const StyledButton = styled('button', {
  background: 'transparent',
  border: 'none',
  borderRadius: '0px',
  cursor: 'pointer',
});

export function Pagination({ controls }) {
  const {
    nextPage,
    isNextPageAvailable,
    previousPage,
    isPreviousPageAvailable,
    pageIndex,
    rowsCount,
    pageRowCount,
    pageSize,
    setPageSize,
  } = controls;

  return (
    <StyledWrapper>
      <StyledSelectorWrapper>
        <label htmlFor="rowsPerPage">Rows per page:</label>
        <StyledSelect
          id="rowsPerPage"
          value={pageSize}
          onChange={(e) => setPageSize(+e.target.value)}
        >
          {[10, 20, 50].map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </StyledSelect>
      </StyledSelectorWrapper>
      <span>{`${pageSize * pageIndex + 1}-${
        pageSize * pageIndex + pageRowCount
      } of ${rowsCount}`}</span>
      <StyledArrowsWrapper>
        <StyledButton
          type="button"
          onClick={previousPage}
          disabled={!isPreviousPageAvailable}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-left"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </StyledButton>
        <StyledButton
          type="button"
          onClick={nextPage}
          disabled={!isNextPageAvailable}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-right"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </StyledButton>
      </StyledArrowsWrapper>
    </StyledWrapper>
  );
}
