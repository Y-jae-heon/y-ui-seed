"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { PAGE_URL } from "@utils/urls";
import { useDispatch } from "react-redux";
import { setLastPath } from "@store/slice/common/path";

const excludePaths = [
  PAGE_URL.READY,
  PAGE_URL.SIGNIN,
  PAGE_URL.SIGNUP,
  PAGE_URL.SIGNUP_SUCCESS,
];

export function NavigationEvents() {
  const dispatch = useDispatch();

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    let url = `${pathname}`;

    if (searchParams) {
      url += `?${searchParams}`;
    }

    if (pathname && url && !excludePaths.includes(pathname)) {
      dispatch(setLastPath({ lastPath: url }));
    }
  }, [dispatch, pathname, searchParams]);

  return null;
}
