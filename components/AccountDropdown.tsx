"use client";

import { FaUserAlt } from "react-icons/fa";
import Button from "./Button";
import Dropdown from "./Dropdown";
import DropdownItem from "./DropdownItem";

const AccountDropdown = () => {
    return (
        <Dropdown trigger={<Button className="bg-white"><FaUserAlt /></Button>}>
            <DropdownItem onSelect={() => console.log('Profile clicked')}>Profile</DropdownItem>
            <DropdownItem onSelect={() => console.log('Logout clicked')}>Logout</DropdownItem>
        </Dropdown>
    )
};

export default AccountDropdown;