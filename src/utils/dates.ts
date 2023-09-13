import dayjs from "dayjs";

export const weekDays = ["Mon", "Tus", "Wed", "Thu", "Fri", "Sat", "Sun"];
export const weekDaysKo = ["월", "화", "수", "목", "금", "토", "일"];
export const weekDaysNum = [1, 2, 3, 4, 5, 6, 0];

export const handleThisWeek = () => {
  var currentDay = new Date();
  var theYear = currentDay.getFullYear();
  var theMonth = currentDay.getMonth();
  var theDate = currentDay.getDate();
  var theDayOfWeek = currentDay.getDay();

  var thisWeek = [];

  for (var i = 0; i < 7; i++) {
    var resultDay = new Date(
      theYear,
      theMonth,
      theDate + (i + 1 - theDayOfWeek)
    );
    var yyyy = resultDay.getFullYear();
    var mm = Number(resultDay.getMonth()) + 1;
    var dd = resultDay.getDate();

    var newMM = String(mm).length === 1 ? "0" + mm : mm;
    var newDD = String(dd).length === 1 ? "0" + dd : dd;

    thisWeek[i] = yyyy + "-" + newMM + "-" + newDD;
  }

  return thisWeek;
};

export const handleExtractTheDayofWeek = (dates: number[]) => {
  const thisWeekDate = handleThisWeek();

  const thisWeek: boolean[] = [false, false, false, false, false, false, false];

  for (let index = 0; index < thisWeekDate.length; index++) {
    const el = thisWeekDate[index];
    for (let i = 0; index < dates.length; i++) {
      const date = dates[i];
      if (Number(el.substring(8, 10)) === date) {
        thisWeek[index] = true;
      }
    }
  }

  return thisWeek;
};
