"use client";

import Link from "next/link";
import Image from "next/image";
import { Grid2X2, Heart, LayoutGrid, Search, ShoppingCart, ShoppingCartIcon, User } from "lucide-react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        // preventing the default behavior
        e.preventDefault();

        const searchValue = e.target.search.value;
        console.log("Search Value:", searchValue);

        router.push(`/search?q=${searchValue}`);
    }

    return (
        <header className="flex flex-col xl:flex-row bg-[#0171DC] px-5 py-3 gap-x-5 gap-y-5 xl:gap-y-0 items-center">
            {/* ----Logo---- */}
            <Link href={"/"}>
                <Image
                    src="https://i.imgur.com/5V4wehM.png"
                    width={150}
                    height={150}
                    alt="Walmart Logo"
                />
            </Link>
            
            {/* ----Search Input---- */}
            <form onSubmit={handleSubmit} className="flex items-cneter bg-white rounded-full w-full flex-1">
                <input name="search" className="flex-1 px-4 outline-none placeholder:text -sm" type="text" placeholder="Search Everything" />

                <button type="submit">
                    <Search className="rounded-full h-10 w-10 px-2 bg-yellow-300 cursor-pointer" />
                </button>
            </form>

            {/* ----More Options---- */}
            <div className="flex items-center justify-between gap-x-5">
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
                    className="flex items-center text-white font-bold gap-x-2 text-sm"
                >
                    <Heart size={20} />
                    <div>
                        <p className="text-xs font-extralight">Reorder</p>
                        <p>My Items</p>
                    </div>
                </Link>

                <Link 
                    href={"/"}
                    className="flex items-center text-white font-bold gap-x-2 text-sm"
                >
                    <User size={20} />
                    <div>
                        <p className="text-xs font-extralight">Sign In</p>
                        <p>Accounts</p>
                    </div>
                </Link>

                <Link 
                    href={"/basket"}
                    className="flex items-center text-white font-bold gap-x-2 text-sm"
                >
                    <ShoppingCartIcon size={20} />
                    <div>
                        <p className="text-xs font-extralight">No Items</p>
                        <p>$0.00</p>
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default Header;