"use client";
import {
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table as TableUI,
} from "@components/ui/table";
import { ITableColumns, TableProps } from "./types";

const renderTableHeader = (header: ITableColumns) => {
  const { headClassName = "", key } = header;
  return (
    <TableHead className={headClassName} key={`header-${key}`}>
      {header.title}
    </TableHead>
  );
};

const renderTableBody = <
  T extends Record<string, string | number | React.ReactNode>
>(
  data: T[],
  columns: any
) => {
  const columnsKeys = columns.map((item: any) => {
    return { key: item.key, cellClassName: item.cellClassName };
  });

  return data.map((item: T, idx: number) => (
    <TableRow key={`table-row-${idx}`}>
      {columnsKeys.map((key: { key: string; cellClassName?: string }) =>
        renderTableCell(item, key.key, (key.cellClassName = ""))
      )}
    </TableRow>
  ));
};

const renderTableCell = <
  T extends Record<string, string | number | React.ReactNode>
>(
  cell: T,
  key: string,
  cellClassName: string
) => {
  return <TableCell className={cellClassName}>{cell[`${key}`]}</TableCell>;
};

export default function Table<
  T extends Record<string, string | number | React.ReactNode>
>(props: TableProps<T>) {
  const { caption, data, columns, className, headerClassName, bodyClassName } =
    props;

  return (
    <TableUI className={className}>
      <TableCaption>{caption}</TableCaption>
      <TableHeader className={headerClassName}>
        <TableRow>{columns?.map((item) => renderTableHeader(item))}</TableRow>
      </TableHeader>
      <TableBody className={bodyClassName}>
        {renderTableBody(data, columns)}
      </TableBody>
    </TableUI>
  );
}
