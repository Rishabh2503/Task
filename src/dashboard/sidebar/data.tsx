import { DocIcon } from "./icons/DocIcon";
import { HomeIcon } from "./icons/HomeIcon";
import  PhotoCardIcon  from "./icons/PhotoCardIcon";
import { PostIcon } from "./icons/PostIcon";

export const data = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/",
  },
  
  {
    title: "Photo",
    icon: <PhotoCardIcon />,
    link: "/admin/photo",
  },
  {
    title: "Post",
    icon: <PostIcon />,
    link: "/admin/post",
  },
  
  {
    title: "Save",
    icon: <DocIcon />,
    link: "/admin/save",
  },
];
