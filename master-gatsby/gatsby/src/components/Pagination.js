import { Link } from 'gatsby';
import React from 'react';

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  skip,
  base,
}) {
  // make some variables
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  return (
    <div>
      <Link to={`${base}/${prevPage}`}>⬅ Prev</Link>
      <Link to={`${base}/${nextPage}`}>Next ➡</Link>
    </div>
  );
}
