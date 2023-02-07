import { AiFillShop, AiOutlineHome, AiOutlineUser,AiOutlineUserSwitch } from "react-icons/ai";

const MenuData = [
    {
        title:"หน้าแรก",
        path:"/",
        icon:<AiOutlineHome/>
    },
    {
        title:"สมาชิก",
        path:"/member",
        icon:<AiOutlineUser/>
    },
    {
        title:"สินค้า",
        path:"/product",
        icon:<AiFillShop/>
    },
    {
        title:"แอดมิน",
        path:"/admin",
        icon:<AiOutlineUserSwitch/>
    }
]
export default MenuData