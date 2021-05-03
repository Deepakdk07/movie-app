import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
function Header() {
    return (
        <header className = "flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className = "flex flex-grow justify-evenly max-w-2xl">
            <HeaderItem title = 'HOME' Icon = {HomeIcon} />
            <HeaderItem title = 'TRENDING' Icon = {LightningBoltIcon} />
            <HeaderItem title = 'VERIFIED' Icon = {BadgeCheckIcon} />
            <HeaderItem title = 'COLLECTIONS' Icon = {CollectionIcon} />
            <HeaderItem title = 'SEARCH' Icon = {SearchIcon} />
            <HeaderItem title = 'ACCOUNT' Icon = {UserIcon} />
        </div>
            
            {/* <Image className = "object-contain"
            src = 'https://drive.google.com/file/d/1Mdly49Nvr72aGxF9JJfcwfG2OQ4sDQxs/view'
            width = {200}
            height = {100} /> */}
            <h1 className = "text-5xl sm:mb-8 sm:font-extrabold font-bold  sm:px-5">MOVIE</h1>
        </header>
    )
}

export default Header
