export interface PaginationBulletProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}
