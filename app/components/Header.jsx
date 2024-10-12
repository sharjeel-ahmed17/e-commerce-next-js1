import Image from "next/image";
import Link from "next/link";
// import { } from ""
export default function Header() {
    const menulist = [
        {
            name: "home",
            link: '/',
        },
        {
            name: "about",
            link: '/about',
        },
        {
            name: "contact",
            link: '/contact',
        },
    ]
    return (
        <div className="max-w-[1200px] mx-auto px-6 py-2 shadow-2xl">
            <nav className="flex justify-between items-center">
                <div>
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPbd2MBbw3o5_yzYC_pPjoVNKUx7WCrMN3g&s" alt="header logo"
                        width={50}
                        height={50}
                    />
                </div>
                <div>

                    <ul className="flex gap-3">
                        {menulist?.map((item, index) => {
                            return <li key={item.name}><Link href={item.link}>{item.name}</Link></li>
                        })}

                    </ul>
                </div>
                <div>
                    <Link href='/login'>
                        <button className="px-3 py-1 bg-green-700 rounded-full text-white capitalize">login</button>

                    </Link>
                </div>
            </nav>
        </div>
    )
}