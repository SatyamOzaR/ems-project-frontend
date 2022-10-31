import Link from 'next/link'
import { useRouter } from 'next/router';

export default function NavBar() {

  const router = useRouter();

    return (
        
<nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-red-600">
<div className="container flex flex-wrap justify-between items-center mx-auto">
  <a href="/" className="flex items-center">
      <img src="/cbrex_icon.png" className="mr-3 h-6 sm:h-9" alt="CBREX Logo"/>
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Employee Management System</span>
  </a>
  <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
    <span className="sr-only">Open main menu</span>
    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
  </button>
  <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-yellow-500">
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
        Add Employee
        </Link>
      </li>
      <li>
        <Link href="/remove_employee" className={router.pathname == "/remove_employee" ? "block py-2 pr-4 pl-3 text-white rounded bg-orange-800"
         : "block py-2 pr-4 pl-3 text-gray-800 rounded hover:text-red-500"}>
          Remove Employee By ID
        </Link>
      </li>
    </ul>
  </div>
</div>
</nav>

    )
}