This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 프로젝트 규칙

### 컴포넌트 폴더 규칙

```
src
L components
    L ui : shardcn 원본 UI(스타일 정의)
        L 컴포넌트명(shardcn 네이밍을 따름: lower-camel-case)
            L index.tsx
            L styles.ts : 필요할 경우에만 제작 / 커스텀 클래스 / 2개 이상의 컴포넌트에서 사용시 글로벌 스타일 파일에 정의
        L index.ts : ui 묶어서 내보내는 역할
    L atoms : 프로젝트 내부 공통 기능 컴포넌트
        L 컴포넌트명(프로젝트 네이밍 규칙을 따름: PascalCase)
            L index.tsx
            L types.ts
        L index.ts : atoms를 묶어서 내보내는 역할
    L organism :
        L 컴포넌트명(프로젝트 네이밍 규칙을 따름: PascalCase)
            L index.tsx
            L types.ts
        L index.ts : organism 묶어서 내보내는 역할
    L template :
        L 컴포넌트명(프로젝트 네이밍 규칙을 따름: PascalCase)
            L index.tsx
            L types.ts
        L index.ts : template 묶어서 내보내는 역할
```

### 컴포넌트 네이밍 규칙

Atoms 컴포넌트 네이밍 및 기능 정의

- Accordion
  - props
    - contents: { title: string | React.ReactNode, content: string | React.ReactNode }[]
    - mode?: 'single', 'multi' / enum (default : 'single')
    - speed?: number
- Toast : react-toastify 사용 (커스텀 필요시 hooks으로 제공)
- Alert
  - props
    - isOpen: boolean
    - onClose: () => void
    - content: stirng | React.ReactNode
    - title?: stirng | React.ReactNode
    - footerLeft?: string | React.ReactNode
    - footerRight?: { label: string, onClick: () => void }[]
    - hasOutsideClose?: boolean (default false)
    - hasBackground?: boolean (deafault true)
    - hasCloseIcon?: boolean (default false)
    - hasSeparator: boolean (default false)
- Modal
  - props
    - isOpen: boolean
    - onClose: () => void
    - content: stirng | React.ReactNode
    - title?: stirng | React.ReactNode
    - footerLeft?: string | React.ReactNode
    - footerRight?: { label: string, onClick: () => void }[]
    - hasOutsideClose?: boolean (default false)
    - hasBackground?: boolean (deafault true)
    - hasCloseIcon?: boolean (default false)
    - hasSeparator: boolean (default false)
- Avatar
  - props
    - src: string
- Image
  - props
    - mode: 'default', 'ratio' / enum
    - ratio: number[2] ([가로 비율, 세로 비율])
    - src: string
- Label
  - props
    - hasHover: boolean
    - children: string | React.ReactNode
- Button
  - props
    - children: string | React.ReactNode
    - onClick: () => void
    - isFull?: boolean (defaul false)
- Calendar
  - props
    - onSelect: (value: Date) => void
    - selected: Date
    - format: FormatType
- Card
  - props
    - hasCollaps?: boolean (default false , true면 title 필수)
    - hasSeparator?: boolean (default false)
    - title?: string | React.ReactNode
    - content?: string | React.ReactNode
- Chekcbox
  - props
    - value: number | string | boolean
    - onChange: (value: number | string | boolean) => void
- Callapsible
  - props
    - isOpen: boolean
    - contents: string | React.ReactNode
    - previewContents?: string[] | React.ReactNode[]
- Dropdown
  - props
    - renderDropdown?: () => React.ReactNode
    - data?: { itemName: strong | ReactNode, itemTo: string | ReactNode, children: this[] }[]
- Form

  - props

    - formSchema

      ```javascript
      const formSchema = z.object({
        username: z.string().min(2, {
          message: "Username must be at least 2 characters.",
        }),
      });
      ```

    - children: React.ReactNode
    - onSubmit?: () => void
    - hasButton : boolean(default false)

- Tooltip

  - props
    - children: string | ReactNode
    - placement?: 'top', 'left', 'right', 'bottom' / enum
    - rootClassName?: string
    - triggerClassName?: string
    - trigger: string | ReactNode

- Input

  - props
    - value: string
    - onChange: (value: string) => void
    - type?: 'text' | 'password' | 'number' | 'tel' | 'mail'
    - onKeydown?: (e: keyboardEvent) => void
    - hasClear?: boolean (default false)
    - placeholder?: string

- Menubar

  - props
    - menus : { triggerName: string, items: { itemName: string | React.ReactNode,
      itemTo: string | React.ReactNode, type: 'default', 'radio' / enum, hasSeparator: boolean, children: this[] }[] }[]

- Popover
  - props
    - trigger: string | React.ReactNode
    - children: string | React.ReactNode
    - rootClassName?: string
    - triggerClassName?: string
    - placement?: 'top', 'left', 'right', 'bottom' / enum
- Progress
  - props
    - value: number
- RadioGroup
  - props
    - value: string | number | boolean
    - onChange: (value: string | number | boolean) => void
    - options: { label?: string, value: string | number | boolean }[]
- Select

  - props
    - value: string | number | boolean
    - onChange: (value: string | number | boolean) => void
    - options: {label: string, value: string}[]

- Separator : 구분선
  - props
    - type?: 'pixcel', 'percent' (default 'percent')
    - width?: number (default 100)
    - weight?: number (default 1)
    - color?: colorType (default gray3)
- Sheet

  - props
    - isOpen: boolean
    - onClose: () => void
    - onChangeOpen: (value: boolean) => void
    - placement: 'top' | 'bottom' | 'left' | 'right'
    - children: React.ReactNode
    - size: number
    - tableSize?: number
    - mobileSize?: number
    - hasOutsideClose?: boolean (default false)
    - hasBackground?: boolean (default false)

- Skeleton
  - props
    - className: string
- Slider
  - props
    - value: number
    - defaultValue?: number (default 0)
    - max: number
    - step: number
- Swiper
- Switch
  - props
    - value: boolean
    - onChange: (value: boolean) => void
    - label?: string
- DataTable : Ag-grid 사용
- Table : shardn 사용
  - props
    - data: <T[]>
    - rowClassName?: string;
    - headerClassName?: string;
- Tabs
  - props
    - data: { label: string, value: string | number | boolean, children?: string | React.ReactNode }[]
- Textarea
  - props
    - value: string
    - onChange: (value: string) => void
    - placeholder?: string;
    - onKeydown?: (e: keyboardEvent) => void
- Notification
  - props
    - icon: React.ReactNode
- Toggle
  - props
    - children: string | React.ReactNode
- MultiSelect (선택된 데이터를 보여주는 것은 따로 외부에서 vlaue값을 이용해 제공해야 함)
  - props
    - value: string[] | number[] | boolean[]
    - options: { label: string, value: string | number | boolean, onChange: (value: string | number | boolean) => void }[]
    - hasSearch?: boolean (default false)
    - onChage?: (value: string | number | boolean) => void
    - onSearch?: (value: string) => void
    - hasAllSelect?: boolean (defaul false)
    - hasCheckbox?: boolean (default false)
    - placeholder?: string
- Combobox (선택된 데이터는 콤보박스 trigger에 표기, 타입에 따라서 멀티일 경우 ,로 구분하여 표기)
  - props
    - options: { label: string, value: string | number | boolean }[]
    - value: string[] | number[] | boolean[]
    - type?: 'single' | 'multi' (default 'single')
    - onChange?: (value: string | number | boolean) => void
    - onSearch?: (value: string) => void
    - hasAllSelct?: boolean (default)
    - hasCheckbox?: boolean (default false)
    - placeholder?: string
- Command

  - props
    - options: { content: string | React.ReactNode, groupName: string, onClick?: () => void }[]
    - type?: 'single' | 'multi' (default 'single')
    - value: string
    - onSearch?: (value: string) => void
    - placeholder?: string

- 추후 다른 라이브러리 사용 대체
  - DatePicker
  - TimePicker
  - DateRangePicker
  - TimeRangePicker

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
