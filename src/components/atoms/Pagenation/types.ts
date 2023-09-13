export interface PagenationProps {
  defaultCurrentPage?: number;
  page: number;
  limit?: number;
  onChange: (value: number) => void;
  totalCount: number;
}
