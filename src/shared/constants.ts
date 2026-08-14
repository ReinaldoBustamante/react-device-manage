import { LuLayoutDashboard, LuLaptop, LuUsers, LuFileText } from 'react-icons/lu'


export const navLinks = [
    { to: '/', label: 'Dashboard', icon: LuLayoutDashboard },
    { to: '/devices', label: 'Devices', icon: LuLaptop },
    { to: '/users', label: 'Usuarios', icon: LuUsers },
    { to: '/logs', label: 'Logs', icon: LuFileText },
]

export const layoutStyles = {
    headerHeight: 'h-[80px] md:h-[92px] lg:px-24',
    contentOffset: 'mt-[80px] md:mt-[92px] lg:px-24',
}