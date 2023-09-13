/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/stories/**/*.{ts,tsx}",
    "./*",
  ],
  purge: {
    enabled: false,
    content: ["./src/**/*.{ts,tsx}"],
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    fontFamily: {
      main: ["var(--font-main)"],
      sub: ["var(--font-sub)"],
    },
    screens: {
      pc: { min: "1025px" },
      lg: { max: "1240px" },
      md: { max: "1024px" },
      sm: { max: "768px" },
    },
    fontSize: {
      d1: [
        "56px",
        {
          lineHeight: "78px ",
          fontWeight: "400",
        },
      ],
      d1m: [
        "56px",
        {
          lineHeight: "78px",
          fontWeight: "600",
        },
      ],
      d1b: [
        "56px",
        {
          lineHeight: "78px ",
          fontWeight: "700",
        },
      ],
      d2: [
        "40px",
        {
          lineHeight: "56px ",
          fontWeight: "400",
        },
      ],
      d2m: [
        "40px",
        {
          lineHeight: "56px ",
          fontWeight: "600",
        },
      ],
      d2b: [
        "40px",
        {
          lineHeight: "56px ",
          fontWeight: "700",
        },
      ],
      d3: [
        "32px",
        {
          lineHeight: "48px ",
          fontWeight: "400",
        },
      ],
      d3m: [
        "32px",
        {
          lineHeight: "48px ",
          fontWeight: "600",
        },
      ],
      d3b: [
        "32px",
        {
          lineHeight: "48px ",
          fontWeight: "700",
        },
      ],
      h1: [
        "28px",
        {
          lineHeight: "40px ",
          fontWeight: "400",
        },
      ],
      h1m: [
        "28px",
        {
          lineHeight: "40px ",
          fontWeight: "600",
        },
      ],
      h1b: [
        "28px",
        {
          lineHeight: "40px ",
          fontWeight: "700",
        },
      ],
      h2: [
        "24px",
        {
          lineHeight: "34px ",
          fontWeight: "400",
        },
      ],
      h2m: [
        "24px",
        {
          lineHeight: "34px ",
          fontWeight: "600",
        },
      ],
      h2b: [
        "24px",
        {
          lineHeight: "34px ",
          fontWeight: "700",
        },
      ],
      h3: [
        "20px",
        {
          lineHeight: "28px ",
          fontWeight: "400",
        },
      ],
      h3m: [
        "20px",
        {
          lineHeight: "28px ",
          fontWeight: "600",
        },
      ],
      h3b: [
        "20px",
        {
          lineHeight: "28px ",
          fontWeight: "700",
        },
      ],
      h4: [
        "16px",
        {
          lineHeight: "26px ",
          fontWeight: "400",
        },
      ],
      h4m: [
        "16px",
        {
          lineHeight: "26px ",
          fontWeight: "600",
        },
      ],
      h4b: [
        "16px",
        {
          lineHeight: "26px ",
          fontWeight: "700",
        },
      ],
      // h5: [
      //   "19px",
      //   {
      //     lineHeight: "28px",
      //     fontWeight: "700",
      //   },
      // ],
      // h6: [
      //   "18px",
      //   {
      //     lineHeight: "26px ",
      //     fontWeight: "700",
      //   },
      // ],
      // h7: [
      //   "17px",
      //   {
      //     lineHeight: "26px ",
      //     fontWeight: "700",
      //   },
      // ],
      // h8: [
      //   "16px",
      //   {
      //     lineHeight: "24px ",
      //     fontWeight: "700",
      //   },
      // ],
      // h9: [
      //   "15px",
      //   {
      //     lineHeight: "22px ",
      //     fontWeight: "700",
      //   },
      // ],
      // h10: [
      //   "14px",
      //   {
      //     lineHeight: "20px",
      //     fontWeight: "700",
      //   },
      // ],
      // h11: [
      //   "13px",
      //   {
      //     lineHeight: "20px",
      //     fontWeight: "700",
      //   },
      // ],
      // h12: [
      //   "12px",
      //   {
      //     lineHeight: "18px",
      //     fontWeight: "700",
      //   },
      // ],
      // h13: [
      //   "11px",
      //   {
      //     lineHeight: "16px",
      //     fontWeight: "700",
      //   },
      // ],
      b1: [
        "24px",
        {
          lineHeight: "38px",
          fontWeight: "400",
        },
      ],
      b1m: [
        "24px",
        {
          lineHeight: "38px",
          fontWeight: "600",
        },
      ],
      b1b: [
        "24px",
        {
          lineHeight: "38px",
          fontWeight: "700",
        },
      ],
      b2: [
        "20px",
        {
          lineHeight: "32px",
          fontWeight: "400",
        },
      ],
      b2m: [
        "20px",
        {
          lineHeight: "32px",
          fontWeight: "600",
        },
      ],
      b2b: [
        "20px",
        {
          lineHeight: "32px",
          fontWeight: "700",
        },
      ],
      b3: [
        "18px",
        {
          lineHeight: "28px",
          fontWeight: "400",
        },
      ],
      b3m: [
        "18px",
        {
          lineHeight: "28px",
          fontWeight: "600",
        },
      ],
      b3b: [
        "18px",
        {
          lineHeight: "28px",
          fontWeight: "700",
        },
      ],
      b4: [
        "16px",
        {
          lineHeight: "26px",
          fontWeight: "400",
        },
      ],
      b4m: [
        "16px",
        {
          lineHeight: "26px",
          fontWeight: "600",
        },
      ],
      b4b: [
        "16px",
        {
          lineHeight: "26px",
          fontWeight: "700",
        },
      ],
      b5: [
        "14px",
        {
          lineHeight: "22px",
          fontWeight: "400",
        },
      ],
      b5m: [
        "14px",
        {
          lineHeight: "22px",
          fontWeight: "600",
        },
      ],
      b5b: [
        "14px",
        {
          lineHeight: "22px",
          fontWeight: "700",
        },
      ],
      b6: [
        "12px",
        {
          lineHeight: "20px",
          fontWeight: "400",
        },
      ],
      b6m: [
        "12px",
        {
          lineHeight: "20px",
          fontWeight: "600",
        },
      ],
      b6b: [
        "12px",
        {
          lineHeight: "20px",
          fontWeight: "700",
        },
      ],
      b7: [
        "10px",
        {
          lineHeight: "16px",
          fontWeight: "400",
        },
      ],
      b7m: [
        "10px",
        {
          lineHeight: "16px",
          fontWeight: "600",
        },
      ],
      b7b: [
        "10px",
        {
          lineHeight: "16px",
          fontWeight: "700",
        },
      ],
      // b7: [
      //   "17px",
      //   {
      //     lineHeight: "26px",
      //     fontWeight: "400",
      //   },
      // ],
      // b7m: [
      //   "17px",
      //   {
      //     lineHeight: "26px",
      //     fontWeight: "400",
      //   },
      // ],
      // b8: [
      //   "16px",
      //   {
      //     lineHeight: "24px",
      //     fontWeight: "400",
      //   },
      // ],
      // b8m: [
      //   "16px",
      //   {
      //     lineHeight: "24px",
      //     fontWeight: "400",
      //   },
      // ],
      // b9: [
      //   "15px",
      //   {
      //     lineHeight: "22px",
      //     fontWeight: "400",
      //   },
      // ],
      // b9m: [
      //   "15px",
      //   {
      //     lineHeight: "22px",
      //     fontWeight: "400",
      //   },
      // ],
      // b10: [
      //   "14px",
      //   {
      //     lineHeight: "20px",
      //     fontWeight: "400",
      //   },
      // ],
      // b10m: [
      //   "14px",
      //   {
      //     lineHeight: "20px",
      //     fontWeight: "400",
      //   },
      // ],
      // b11: [
      //   "13px",
      //   {
      //     lineHeight: "20px",
      //     fontWeight: "400",
      //   },
      // ],
      // b11m: [
      //   "13px",
      //   {
      //     lineHeight: "20px",
      //     fontWeight: "400",
      //   },
      // ],
      // b12: [
      //   "12px",
      //   {
      //     lineHeight: "18px",
      //     fontWeight: "400",
      //   },
      // ],
      // b12m: [
      //   "12px",
      //   {
      //     lineHeight: "18px",
      //     fontWeight: "400",
      //   },
      // ],
      // b13: [
      //   "11px",
      //   {
      //     lineHeight: "16px",
      //     fontWeight: "400",
      //   },
      // ],
      // b13m: [
      //   "11px",
      //   {
      //     lineHeight: "16px",
      //     fontWeight: "400",
      //   },
      // ],
      button1: [
        "17px",
        {
          lineHeight: "20px",
          fontWeight: "500",
        },
      ],
      button2: [
        "15px",
        {
          lineHeight: "18px",
          fontWeight: "500",
        },
      ],
      button3: [
        "13px",
        {
          lineHeight: "16px",
          fontWeight: "500",
        },
      ],
      button4: [
        "12px",
        {
          lineHeight: "14px",
          fontWeight: "500",
        },
      ],
      label1: [
        "17px",
        {
          lineHeight: "20px",
          fontWeight: "500",
        },
      ],
      label2: [
        "15px",
        {
          lineHeight: "18px",
          fontWeight: "500",
        },
      ],
      label3: [
        "13px",
        {
          lineHeight: "16px",
          fontWeight: "500",
        },
      ],
      label4: [
        "12px",
        {
          lineHeight: "14px",
          fontWeight: "500",
        },
      ],
    },
    boxShadow: {
      custom1: "0px 0px 32px 0px #2225291F",
      dropdown1: "2px 2px 8px rgba(34, 37, 41, 0.08)",
      dropdown2: "2px 2px 16px rgba(34, 37, 41, 0.12)",
      dropdown3: "2px 2px 32px rgba(34, 37, 41, 0.12)",
      dropdown4: "0px 0px 60px rgba(34, 37, 41, 0.06)",
      dp1: "0px 2px 4px 0px rgba(94, 101, 110, 0.04)",
      dp2: "0px 2px 24px 0px rgba(94, 101, 110, 0.04)",
      dp4: "0px 2px 24px 0px rgba(94, 101, 110, 0.10)",
      dp8: "0px 4px 32px 0px rgba(94, 101, 110, 0.20)",
      dp16: "0px 8px 40px 0px rgba(94, 101, 110, 0.20)",
    },
    colors: {
      transparent: "transparent",
      primary1: "#002F24",
      primary2: "#0A392E",
      primary3: "#18584C",
      primary4: "#206B5E",
      primary5: "#2D8777",
      primary6: "#42A78F",
      primary7: "#7BCEBB",
      primary8: "#A3E5D5",
      primary9: "#D1F4EC",
      primary10: "#E7FDF8",
      secondary1: "#002F24",
      secondary2: "#0A392E",
      secondary3: "#18584C",
      secondary4: "#206B5E",
      secondary5: "#2D8777",
      secondary6: "#42A78F",
      secondary7: "#7BCEBB",
      secondary8: "#A3E5D5",
      secondary9: "#D1F4EC",
      secondary10: "#E7FDF8",
      secondarySub1: "#D4827F",
      secondarySub2: "#3E3A39",
      secondarySub3: "#FA7124",
      secondarySub4: "#FFFCF7",
      secondarySub5: "#DF818F",
      gray1: "#000000",
      gray2: "#1F1F1F",
      gray3: "#383838",
      gray4: "#555555",
      gray5: "#616161",
      gray6: "#737373",
      gray7: "#949494",
      gray8: "#BEBEBE",
      gray9: "#CECECE",
      gray10: "#E8E8E8",
      gray11: "#F4F4F4",
      gray12: "#F9F9F9",
      gray13: "#FFFFFF",
      red1: "#85101E",
      red2: "#B73342",
      red3: "#D44652",
      red4: "#EB6570",
      red5: "#F68A94",
      red6: "#1F1F1F",
      red7: "#F8E2E4",
      orange1: "#C43100",
      orange2: "#D6551C",
      orange3: "#E35F42",
      orange4: "#F5765D",
      orange5: "#FA9E7F",
      orange6: "#F3CBBD",
      orange7: "#FAEDE8",
      yellow1: "#EA8B1B",
      yellow2: "#F7921B",
      yellow3: "#FFAF36",
      yellow4: "#FFC53D",
      yellow5: "#FFDD80",
      yellow6: "#FFEFB8",
      yellow7: "#FFFBE5",
      green1: "#16592D",
      green2: "#1D6F3F",
      green3: "#2A9C5B",
      green4: "#4BB875",
      green5: "#1F1F1F",
      green6: "#1F1F1F",
      green7: "#F0FCF5",
      sky1: "#084F6B",
      sky2: "#175F7B",
      sky3: "#268CAD",
      sky4: "#3FAFC9",
      sky5: "#7FC6D6",
      sky6: "#CAE7EF",
      sky7: "#ECF9FC",
      teal1: "#3CAADC",
      teal2: "#5AC8FA",
      teal3: "#83D6FB",
      teal4: "#B5E6FD",
      teal5: "#CDEFFE",
      teal6: "#E6F7FE",
      blue1: "#32457A",
      blue2: "#2D4796",
      blue3: "#4E73CC",
      blue4: "#658EE1",
      blue5: "#9FB6EC",
      blue6: "#BECAE8",
      blue7: "#F1F5FD",
      purple1: "#47346B",
      purple2: "#563A8D",
      purple3: "#7956B0",
      purple4: "#B59FE8",
      purple5: "#B59FE8",
      purple6: "#D1CAEB",
      purple7: "#F4EFFF",
      pink1: "#8A0E46",
      pink2: "#AD2260",
      pink3: "#C74A82",
      pink4: "#E569A0",
      pink5: "#ED91BC",
      pink6: "#EBCCDE",
      pink7: "#FDEFF7",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "next-button": "url('/src/assets/svg/icon-arrow-right.svg')",
        "prev-button": "url('/src/assets/svg/icon-arrow-left.svg')",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "default-fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "default-fade-in": "default-fade-in 0.3s ease-out forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
