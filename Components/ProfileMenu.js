import { clearFromStorage } from "@/utils/contants";
import { customLocalStorage } from "@/utils/Helpers";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const ProfileMenu = ({name}) => {
  const router = useRouter();
  const { removeItem } = customLocalStorage;

  const handleLogout = () => {
    clearFromStorage?.map((clrItem) => removeItem(clrItem));
    toast.success("Logout successfully");
    window.location.reload();
  };

  return (
    <Menu>
      <MenuHandler>
        <Avatar
          variant="circular"
          alt="candice wu"
          className="cursor-pointer w-7 h-7 rounded-full"
          src="/shs.png"
        />
      </MenuHandler>
      <MenuList className="space-y-2">
        <MenuItem
          className="flex items-center gap-2"
          onClick={() => router.push(`/user`)}
        >
          {/* <CgProfile className="h-4 w-4" /> */}
          <Typography variant="small" className="font-normal">
            My Profile
          </Typography>
        </MenuItem>
        <MenuItem
          className="flex items-center gap-2"
          onClick={() => router.push(`user/myorder`)}
        >
          {/* <MdOutlineBusinessCenter className="h-4 w-4" /> */}
          <Typography variant="small" className="font-normal">
            My Orders
          </Typography>
        </MenuItem>
        <MenuItem
          className="flex items-center gap-2 "
          onClick={() => handleLogout()}
        >
          {/* <span><GoSignOut className="h-4 w-4" /></span> */}
          <Typography variant="small" className="font-normal">
            Sign Out
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileMenu;
