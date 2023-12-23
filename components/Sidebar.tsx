"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

import { Shabad } from "@/types";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";

import Box from "./Box";
import Library from "./Library";


interface SidebarProps {
    children: React.ReactNode;
    shabads: Shabad[]
}

const Sidebar = ({ children, shabads }: SidebarProps) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }
    // TODO: Check stripe subscription
    return uploadModal.onOpen();
  }

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box className="overflow-y-auto h-full">
          <Library shabads={shabads}/>
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">
        {children}
      </main>
    </div>
  )
} 

export default Sidebar;