import Link from 'next/link'
import { useRouter } from 'next/router';

export const NavLink = ({ href, text }: { href: string, text?: string }) => {

  const router = useRouter();

  const activeClasses = "text-white rounded bg-orange-800";
  const inActiveClasses = "text-gray-800 rounded hover:text-red-500";

  const classes = "block py-2 pr-4 pl-3 " + (router.pathname == href ? activeClasses : inActiveClasses);

  return (
    <Link href={href} className={classes}>{text}</Link>
  )
}

export const navLinks = [
  { href: '/', text: 'Home' },
  { href: '/all_employees', text: 'All Employees' },
  { href: '/employee_by_id', text: 'Get Employee By ID' },
  { href: '/add_employee', text: 'Add Employee' },
  { href: '/remove_employee', text: 'Remove Employee by ID' },
]

export default function NavBar() {

  const router = useRouter();

  return (

    <nav className=" border-gray-200 mt-2 px-2 sm:px-4 py-2.5 rounded bg-red-600">
      <div className="flex flex-wrap justify-between items-center w-full">
        <Link href="/" className="flex items-center">
          <img src="/cbrex_icon.png" className="mr-3 h-6 sm:h-9" alt="CBREX Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Employee Management System</span>
        </Link>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-2 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-2 md:mt-0 md:text-sm md:font-medium md:border-0 bg-yellow-500">
            {navLinks.map((link) => {
              return (
                <li>
                  <NavLink href={link.href} text={link.text} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}