import { TableProps as UITableProps } from "@components/ui/table";
import { TableHeaderProps as UITableHeaderProps } from "@components/ui/table";
import { TableBodyProps as UITableBodyProps } from "@components/ui/table";
import { TableFooterProps as UITableFooterProps } from "@components/ui/table";
import { TableRowProps as UITableRowProps } from "@components/ui/table";
import { TableHeadProps as UITableHeadProps } from "@components/ui/table";
import { TableCellProps as UITableCellProps } from "@components/ui/table";
import { TableCaptionProps as UITableCaptionProps } from "@components/ui/table";

export interface ITableColumns {
  title: string;
  key: string;
  headClassName?: string;
  cellClassName?: string;
}
export interface TableProps<
  T extends Record<string, string | number | React.ReactNode>
> extends UITableProps {
  caption?: string | React.ReactNode;
  data: T[];
  columns: ITableColumns[];
  headerClassName?: string;
  bodyClassName?: string;
}

export interface TableHeaderProps extends UITableHeaderProps {}

export interface TableBodyProps extends UITableBodyProps {}

export interface TableFooterProps extends UITableFooterProps {}

export interface TableRowProps extends UITableRowProps {}

export interface TableHeadProps extends UITableHeadProps {}

export interface TableCellProps extends UITableCellProps {}

export interface TableCaptionProps extends UITableCaptionProps {}
