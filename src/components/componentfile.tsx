import { MdDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoAnalyticsSharp, IoPerson } from "react-icons/io5";
import { MdReport, MdLocalMall } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import {
  MdInsertChartOutlined,
  MdOutlineBarChart,
  MdStackedLineChart,
} from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

// export const headerA = [
//   {
//     headerName: "Showcase",
//     Route: "/showcase",
//   },
//   {
//     headerName: "Docs",
//     Route: "/docs",
//   },
//   {
//     headerName: "Blog",
//     Route: "/blog",
//   },
//   {
//     headerName: "Analytics",
//     Route: "/analytics",
//   },
//   {
//     headerName: "Templates",
//     Route: "/templates",
//   },
//   {
//     headerName: "Enterprise",
//     Route: "/enterprise",
//   },
// ];

export const sideNavbar = [
  {
    name: "Dashboard",
    link: "/",
    icon: <MdDashboard size={20} />,
  },
  {
    name: "Products",
    link: "/products",
    icon: <FaProductHunt size={20} />,
  },
  {
    name: "Customers",
    link: "/customers",
    icon: <RiCustomerService2Fill size={20} />,
  },

  {
    name: "Analytics",
    icon: <IoAnalyticsSharp size={20} />,

    content: [
      {
        subName: "Defining Routes",
        link: "/routing/defining-routes",
      },
      {
        subName: "Pages And Layout",
        link: "/routing/pages-layout",
      },
    ],
  },
  {
    name: "Promote",
    icon: <MdReport size={20} />,

    content: [
      {
        subName: "Data Fetching",
        link: "/data-fetching/data-fetching",
      },
      {
        subName: "Data Fetching Patterns",
        link: "/data-fetching/data-patterns",
      },
    ],
  },
  {
    name: "Help",
    icon: <IoMdSettings size={20} />,

    content: [
      {
        subName: "Server Components",
        link: "/rendering/server-components",
      },
      {
        subName: "Client Component",
        link: "/rendering/client-component",
      },
    ],
  },
];

export const cards = [
  {
    icon: <MdInsertChartOutlined />,
    text: "Total Sales",
    figure: "$2,500",
  },
  {
    icon: <MdOutlineBarChart />,
    text: "Total Sales",
    figure: "$2,500",
  },
  {
    icon: <MdStackedLineChart />,
    text: "Total Sales",
    figure: "$2,500",
  },
];

export const financialsdata = [
  {
    transactionDate: "07/09/2023,06:31",
    type: "Debit",
    amount: "₦11,800",
    status: (
      <div className=" text-[#CB8A14] bg-[#FFFAF1]  px-3 font-[500] rounded-lg font-custom size0">
        Pending{" "}
      </div>
    ),
  },
  {
    transactionDate: "07/09/2023,06:31",
    type: "Debit",
    amount: "₦11,800",
    status: (
      <div className=" text-[#359A73] bg-[#F5FBF8]  px-2 font-[500] rounded-lg font-custom size0">
        Complete{" "}
      </div>
    ),
  },
  {
    transactionDate: "07/09/2023,06:31",
    type: "Debit",
    amount: "₦11,800",
    status: (
      <div className=" text-[#359A73] bg-[#F5FBF8]  px-2 font-[500] rounded-lg font-custom size0">
        Complete{" "}
      </div>
    ),
  },
];

export const salesData = [
  {
    item: (
      <span className=" p-2 rounded-full bg-blue-500 text-white">
        <FaShoppingCart size={20} />
      </span>
    ),
    text1: "Online Orders",
    text2: "Last 24 hours",
    percent: <span className="text-green-600 text-sm font-semibold">+35%</span>,
    figures: "3894",
  },
  {
    item: (
      <span className=" p-2 rounded-full bg-red-500 text-white">
        <MdLocalMall size={20} />
      </span>
    ),
    text1: "Offline Orders",
    text2: "Last 24 hours",
    percent: <span className="text-red-600 text-sm font-semibold">-17%</span>,
    figures: "1120",
  },
  {
    item: (
      <span className=" p-2 rounded-full bg-green-500 text-white">
        <IoPerson size={20} />
      </span>
    ),
    text1: "New Customers",
    text2: "Last 24 hours",
    percent: <span className="text-green-600 text-sm font-semibold">+20%</span>,
    figures: "894",
  },
];
