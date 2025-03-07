import { ICategory } from '../../interfaces/IContent';

export interface CircleProps {
  items: ICategory[];
  currentPage: number;
  onPageChange: (newPage: number) => void;
}
