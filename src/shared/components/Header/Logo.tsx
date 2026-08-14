import logo from '../../../assets/logo.png'

export const Logo = () => {
    return <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-12 w-auto" />
        <p className="font-semibold text-md">Management IT</p>
    </div>
}