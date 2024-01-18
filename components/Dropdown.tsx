import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import DropdownItem from "./DropdownItem";

interface DropdownProps {
    children: DropdownItem;
    trigger: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({children, trigger}) => {
    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>{trigger}</DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content className="bg-neutral-900/90">
                    {Array.isArray(children) ? children.map((child, index) => (<DropdownItem key={index}>{child}</DropdownItem>)) : children}
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}

export default Dropdown;