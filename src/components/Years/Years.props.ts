import { ICategory } from '../../interfaces/IContent';

export interface YearsProps {
  yearFrom: number;
  yearTo: number;
  items: ICategory[];
  currentPage: number;
  onPageChange: (newPage: number) => void;
  duration?: number;
}
