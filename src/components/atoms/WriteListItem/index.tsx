"use client";

import { cn } from "@lib/utils";
import { WriteListItemProps } from "./types";

export default function WriteListItem(props: WriteListItemProps) {
  const { onClick, title, id, searchText, date, type } = props;

  const handleOnClick = () => {
    onClick?.(id || -1);
  };

  return (
    <div
      className={cn(
        "cursor-pointer flex flex-col  px-[20px] items-start justify-center self-stretch hover:bg-gray12 rounded-[16px] w-full",
        "py-[20px] h-auto"
      )}
      onClick={() => handleOnClick()}
    >
      {date && (
        <div className="flex">
          <span className="text-b5 text-gray7">{date}</span>
        </div>
      )}
      <div className="flex gap-[10px]">
        {type === "faq" && (
          <span className="text-gray2 text-b3b w-[24px]">Q</span>
        )}
        {searchText ? (
          <span
            className={cn("text-b3b text-gray2", type === "faq" && "text-b3")}
            dangerouslySetInnerHTML={{
              __html: title.replaceAll(
                searchText || "",
                `<span style="color: rgb(24, 88, 76); font-weight: 700">${searchText}</span>`
              ),
            }}
          />
        ) : (
          <span
            className={cn("text-b3b text-gray2", type === "faq" && "text-b3")}
          >
            {title}
          </span>
        )}
      </div>
    </div>
  );
}
