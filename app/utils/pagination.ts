type PaginationProps = {
  visibleCount: number;
  page: number;
  totalCount: number;
  resourceName: string;
};

export const generatePaginationLabel = (pagination: PaginationProps) => {
  if (!pagination) {
    return null;
  }

  const showFromItem =
    pagination.visibleCount * Math.max(pagination.page - 1, 0) + 1;

  const showToItem = Math.min(
    pagination.visibleCount * pagination.page,
    pagination.totalCount,
  );

  return `${showFromItem}-${showToItem} of ${pagination.totalCount} ${pagination.resourceName}`;
};
