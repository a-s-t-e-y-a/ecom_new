import { AiOutlineHeart } from 'react-icons/ai';
import { MdShoppingCart } from 'react-icons/md';
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import Image from "next/image";
import SearchBar from '../SearchBar';
import { useRouter } from "next/router"
import ProfileMenu from '../ProfileMenu';
import MenuComponent from '../MenuComponent';
import CartDialog from '../Dialog/CartDialog';
import { useState } from 'react';




const PageLinks = [
    { href: '/aboutus', label: 'About Us' },
    { href: '/Franchise-Enquiry', label: 'Franchise Enquiry' },
    { href: '/contact', label: 'Contact' },
    { href: '/help', label: 'Help' },
  ]
const Header = () => {
    const [open, setOpen] = useState(false)
    const router = useRouter()
    const {user} = router.query
    return (
        <>
            <CartDialog open={open} setOpen={setOpen} />
            <header className='flex flex-col w-[97%] mx-auto'>

                {/* Top Part */}
                <div className="flex items-center justify-between h-14">
                    {/* Left */}
                    <div>
                        <ul className='flex items-center gap-4 text-[9px]'>
                            <li className="cursor-pointer">Do More,Be More</li>
                            <li className="cursor-pointer">Try In 3D</li>
                            <li className="cursor-pointer">Store Locator</li>
                            <li className="cursor-pointer">Quality</li>
                            <li className="cursor-pointer">USA</li>
                            <li className="cursor-pointer">Singapore</li>
                            <li className="cursor-pointer">Cobrowsing</li>
                            <li className="cursor-pointer">Engineering Blog</li>
                            <li className="cursor-pointer">Lenskart Franchise</li>
                            <li className="cursor-pointer">Lenskart Optom Partner Program</li>
                        </ul>
                    </div>
                    {/* Right  */}
                    <div>
                        <ul className='flex items-center gap-5 text-xs'>
                            <li className="cursor-pointer">Track order</li>
                            <li className="cursor-pointer flex items-center gap-1"><AiOutlineHeart className="h-4 w-4" /> Wishlist</li>
                            <li 
                                className="cursor-pointer flex items-center gap-1"
                                onClick={()=>setOpen(true)}
                            >
                                <MdShoppingCart className="h-4 w-4" />Cart
                            </li>
                            <li className="cursor-pointer">Contact Us</li>
                            <li 
                                className="cursor-pointer"
                                onClick={()=>router.push("/login")}
                            >
                                SignIn & SignUp
                            </li>
                            <li><ProfileMenu /></li>
                        </ul>
                    </div>
                </div>

                {/* Middle Part  */}
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3 font-bold text-sm cursor-pointer">
                        <BsFillTelephonePlusFill className="" /> 1800-111-111
                    </div>
                    <div>
                        <Image
                            src="/logo.png"
                            width={500}
                            height={500}
                            alt="Logo Image"
                        />
                    </div>
                    <div className=''>
                        <SearchBar />
                    </div>

                </div>

                {/* Bottom Part  */}
                <div className='flex items-center justify-between mb-4 py-2 rounded-lg '>
                    <ul className='flex items-center justify-center gap-8 text-sm font-semibold tracking-wide'>
                        <li className="cursor-pointer">Eye Glasses</li>
                        <li className="cursor-pointer">Computer Glasses</li>
                        <li className="cursor-pointer">Kids Glasses</li>
                        <li className="cursor-pointer">Accessories</li> 
                        <li className="cursor-pointer">Sun Glasses</li>
                        <li 
                            className="cursor-pointer inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm  ring-gray-300 hover:bg-gray-50"
                            onClick={()=>router.push("/tryHome")}
                        >
                                Try@Home
                            </li>
                        <li className="cursor-pointer">
                            <MenuComponent title="Pages" items={PageLinks} />
                        </li>
                        <li className="cursor-pointer">Blog</li>
                    </ul>
                    <div className='flex gap-1'>
                        <Image
                            src="/3dtry1.webp"
                            width={60}
                            height={60}
                            alt=""
                            className='rounded-md'
                        />
                        <Image
                            src="/blu.webp"
                            width={60}
                            height={60}
                            alt=""
                            className='rounded-md'
                        />
                        <Image
                            src="/gold.webp"
                            width={60}
                            height={60}
                            alt=""
                            className='rounded-md'
                        />
                    </div>
                </div>

            </header>
        </>
    )
}

export default Header