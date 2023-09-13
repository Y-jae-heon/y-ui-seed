export interface WriteListItemProps {
  onClick?: (id: number) => void;
  title: string;
  id?: number;
  date?: string;
  type?: "faq" | "free";
  searchText?: string;
}
