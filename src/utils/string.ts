// 휴대폰 번호 포맷터
export function phoneFomatter(value: string, type?: 0) {
  let formatNum = "";

  const originValue = value
    .replaceAll("-", "")
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*)\./g, "$1");

  if (originValue.length == 11) {
    if (type == 0) {
      formatNum = originValue.replace(/(\d{3})(\d{4})(\d{4})/, "$1-****-$3");
    } else {
      formatNum = originValue.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    }
  } else if (originValue.length == 8) {
    formatNum = originValue.replace(/(\d{4})(\d{4})/, "$1-$2");
  } else {
    if (originValue.indexOf("02") == 0) {
      if (type == 0) {
        formatNum = originValue.replace(/(\d{2})(\d{4})(\d{4})/, "$1-****-$3");
      } else {
        formatNum = originValue.replace(/(\d{2})(\d{4})(\d{4})/, "$1-$2-$3");
      }
    } else {
      if (type == 0) {
        formatNum = originValue.replace(/(\d{3})(\d{3})(\d{4})/, "$1-***-$3");
      } else {
        formatNum = originValue.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
      }
    }
  }

  return formatNum;
}
export function numberFomatter(value: string) {
  return value.replace(/[^0-9]/g, "");
}

/* ------------------------ Start Email ------------------------ */

/* ------------------------ Start Cookie ------------------------ */
export const getCookie = (cookieString: string, name: string) => {
  let matches = cookieString.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
};
export const deleteCookie = (name: string) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};
/* ------------------------ End Cookie ------------------------ */

export const getTimerFormat = (targetSecond: number) => {
  const minute = Math.floor(targetSecond / 60);
  const second = targetSecond % 60;

  const minuteString = minute < 10 ? `0${minute}` : `${minute}`;
  const secondString = second < 10 ? `0${second}` : `${second}`;

  return `${minuteString}:${secondString}`;
};

export function replaceVideoURL(string: string) {
  if (string.includes("youtu.be/")) {
    return string.replace("youtu.be/", "https://youtube.com/embed/");
  }
  return string.replace("vimeo.com/", "https://player.vimeo.com/video/");
}

export const copyText = (text: string) => {
  // 임시의 textarea 생성
  const $textarea = document.createElement("textarea");

  // body 요소에 존재해야 복사가 진행됨
  document.body.appendChild($textarea);

  // 복사할 특정 텍스트를 임시의 textarea에 넣어주고 모두 셀렉션 상태
  $textarea.value = text;
  $textarea.select();

  // 복사 후 textarea 지우기
  document.execCommand("copy");
  document.body.removeChild($textarea);
};
