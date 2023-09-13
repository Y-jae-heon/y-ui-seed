import { cn } from "@lib/utils";

// ------------------------------------- Start Common -------------------------------------
const disabledTextColor = "disabled:text-gray8";
const disabledBgColor = "disabled:bg-gray11";

const disabledBorderColor = "disabled:border-gray8";

export const textColor = {
  primary: `text-primary3 ${disabledTextColor}`,
  lightPrimary: `text-primary11 ${disabledTextColor}`,
  secondary: `text-secondary3 ${disabledTextColor}`,
  lightSecondary: `text-secondary9 ${disabledTextColor}`,
  gray: `text-gray7 ${disabledTextColor}`,
  lightGray: `text-gray13 ${disabledTextColor}`,
  plane: `text-gray13 ${disabledTextColor}`,
  red: `text-red2 ${disabledTextColor}`,
  lightRed: `text-red6 ${disabledTextColor}`,
  yellow: `text-yellow2 ${disabledTextColor}`,
  lightYellow: `text-yellow6 ${disabledTextColor}`,
  orange: `text-orange2 ${disabledTextColor}`,
  lightOrange: `text-orange6 ${disabledTextColor}`,
  green: `text-green2 ${disabledTextColor}`,
  lightGreen: `text-green6 ${disabledTextColor}`,
  blue: `text-blue2 ${disabledTextColor}`,
  lightBlue: `text-blue6 ${disabledTextColor}`,
  purple: `text-purple2 ${disabledTextColor}`,
  lightPurple: `text-purple6 ${disabledTextColor}`,
  sky: `text-sky2 ${disabledTextColor}`,
  lightSky: `text-sky6 ${disabledTextColor}`,
  pink: `text-pink2 ${disabledTextColor}`,
  lightPink: `text-pink6 ${disabledTextColor}`,
};

export const textHoverColor = {
  primary: `hover:text-primary2 ${disabledTextColor}`,
  lightPrimary: `hover:text-primary10 ${disabledTextColor}`,
  secondary: `hover:text-secondary2 ${disabledTextColor}`,
  lightSecondary: `hover:text-secondary8 ${disabledTextColor}`,
  gray: `hover:text-gray6 ${disabledTextColor}`,
  lightGray: `hover:text-gray12 ${disabledTextColor}`,
  plane: `hover:text-gray12 ${disabledTextColor}`,
  red: `hover:text-red1 ${disabledTextColor}`,
  lightRed: `hover:text-red5 ${disabledTextColor}`,
  yellow: `hover:text-yellow1 ${disabledTextColor}`,
  lightYellow: `hover:text-yellow5 ${disabledTextColor}`,
  orange: `hover:text-orange1 ${disabledTextColor}`,
  lightOrange: `hover:text-orange5 ${disabledTextColor}`,
  green: `hover:text-green1 ${disabledTextColor}`,
  lightGreen: `hover:text-green5 ${disabledTextColor}`,
  blue: `hover:text-blue1 ${disabledTextColor}`,
  lightBlue: `hover:text-blue5 ${disabledTextColor}`,
  purple: `hover:text-purple1 ${disabledTextColor}`,
  lightPurple: `hover:text-purple5 ${disabledTextColor}`,
  sky: `hover:text-sky1 ${disabledTextColor}`,
  lightSky: `hover:text-sky5 ${disabledTextColor}`,
  pink: `hover:text-pink1 ${disabledTextColor}`,
  lightPink: `hover:text-pink5 ${disabledTextColor}`,
};

export const bgColor = {
  white: `bg-gray13 text-gray2`,
  midGray: `bg-gray11 text-gray2`,
  darkGray: `bg-gray3 text-gray13`,
  primary: `bg-primary3 text-gray13 ${disabledBgColor} ${disabledTextColor}`,
  lightPrimary: `bg-primary4 text-gray13 ${disabledBgColor} ${disabledTextColor}`,
  secondary: `bg-secondary3 text-gray13 ${disabledBgColor} ${disabledTextColor}`,
  lightSecondary: `bg-secondary9 text-secondary3 ${disabledBgColor} ${disabledTextColor}`,
  gray: `bg-gray7 text-gray13 ${disabledBgColor} ${disabledTextColor}`,
  lightGray: `bg-gray13 text-gray3 border border-gray9 ${disabledBgColor} ${disabledTextColor} ${disabledBorderColor}`,
  plane: `bg-gray13 text-primary3 ${disabledBgColor}`,
  red: `bg-red3 text-gray13 ${disabledBgColor} ${disabledTextColor}`,
  lightRed: `bg-red7 text-red3 ${disabledBgColor} ${disabledTextColor}`,
  yellow: `bg-yellow3 text-gray13 ${disabledBgColor} ${disabledTextColor}`,
  lightYellow: `bg-yellow7 text-yellow3 ${disabledBgColor} ${disabledTextColor}`,
  orange: `bg-orange3 text-gray13 ${disabledBgColor} ${disabledTextColor}`,
  lightOrange: `bg-orange7 text-orange3 ${disabledBgColor} ${disabledTextColor}`,
  green: `bg-green3 text-gray13 ${disabledBgColor} ${disabledTextColor}`,
  lightGreen: `bg-green7 text-green3 ${disabledBgColor} ${disabledTextColor}`,
  blue: `bg-blue3 text-gray13 ${disabledBgColor} ${disabledTextColor}`,
  lightBlue: `bg-blue7 text-blue3 ${disabledBgColor} ${disabledTextColor}`,
  purple: `bg-purple3 text-gray13 ${disabledBgColor} ${disabledTextColor}`,
  lightPurple: `bg-purple7 text-purple3 ${disabledBgColor} ${disabledTextColor}`,
  sky: `bg-sky3 text-gray13 ${disabledBgColor} ${disabledTextColor}`,
  lightSky: `bg-sky7 text-sky3 ${disabledBgColor} ${disabledTextColor}`,
  pink: `bg-pink3 text-gray13 ${disabledBgColor} ${disabledTextColor}`,
  lightPink: `bg-pink7 text-pink3 ${disabledBgColor} ${disabledTextColor}`,
};

export const bgHoverColor = {
  primary: `hover:bg-primary2 ${disabledBgColor}`,
  midGray: `hover:bg-gray10 ${disabledBgColor}`,
  lightPrimary: `hover:bg-primary2 ${disabledBgColor}`,
  secondary: `hover:bg-secondary2 ${disabledBgColor}`,
  lightSecondary: `hover:bg-secondary8 hover:text-secondary2 ${disabledBgColor} ${disabledTextColor}`,
  gray: `hover:bg-gray6 ${disabledBgColor}`,
  lightGray: `bg-gray13 border hover:border-gray2 ${disabledBgColor} ${disabledBorderColor}`,
  plane: `hover:bg-gray12 ${disabledBgColor}`,
  red: `hover:bg-red1 ${disabledBgColor}`,
  lightRed: `hover:bg-red5 hover:text-red1 ${disabledBgColor} ${disabledTextColor}`,
  yellow: `hover:bg-yellow1 ${disabledBgColor}`,
  lightYellow: `hover:bg-yellow5 hover:text-yellow1 ${disabledBgColor} ${disabledTextColor}`,
  orange: `hover:bg-orange1 ${disabledBgColor}`,
  lightOrange: `hover:bg-orange5 hover:text-orange1 ${disabledBgColor} ${disabledTextColor}`,
  green: `hover:bg-green1 ${disabledBgColor}`,
  lightGreen: `hover:bg-green5 hover:text-green1 ${disabledBgColor} ${disabledTextColor}`,
  blue: `hover:bg-blue1 ${disabledBgColor}`,
  lightBlue: `hover:bg-blue5 hover:text-blue1 ${disabledBgColor} ${disabledTextColor}`,
  purple: `hover:bg-purple1 ${disabledBgColor}`,
  lightPurple: `hover:bg-purple5 hover:text-purple1 ${disabledBgColor} ${disabledTextColor}`,
  sky: `hover:bg-sky1 ${disabledBgColor}`,
  lightSky: `hover:bg-sky5 hover:text-sky1 ${disabledBgColor} ${disabledTextColor}`,
  pink: `hover:bg-pink1 ${disabledBgColor}`,
  lightPink: `hover:bg-pink5 hover:text-pink1 ${disabledBgColor} ${disabledTextColor}`,
};

// ------------------------------------- End Common -------------------------------------

// ------------------------------------- Start Button -------------------------------------
export const defaultButtonClass = cn(
  "inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none ring-offset-background"
);

export const buttonColor = {
  primary: cn(bgColor.primary, bgHoverColor.primary),
  midGray: cn(bgColor.midGray, bgHoverColor.midGray),
  primaryGhost: cn(
    `border text-primary3 hover:text-primary3 active:text-primary3 border-primary3 hover:border-primary2 active:border-primary1 disabled:cursor-not-allowed disabled:text-gray8 disabled:border-gray8`
  ),
  grayGhost: cn(
    `border text-gray2 hover:text-primary3 active:text-primary3 border-gray9 hover:border-gray7 active:border-gray5 disabled:cursor-not-allowed disabled:text-gray8 disabled:border-gray8`
  ),
  whiteGhost: cn(
    `border bg-gray13 bg-opacity-0 hover:bg-opacity-[0.05] active:bg-opacity-[0.1] text-gray13 hover:text-gray13 active:text-gray13 border-gray13 hover:border-gray13 active:border-gray13 disabled:cursor-not-allowed disabled:text-gray8 disabled:border-gray8`
  ),
  lightPrimary: cn(bgColor.lightPrimary, bgHoverColor.lightPrimary),
  secondary: cn(bgColor.secondary, bgHoverColor.secondary),
  lightSecondary: cn(bgColor.lightSecondary, bgHoverColor.lightSecondary),
  gray: cn(bgColor.gray, bgHoverColor.gray),
  lightGray: cn(bgColor.lightGray, bgHoverColor.lightGray),
  plane: cn(bgColor.plane, bgHoverColor.plane),
  red: cn(bgColor.red, bgHoverColor.red),
  lightRed: cn(bgColor.lightRed, bgHoverColor.lightRed),
  yellow: cn(bgColor.yellow, bgHoverColor.yellow),
  lightYellow: cn(bgColor.lightYellow, bgHoverColor.lightYellow),
  orange: cn(bgColor.orange, bgHoverColor.orange),
  lightOrange: cn(bgColor.lightOrange, bgHoverColor.lightOrange),
  green: cn(bgColor.green, bgHoverColor.green),
  lightGreen: cn(bgColor.lightGreen, bgHoverColor.lightGreen),
  blue: cn(bgColor.blue, bgHoverColor.blue),
  lightBlue: cn(bgColor.lightBlue, bgHoverColor.lightBlue),
  purple: cn(bgColor.purple, bgHoverColor.purple),
  lightPurple: cn(bgColor.lightPurple, bgHoverColor.lightPurple),
  sky: cn(bgColor.sky, bgHoverColor.sky),
  lightSky: cn(bgColor.lightSky, bgHoverColor.lightSky),
  pink: cn(bgColor.pink, bgHoverColor.pink),
  lightPink: cn(bgColor.lightPink, bgHoverColor.lightPink),
};

export const buttonSize = {
  56: cn("text-button1 py-[16px] px-[28px] rounded-[12px]"),
  48: cn("text-button2 py-[14px] px-[24px] rounded-[11px]"),
  40: cn("text-button2 py-[10px] px-[20px] rounded-[10px]"),
  32: cn("text-button3 py-[7px] px-[18px] rounded-[8px]"),
  28: cn("text-button4 py-[6px] px-[16px] rounded-[7px]"),
};
export const tabletButtonSize = {
  56: cn("md:text-button1 md:py-[16px] md:px-[30px] md:rounded-[12px]"),
  48: cn("md:text-button2 md:py-[14px] md:px-[26px] md:rounded-[11px]"),
  40: cn("md:text-button2 md:py-[10px] md:px-[22px] md:rounded-[10px]"),
  32: cn("md:text-button3 md:py-[7px] md:px-[18px] md:rounded-[8px]"),
  28: cn("md:text-button4 md:py-[6px] md:px-[16px] md:rounded-[7px]"),
};
export const mobileButtonSize = {
  56: cn("sm:text-button1 sm:py-[16px] sm:px-[30px] sm:rounded-[12px]"),
  48: cn("sm:text-button2 sm:py-[14px] sm:px-[26px] sm:rounded-[11px]"),
  40: cn("sm:text-button2 sm:py-[10px] sm:px-[22px] sm:rounded-[10px]"),
  32: cn("sm:text-button3 sm:py-[7px] sm:px-[18px] sm:rounded-[8px]"),
  28: cn("sm:text-button4 sm:py-[6px] sm:px-[16px] sm:rounded-[7px]"),
};

export const buttonWidthFull = {
  true: cn("w-full"),
};

export const buttonRound = {
  true: cn("!rounded-full"),
};

// ------------------------------------- End Button -------------------------------------

// ------------------------------------- Start Dialog -------------------------------------

export const defaultAlertDialogClass = cn(
  "fixed left-[50%] top-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%] shadow-[0px_0px_32px_0px_#2225291F] bg-background duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
);

export const alertDialogSize = {
  335: cn("w-[335px] rounded-[16px] py-[24px] px-[20px] max-w-[90%]"),
  480: cn("w-[480px] rounded-[24px] py-[32px] px-[24px] max-w-[90%]"),
};
export const dialogSize = {
  360: cn("w-[360px] rounded-[16px]"),
  480: cn("w-[480px] rounded-[24px]"),
  560: cn("w-[560px] rounded-[20px]"),
  660: cn("w-[660px] rounded-[20px]"),
  860: cn("w-[860px] rounded-[20px]"),
};
export const alertDialogContentSize = {
  335: cn("!mt-[16px] !mb-[32px]"),
  480: cn("!mt-[20px] !mb-[40px]"),
};
export const alertDialogCloseSize = {
  335: cn("top-[24px] right-[20px]"),
  480: cn("top-[24px] right-[24px]"),
};

export const defaultDialogClass = cn(
  "fixed left-[50%] top-[50%] z-50 grid max-w-[90%] translate-x-[-50%] translate-y-[-50%] bg-background p-[0px] shadow-custom1 rounded-[20px] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg sm:top-0 sm:left-0 sm:right-0 sm:bottom-0 sm:translate-x-0 sm:translate-y-0 sm:max-w-[100%] sm:w-full sm:data-[state=closed]:slide-out-to-left-0 sm:data-[state=closed]:slide-out-to-top-[0%] sm:data-[state=open]:slide-in-from-left-0 sm:data-[state=open]:slide-in-from-top-[0%] sm:flex sm:flex-col"
);

// ------------------------------------- End Dialog -------------------------------------

// ------------------------------------- Start Label -------------------------------------
export const defaultLabelClass = cn(
  "rounded-full inline-flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none ring-offset-background"
);

export const labelColor = {
  primary: cn(bgColor.primary, bgHoverColor.primary),
  lightPrimary: cn(bgColor.lightPrimary, bgHoverColor.lightPrimary),
  secondary: cn(bgColor.secondary, bgHoverColor.secondary),
  lightSecondary: cn(bgColor.lightSecondary, bgHoverColor.lightSecondary),
  gray: cn("text-gray13 bg-gray7", `hover:bg-gray6 ${disabledBgColor}`),
  lightGray: cn("text-gray2 bg-gray11", "hover:bg-gray10"),
  plane: cn(bgColor.plane, bgHoverColor.plane),
  red: cn(bgColor.red, bgHoverColor.red),
  lightRed: cn(bgColor.lightRed, bgHoverColor.lightRed),
  yellow: cn(bgColor.yellow, bgHoverColor.yellow),
  lightYellow: cn(bgColor.lightYellow, bgHoverColor.lightYellow),
  orange: cn(bgColor.orange, bgHoverColor.orange),
  lightOrange: cn(bgColor.lightOrange, bgHoverColor.lightOrange),
  green: cn(bgColor.green, bgHoverColor.green),
  lightGreen: cn(bgColor.lightGreen, bgHoverColor.lightGreen),
  blue: cn(bgColor.blue, bgHoverColor.blue),
  lightBlue: cn(bgColor.lightBlue, bgHoverColor.lightBlue),
  purple: cn(bgColor.purple, bgHoverColor.purple),
  lightPurple: cn(bgColor.lightPurple, bgHoverColor.lightPurple),
  sky: cn(bgColor.sky, bgHoverColor.sky),
  lightSky: cn(bgColor.lightSky, bgHoverColor.lightSky),
  pink: cn(bgColor.pink, bgHoverColor.pink),
  lightPink: cn(bgColor.lightPink, bgHoverColor.lightPink),
};

export const labelSize = {
  24: cn("text-button3 py-[5px] px-[8px] rounded-[6px]"),
  18: cn("text-button4 py-[2px] px-[8px] rounded-[4px]"),
};

export const labelRound = {
  true: cn("!rounded-full"),
};

// ------------------------------------- End Label -------------------------------------
// ------------------------------------- Start Checkbox -------------------------------------
export const checkboxColor = {
  primary: cn(
    "data-[state=checked]:bg-primary3 data-[state=checked]:border-primary3"
  ),
  lightPrimary: cn(
    "data-[state=checked]:bg-gray11 data-[state=checked]:border-gray11"
  ),
  secondary: cn(
    "data-[state=checked]:bg-secondary3 data-[state=checked]:border-secondary3"
  ),
  lightSecondary: cn(
    "data-[state=checked]:bg-secondary9 data-[state=checked]:border-secondary9"
  ),
  gray: cn("data-[state=checked]:bg-gray7 data-[state=checked]:border-gray7"),
  lightGray: cn(
    "data-[state=checked]:bg-gray13 data-[state=checked]:border-gray9"
  ),
  red: cn("data-[state=checked]:bg-red2 data-[state=checked]:border-red2"),
  lightRed: cn("data-[state=checked]:bg-red6 data-[state=checked]:border-red6"),
  yellow: cn(
    "data-[state=checked]:bg-yellow2 data-[state=checked]:border-yellow2"
  ),
  lightYellow: cn(
    "data-[state=checked]:bg-yellow6 data-[state=checked]:border-yellow6"
  ),
  orange: cn(
    "data-[state=checked]:bg-orange2 data-[state=checked]:border-orange2"
  ),
  lightOrange: cn(
    "data-[state=checked]:bg-orange6 data-[state=checked]:border-orange6"
  ),
  green: cn(
    "data-[state=checked]:bg-green2 data-[state=checked]:border-green2"
  ),
  lightGreen: cn(
    "data-[state=checked]:bg-green6 data-[state=checked]:border-green6"
  ),
  blue: cn("data-[state=checked]:bg-blue2 data-[state=checked]:border-blue2"),
  lightBlue: cn(
    "data-[state=checked]:bg-blue6 data-[state=checked]:border-blue6"
  ),
  purple: cn(
    "data-[state=checked]:bg-purple2 data-[state=checked]:border-purple2"
  ),
  lightPurple: cn(
    "data-[state=checked]:bg-purple6 data-[state=checked]:border-purple6"
  ),
  sky: cn("data-[state=checked]:bg-sky2 data-[state=checked]:border-sky2"),
  lightSky: cn("data-[state=checked]:bg-sky6 data-[state=checked]:border-sky6"),
  pink: cn("data-[state=checked]:bg-pink2 data-[state=checked]:border-pink2"),
  lightPink: cn(
    "data-[state=checked]:bg-pink6 data-[state=checked]:border-pink6"
  ),
};

export const checkboxPointColor = {
  primary: "data-[state=checked]:text-gray13",
  lightPrimary: "data-[state=checked]:text-gray2",
  secondary: "data-[state=checked]:text-gray13",
  lightSecondary: "data-[state=checked]:text-secondary3",
  gray: "data-[state=checked]:text-gray13",
  lightGray: "data-[state=checked]:text-gray2",
  red: "data-[state=checked]:text-gray13",
  lightRed: "data-[state=checked]:text-red2",
  yellow: "data-[state=checked]:text-gray13",
  lightYellow: "data-[state=checked]:text-yellow2",
  orange: "data-[state=checked]:text-gray13",
  lightOrange: "data-[state=checked]:text-orange2",
  green: "data-[state=checked]:text-gray13",
  lightGreen: "data-[state=checked]:text-green2",
  blue: "data-[state=checked]:text-gray13",
  lightBlue: "data-[state=checked]:text-blue2",
  purple: "data-[state=checked]:text-gray13",
  lightPurple: "data-[state=checked]:text-purple2",
  sky: "data-[state=checked]:text-gray13",
  lightSky: "data-[state=checked]:text-sky2",
  pink: "data-[state=checked]:text-gray13",
  lightPink: "data-[state=checked]:text-pink2",
};

export const hasBackgroundTextColor = {
  primary: `data-[state=checked]:${textColor.primary}`,
  lightPrimary: `data-[state=checked]:${textColor.lightPrimary}`,
  secondary: `data-[state=checked]:${textColor.secondary}`,
  lightSecondary: `data-[state=checked]:${textColor.lightSecondary}`,
  gray: `data-[state=checked]:${textColor.gray}`,
  lightGray: `data-[state=checked]:${textColor.lightGray}`,
  plane: `data-[state=checked]:${textColor.plane}`,
  red: `data-[state=checked]:${textColor.red}`,
  lightRed: `data-[state=checked]:${textColor.lightRed}`,
  yellow: `data-[state=checked]:${textColor.yellow}`,
  lightYellow: `data-[state=checked]:${textColor.lightYellow}`,
  orange: `data-[state=checked]:${textColor.orange}`,
  lightOrange: `data-[state=checked]:${textColor.lightOrange}`,
  green: `data-[state=checked]:${textColor.green}`,
  lightGreen: `data-[state=checked]:${textColor.lightGreen}`,
  blue: `data-[state=checked]:${textColor.blue}`,
  lightBlue: `data-[state=checked]:${textColor.lightBlue}`,
  purple: `data-[state=checked]:${textColor.purple}`,
  lightPurple: `data-[state=checked]:${textColor.lightPurple}`,
  sky: `data-[state=checked]:${textColor.sky}`,
  lightSky: `data-[state=checked]:${textColor.lightSky}`,
  pink: `data-[state=checked]:${textColor.pink}`,
  lightPink: `data-[state=checked]:${textColor.lightPink}`,
};

export const checkboxSize = {
  24: "h-[24px] w-[24px]",
  30: "h-[30px] w-[30px]",
  42: "h-[42px] w-[42px]",
};
// ------------------------------------- End Checkbox -------------------------------------

// ------------------------------------- Start Calendar -------------------------------------

export const calendarColor = {
  primary: cn(bgColor.primary, bgHoverColor.primary),
  primaryGhost: cn(
    `border text-primary3 hover:text-primary3 active:text-primary3 border-primary3 hover:border-primary2 active:border-primary1 disabled:cursor-not-allowed disabled:text-gray8 disabled:border-gray8`
  ),
  lightPrimary: cn(bgColor.lightPrimary, bgHoverColor.lightPrimary),
  secondary: cn(bgColor.secondary, bgHoverColor.secondary),
  lightSecondary: cn(bgColor.lightSecondary, bgHoverColor.lightSecondary),
  gray: cn(bgColor.gray, bgHoverColor.gray),
  lightGray: cn(bgColor.lightGray, bgHoverColor.lightGray),
  plane: cn(bgColor.plane, bgHoverColor.plane),
  red: cn(bgColor.red, bgHoverColor.red),
  lightRed: cn(bgColor.lightRed, bgHoverColor.lightRed),
  yellow: cn(bgColor.yellow, bgHoverColor.yellow),
  lightYellow: cn(bgColor.lightYellow, bgHoverColor.lightYellow),
  orange: cn(bgColor.orange, bgHoverColor.orange),
  lightOrange: cn(bgColor.lightOrange, bgHoverColor.lightOrange),
  green: cn(bgColor.green, bgHoverColor.green),
  lightGreen: cn(bgColor.lightGreen, bgHoverColor.lightGreen),
  blue: cn(bgColor.blue, bgHoverColor.blue),
  lightBlue: cn(bgColor.lightBlue, bgHoverColor.lightBlue),
  purple: cn(bgColor.purple, bgHoverColor.purple),
  lightPurple: cn(bgColor.lightPurple, bgHoverColor.lightPurple),
  sky: cn(bgColor.sky, bgHoverColor.sky),
  lightSky: cn(bgColor.lightSky, bgHoverColor.lightSky),
  pink: cn(bgColor.pink, bgHoverColor.pink),
  lightPink: cn(bgColor.lightPink, bgHoverColor.lightPink),
};

export const calendarRowGap = {
  4: "gap-x-[4px]",
  8: "gap-x-[8px]",
  12: "gap-x-[12px]",
  24: "gap-x-[24px]",
  42: "gap-x-[42px]",
  56: "gap-x-[56px]",
};
export const calendarColumnGap = {
  4: "mt-[4px]",
  8: "mt-[8px]",
  12: "mt-[12px]",
  24: "mt-[24px]",
  42: "mt-[42px]",
  56: "mt-[56px]",
};
// ------------------------------------- End Calendar -------------------------------------

// ------------------------------------- Start Tooltip -------------------------------------
export const tooltipColor = {
  default: cn(bgColor.white),
  darkGray: cn(bgColor.darkGray),
  midGray: cn(bgColor.midGray),
  primary: cn(bgColor.primary),
  lightPrimary: cn(bgColor.lightPrimary),
  secondary: cn(bgColor.secondary),
  lightSecondary: cn(bgColor.lightSecondary),
  gray: cn(bgColor.gray),
  lightGray: cn(bgColor.lightGray),
  plane: cn(bgColor.plane),
  red: cn(bgColor.red),
  lightRed: cn(bgColor.lightRed),
  yellow: cn(bgColor.yellow),
  lightYellow: cn("bg-yellow7 text-gray2"),
  orange: cn(bgColor.orange),
  lightOrange: cn(bgColor.lightOrange),
  green: cn(bgColor.green),
  lightGreen: cn(bgColor.lightGreen),
  blue: cn(bgColor.blue),
  lightBlue: cn(bgColor.lightBlue),
  purple: cn(bgColor.purple),
  lightPurple: cn(bgColor.lightPurple),
  sky: cn(bgColor.sky),
  lightSky: cn(bgColor.lightSky),
  pink: cn(bgColor.pink),
  lightPink: cn(bgColor.lightPink),
};
// ------------------------------------- End Tooltip -------------------------------------
