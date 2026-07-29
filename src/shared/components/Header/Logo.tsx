import logo from '../../../assets/logo.png'

export const Logo = () => {
    return <div className="flex items-center gap-4">
        <img src={logo} alt="logo" className="h-10 w-auto" />
        <p className="font-bold">Management IT</p>
    </div>
}