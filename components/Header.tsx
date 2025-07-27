import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Grid2X2, Heart, LayoutGrid, Search, User } from "lucide-react";

const Header = () => {
    return (
        <header className="flex bg-[#0171DC] px-5 py-3 gap-x-5 items-center">
            {/* ----Logo---- */}
            <Link href={"/"}>
                <Image
                    src="https://links.papareact.com/yur"
                    width={150}
                    height={150}
                    alt="Walmart Logo"
                />
            </Link>
            
            {/* ----Search Input---- */}
            <form className="flex items-cneter bg-white rounded-full w-full flex-1">
                <input className="flex-1 px-4 outline-none placeholder:text -sm" type="text" placeholder="Search Everything" />

                <button type="submit">
                    <Search className="rounded-full h-10 w-10 px-2 bg-yellow-300 cursor-pointer" />
                </button>
            </form>

            {/* ----More Options---- */}
            <div className="flex items-center justify-between gap-x-2">
                <Link 
                    href={"/"}
                    className="hidden md:flex items-center text-white font-bold gap-x-2 text-sm"
                >
                    <Grid2X2 size={20} />
                    <p>Departments</p>
                </Link>

                <Link 
                    href={"/"}
                    className="hidden md:flex items-center text-white font-bold gap-x-2 text-sm"
                >
                    <LayoutGrid size={20} />
                    <p>Services</p>
                </Link>

                <Link 
                    href={"/"}
                    className="hidden md:flex items-center text-white font-bold gap-x-2 text-sm"
                >
                    <Heart size={20} />
                    <div>
                        <p className="text-xs font-extralight">Reorder</p>
                        <p>My Items</p>
                    </div>
                </Link>

                <Link 
                    href={"/"}
                    className="hidden md:flex items-center text-white font-bold gap-x-2 text-sm"
                >
                    <User size={20} />
                    <div>
                        <p className="text-xs font-extralight">Sign In</p>
                        <p>Accounts</p>
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;