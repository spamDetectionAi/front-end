import { useState } from "react";
import { LuInbox } from "react-icons/lu";
import { IoSendOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiDraftLine } from "react-icons/ri";
import { FaRegFolder } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface Menu {
  link: string;
  name: string;
  icon: React.ReactNode;
  number: number | null;
}

const AppSideBar: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const menuList: Menu[] = [
    { link: "/dash/inbox/2", name: "Inbox", icon: <LuInbox />, number: 15 },
    { link: "/dash/sent", name: "Sent", icon: <IoSendOutline />, number: null },
    {
      link: "/dash/spam",
      name: "Spam",
      icon: <RiDeleteBin6Line />,
      number: 26,
    },
    { link: "/dash/draft", name: "Draft", icon: <RiDraftLine />, number: 37 },
    { link: "/dash/folder", name: "Folder", icon: <FaRegFolder />, number: 0 },
    {
      link: "/dash/trash",
      name: "Trash",
      icon: <RiDeleteBin6Line />,
      number: null,
    },
    { link: "/dash/trash", name: "profile", icon: <CiUser />, number: null },
  ];

  return (
    <Sidebar collapsible="icon" className="bg-white">
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupLabel className="mb-7 text-xl text-black font-bold">
            Action menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuList.map((menu, i) => (
                <SidebarMenuItem key={menu.name}>
                  <SidebarMenuButton
                    asChild
                    onClick={() => setSelectedIndex(i)}
                    className={
                      selectedIndex === i
                        ? "text-black font-bold bg-[rgb(233,233,236)]"
                        : "text-gray-400 font-bold "
                    }
                  >
                    <Link to={menu.link} className="flex items-center gap-2">
                      {menu.icon}
                      <span className="text-sm">{menu.name}</span>
                      {menu.number !== null && menu.number > 0 && (
                        <span className="ml-2 text-xs bg-gray-200 rounded-full px-2">
                          {menu.number}
                        </span>
                      )}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSideBar;
