"use client"

import DropdownMenu from "@radix-ui/react-dropdown-menu";

interface DropdownItemProps {
    children: React.ReactNode;
    onSelect: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({children, onSelect}) => {
    return (
        <DropdownMenu.Item onSelect={onSelect}>
            {children}
        </DropdownMenu.Item>
    )
}

export default DropdownItem;