import { GrSchedule } from "react-icons/gr";
import { AiOutlineNotification } from "react-icons/ai";
import { MdOutlineHistory } from "react-icons/md";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { FaQuestionCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export const navItems = [
    {
        name: 'Dashboard',
        slug: "",
        icon: MdDashboard
    },
    {
        name: 'Schedule Booking',
        slug: "scheduled-booking",
        icon: GrSchedule
    },
    {
        name: 'Notification',
        slug: "notification",
        icon: AiOutlineNotification
    },
    {
        name: 'Booking History',
        slug: "service-history",
        icon: MdOutlineHistory 
    },
    {
        name: 'Invoice',
        slug: "invoice",
        icon: LiaFileInvoiceDollarSolid
    },
    {
        name: 'FAQ',
        slug: "faq",
        icon: FaQuestionCircle
    },
]