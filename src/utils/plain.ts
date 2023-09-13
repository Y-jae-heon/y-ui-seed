import { Data } from "@react-google-maps/api";
import {
  ReservationDetailForCustomerDto,
  ReservationDto,
} from "@teamslogup/boostree-api-lib/dist/api/reservation/types";
import _ from "lodash";

export const toPlainReservationDetailData = (
  data: ReservationDetailForCustomerDto | ReservationDto | null
) => {
  return {
    productOptions: [...(data?.productOptions || [])],
    id: data?.id,
    reservedAt: data?.reservedAt,
    reservationStatus: data?.reservationStatus,
  };
};

// 배열 중복제거
export const uniqueCheckArray = (data: any[], key: string, key2: string) => {
  return [..._.cloneDeep(data)].filter((item, idx, arr) => {
    if (!key2)
      return arr.findIndex((i) => i[`${key}`] === item[`${key}`]) === idx;
    return (
      arr.findIndex(
        (i) =>
          i[`${key}`] === item[`${key}`] && i[`${key2}`] === item[`${key2}`]
      ) === idx
    );
  });
};
