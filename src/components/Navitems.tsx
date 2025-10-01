'use client'
import {NAV_ITEMS} from '@/lib/constants'
import Link from 'next/dist/client/link'
import {usePathname} from "next/navigation";
const Navitems = () => {
     const pathname = usePathname()

    const isActive = (path: string) => {
        if (path === '/') return pathname === '/';

        return pathname.startsWith(path);
    }

  return (
    <div>
      <ul className=" flex flex-cols sm:flex-rows p-2 gap-3 sm:gap-10 font-medium">
        {NAV_ITEMS.map(({ title, href }) => (
          <li key={href} className="nav-item">
             <Link href={href} className={`hover:text-yellow-500 transition-colors ${
                        isActive(href) ? 'text-gray-100' : ''
                    }`}>
                        {title}
                    </Link>
          </li>
        ))}
   
      </ul>
       

    </div>
  )
}

export default Navitems
