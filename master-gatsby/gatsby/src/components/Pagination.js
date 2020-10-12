import React from 'react';

export default function Pagination({
  perPage,
  totalCount,
  currentPage,
  skip,
  base,
}) {
  // make some variables
  const totalPages = Math.ceil(totalCount / perPage);
  return (
    <div>
      <p>Paginagion</p>
    </div>
  );
}
