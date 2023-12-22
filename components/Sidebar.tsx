"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";

import Box from "./Box";



interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar = ({ children }: SidebarProps) => {
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
          <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4">
              <div className="inline-flex items-center gap-x-2">
                <TbPlaylist className="text-neutral-400" size={26} />
                <p className="text-neutral-400 font-medium text-md">
                  Your Library
                </p>
              </div>
              <AiOutlinePlus onClick={onClick} size={20} className="text-neutral-400 cursor-pointer hover:text-white transition" />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 px-3">
              Random Shabad Here!
            </div>
          </div>
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">
        {children}
      </main>
    </div>
  )
} 

export default Sidebar;