"use client";

import { IconArrowRight24 } from "@icon";
import { cn } from "@lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { useEffect, useState } from "react";
import { PagenationProps } from "./types";

const DEFAULT_CURRENT_PAGE = 1;
const DEFAULT_LIMIT = 5;

const defaultPageButtonClass =
  "flex items-center justify-center rounded-full text-gray2 hover:bg-gray12 hover:text-gray2 data-[select=true]:bg-primary3 data-[select=true]:text-gray13";
const pageButtonSize = {
  32: "text-b4 w-[32px] h-[32px]",
  40: "text-b3 w-[40px] h-[40px]",
};

const pageButtonVariants = cva(defaultPageButtonClass, {
  variants: {
    size: {
      ...pageButtonSize,
    },
  },
  defaultVariants: {
    size: 40,
  },
});

export default function Pagenation(
  props: PagenationProps & VariantProps<typeof pageButtonVariants>
) {
  const {
    size,
    defaultCurrentPage = DEFAULT_CURRENT_PAGE,
    limit = DEFAULT_LIMIT,
    totalCount,
    onChange,
    page,
  } = props;

  const [pagenationPage, setPagenationPage] = useState(Math.ceil(page / limit));

  const endPage = Math.ceil(totalCount / limit);
  const endPagenationPage = Math.ceil(endPage / limit);

  const handlePageClick = (value: number) => {
    // setPage(value);
    onChange?.(value);
  };

  const handlePrevClick = () => {
    const start = (pagenationPage - 1) * limit + 1;

    if (page > 1) {
      // setPage((prev) => prev - 1);
      onChange?.(page - 1);
    } else {
      return;
    }

    if (page - 1 < start) {
      setPagenationPage((prev) => prev - 1);
    }
  };

  const handleNextClick = () => {
    const start = (pagenationPage - 1) * limit + 1;
    const end = start + limit - 1;

    if (page < endPage) {
      onChange?.(page + 1);
    } else {
      return;
    }

    if (page + 1 > end) {
      setPagenationPage((prev) => prev + 1);
    }
  };

  const renderPageList = () => {
    const resultPages = [];
    const start = (pagenationPage - 1) * limit + 1;
    const end = start + limit - 1;

    for (let i = start; i < end + 1; i++) {
      if (i > endPage) {
        break;
      }
      resultPages.push(i);
    }

    return resultPages.map((item) => (
      <li key={item}>
        <button
          data-select={item === page}
          className={cn(pageButtonVariants({ size }))}
          onClick={() => {
            handlePageClick(item);
          }}
        >
          {item}
        </button>
      </li>
    ));
  };

  // useEffect(() => {
  //   onChange?.(page);
  // }, [page, onChange]);

  return (
    <div className="flex gap-[48px] sm:gap-[12px]">
      <button
        className="rotate-180 disabled:text-gray10"
        onClick={handlePrevClick}
        disabled={page === 1}
      >
        <IconArrowRight24 />
      </button>
      <ol className="flex gap-[12px]">{renderPageList()}</ol>
      <button
        onClick={handleNextClick}
        className="disabled:text-gray10"
        disabled={page === endPage}
      >
        <IconArrowRight24 />
      </button>
    </div>
  );
}
