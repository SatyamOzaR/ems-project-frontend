import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';

export default function NavBar() {

  const router = useRouter();

    return (
        
      <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-red-600">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
            <Image src="/cbrex_icon.png" alt="CBREX Logo" width={40} height={30}/>
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white ml-3">Employee Management System</span>
        </Link>
        
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-yellow-300">
            <li>
              <Link href="/" className={router.pathname == "/" ? "block py-2 pr-4 pl-3 text-white rounded bg-orange-800"
              : "block py-2 pr-4 pl-3 text-gray-800 rounded hover:text-red-500"}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/all_employees" className={router.pathname == "/all_employees" ? "block py-2 pr-4 pl-3 text-white rounded bg-orange-800"
              : "block py-2 pr-4 pl-3 text-gray-800 rounded hover:text-red-500"}>
              All Employees
              </Link>
            </li>
            <li>
              <Link href="/employee_by_id" className={router.pathname == "/employee_by_id" ? "block py-2 pr-4 pl-3 text-white rounded bg-orange-800"
              : "block py-2 pr-4 pl-3 text-gray-800 rounded hover:text-red-500"}>
              Get Employee By ID
              </Link>
            </li>
            <li>
              <Link href="/add_employee" className={router.pathname == "/add_employee" ? "block py-2 pr-4 pl-3 text-white rounded bg-orange-800"
              : "block py-2 pr-4 pl-3 text-gray-800 rounded hover:text-red-500"}>
              Add
              </Link>
            </li>
            <li>
              <Link href="/update_employee" className={router.pathname == "/update_employee" ? "block py-2 pr-4 pl-3 text-white rounded bg-orange-800"
              : "block py-2 pr-4 pl-3 text-gray-800 rounded hover:text-red-500"}>
                Update
              </Link>
            </li>
            <li>
              <Link href="/remove_employee" className={router.pathname == "/remove_employee" ? "block py-2 pr-4 pl-3 text-white rounded bg-orange-800"
              : "block py-2 pr-4 pl-3 text-gray-800 rounded hover:text-red-500"}>
                Remove
              </Link>
            </li>
          </ul>
        </div>
      </div>
      </nav>

    )
}