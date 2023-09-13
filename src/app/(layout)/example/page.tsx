"use client";

import { DropdownItem, DropdownType } from "@components/atoms/Dropdown/types";
import { IMenubarMenu, MenubarType } from "@components/atoms/Menubar/types";
import { SelectItemType } from "@components/atoms/Select/types";
import Tabs from "@components/molecules/Tabs";
import { Side } from "@components/atoms/common-types";
import {
  CollectButtons,
  CollectAlerts,
  CollectModals,
  CollectLabels,
  CollectSheets,
  CollectCards,
  CollectCheckboxs,
  CollectCollapsibles,
  CollectSkeletons,
  CollectSliders,
  CollectDropdowns,
  CollectPickers,
  CollectCalendars,
  CollectTabs,
  CollectTerms,
  CollectForm,
  CollectSelects,
  CollectInputs,
  CollectSignupForm,
  CollectMolListEmpty,
  CollectMolProductOptions,
  CollectMolSwipers,
  CollectPagenations,
  CollectNotifications,
  CollectTimeSelectors,
  CollectMaps,
  CollectScheduleTables,
  CollectToasts,
} from "@components/template/collect";
import { IconArrowDownFill, IconDanger } from "src/assets/svg";
import { cn } from "@lib/utils";
import { buttonSize } from "@styles/variants";
import { useState } from "react";
import CollectSwitchs from "@components/template/collect/CollectSwitchs";
import BrandingTypeHeaderA from "@components/template/layout/Header/HeaderTypeA";
import BrandingTypePageHeaderA from "@components/template/layout/Header/PageHeaderA";
import CollectAccordion from "@components/template/collect/CollectAccordion";
import BrandingTypeDisplayContentSectionA from "@components/template/layout/Sections/SectionTypeB";
import CollectHeader from "@components/template/collect/CollectHeader";
import { FooterTypeA } from "@components/template/layout";
import { mockInformation } from "@components/template/collect/CollectMaps";
import {
  EmployeeInfoList,
  ListEmptyTypeA,
  QuickReservation,
  Terms,
  TimeSelector,
} from "@components/molecules";
import { EmployeeInfo } from "@components/organism";
import { ITabsContent } from "@components/molecules/Tabs/types";

const dropdownData: DropdownItem[] = [
  {
    element: "hi",
    to: "h2",
    type: DropdownType.LABEL,
    hasSeparator: true,
  },
  {
    element: "hi",
    to: "h2",
    type: DropdownType.MENU,
    hasSeparator: false,
  },
  {
    element: "hi",
    to: "h2",
    type: DropdownType.PARENT,
    hasSeparator: true,
    children: [
      {
        element: "children-1",
        to: "children-1",
        type: DropdownType.LABEL,
        hasSeparator: true,
      },
      {
        element: "children-2",
        to: "children-2",
        type: DropdownType.MENU,
        hasSeparator: false,
      },
      {
        element: "children- children-3",
        to: "h2",
        type: DropdownType.PARENT,
        hasSeparator: true,
        children: [
          {
            element: "children-1",
            to: "children-1",
            type: DropdownType.LABEL,
            hasSeparator: true,
          },
          {
            element: "children-2",
            to: "children-2",
            type: DropdownType.MENU,
            hasSeparator: false,
          },
        ],
      },
    ],
  },
  {
    element: "hi",
    to: "h2",
    type: DropdownType.LABEL,
    hasSeparator: true,
  },
  {
    element: "hi",
    to: "h2",
    type: DropdownType.LABEL,
    hasSeparator: true,
  },
];

const menubarData: IMenubarMenu[] = [
  {
    element: "h1",
    offset: 40,
    children: [
      {
        element: "h1-1",
        type: MenubarType.LABEL,
        to: "to",
      },
    ],
  },
  {
    element: "h2",
    offset: 40,
    placement: Side.TOP,
    children: [
      {
        element: "h2-1",
        type: MenubarType.PARENT,
        to: "to",
        offset: 40,
        children: [
          {
            element: "h2-1-1",
            type: MenubarType.LABEL,
            to: "to",
          },
        ],
      },
    ],
  },
];

const radioOptions = [
  {
    label: "radio 1",
    value: "radio 1",
  },
  {
    label: "radio 2",
    value: "radio 2",
  },
  {
    label: "radio 3",
    value: "radio 3",
  },
  {
    label: "radio 4",
    value: "radio 4",
  },
];

const selectOptions = [
  {
    label: "select 1",
    value: "1",
  },
  {
    label: "select 2",
    value: "2",
  },
  {
    label: "select 3",
    value: "3",
  },
  {
    label: "select 4",
    value: "4",
    type: SelectItemType.LABEL,
    hasSeparator: true,
  },
  {
    label: "select 5",
    value: "5",
  },
];

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
];

const columns = [
  {
    title: "Name",
    key: "name",
    headerClassName: "string",
    cellClassName: "string",
  },
  {
    title: "Age",
    key: "age",
  },
  {
    title: "Address",
    key: "address",
  },
];

const tabsData: ITabsContent[] = [
  {
    trigger: "trigger 1",
    triggerValue: "trigger 1",
    content: "content 1",
  },
  {
    trigger: "trigger 2",
    triggerValue: "trigger 2",
    content: "content 2",
  },
];

const combobox = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const employMock =
  require("../../../components/organism/EmployeeInfo/employ-info-mock.json")?.rows?.map?.(
    (item: any) => {
      return {
        position: item.partnerEmployeePosition,
        name: item.partnerEmployeeName,
        employeeCareer: [
          ...item.partnerEmployeeBiography,
          ...item.partnerEmployeeCareer,
        ],
        imageUrl: item.partnerEmployeeProfileImageUrl,
      };
    }
  );

const employWorkDateMock = [3, 4, 5];

const employInfoListMock =
  require("../../../components/molecules/EmployeeInfoList/employ-list-mock.json")?.rows?.map?.(
    (item: any) => {
      return {
        position: item.partnerEmployeePosition,
        name: item.partnerEmployeeName,
        imageUrl: item.partnerEmployeeProfileImageUrl,
      };
    }
  );

const tabContents: ITabsContent[] = [
  {
    trigger: "Atoms Component Example",
    content: (
      <div className={cn("flex p-[10px] flex-col gap-[10px]")}>
        <CollectButtons />
        <CollectToasts />
        <CollectAlerts />
        <CollectModals />
        <CollectLabels />
        <CollectSheets />
        <CollectCheckboxs />
        <CollectCollapsibles />
        <CollectSwitchs />
        <CollectSkeletons />
        <CollectSliders />
        <CollectDropdowns />
        <CollectPickers />
        <CollectCalendars />
        <CollectCards />
        <CollectTabs />
        <CollectSelects />
        <CollectInputs />
        <CollectAccordion />
        <CollectTerms />
        <CollectForm />
        <CollectSignupForm />
        <CollectPagenations />
        <CollectNotifications />
        <CollectTimeSelectors />
        <CollectMaps />
        <QuickReservation />
        <CollectScheduleTables />
      </div>
    ),
    triggerValue: "atoms",
  },
  {
    trigger: "Molecules Component Example",
    content: (
      <div className={cn("flex p-[10px] flex-col gap-[10px]")}>
        <EmployeeInfo data={employMock[0]} dates={employWorkDateMock} />
        <EmployeeInfoList data={employInfoListMock} />
        <CollectMolListEmpty />
        <CollectMolSwipers />
        <CollectMolProductOptions />
      </div>
    ),
    triggerValue: "molecules",
  },
  {
    trigger: "Template Component Example",
    content: (
      <div className={cn("flex flex-col gap-[10px]")}>
        <CollectHeader />
        <div className="w-full max-w-[1248px] flex flex-col gap-[80px] justify-center mx-auto my-0">
          <BrandingTypeDisplayContentSectionA title="예약 일시">
            테스트입니다~!
          </BrandingTypeDisplayContentSectionA>

          <BrandingTypeDisplayContentSectionA title="예약 일시">
            테스트입니다~!
          </BrandingTypeDisplayContentSectionA>

          <BrandingTypeDisplayContentSectionA title="예약 일시">
            테스트입니다~!
          </BrandingTypeDisplayContentSectionA>
        </div>
        <FooterTypeA partnerInfo={mockInformation} />
      </div>
    ),
    triggerValue: "template",
  },
];
// const;

export default function Home() {
  let isOpen = true;

  const [comboboxValue, setComboboxValue] = useState<string>();
  const [alertOpen, setAlertOpen] = useState<boolean>(false);

  const handleComboboxValueChange = (val: string) => {
    setComboboxValue(val);
  };

  return (
    <main>
      <Tabs defaultValue="atoms" contents={tabContents} />
      {/* <div
        className={cn("flex  border-b-[1px]")}
        title="Component Example Page"
      >
        <span className={cn(buttonSize[56])}>Component Example Page</span>
      </div> */}
    </main>
  );
}
