export default function NavBar() {
    return (
        
<nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-red-600">
<div className="container flex flex-wrap justify-between items-center mx-auto">
  <a href="#" className="flex items-center">
      <img src="/cbrex_icon.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
      <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Employee Management System</span>
  </a>
  <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
    <span className="sr-only">Open main menu</span>
    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
  </button>
  <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-yellow-500">
      <li>
        <a href="/" className="block py-2 pr-4 pl-3 text-white rounded bg-orange-800" aria-current="page">Home</a>
      </li>
      <li>
        <a href="/all_employees" className="block py-2 pr-4 pl-3 text-gray-800 rounded hover:text-red-500">All Employees</a>
      </li>
      <li>
        <a href="/employee_by_id" className="block py-2 pr-4 pl-3 text-gray-800 rounded hover:text-red-500">Get Employee By ID</a>
      </li>
      <li>
        <a href="/add_employee" className="block py-2 pr-4 pl-3 text-gray-800 rounded hover:text-red-500">Add Employee</a>
      </li>
      <li>
        <a href="/remove_employee" className="block py-2 pr-4 pl-3 text-gray-800 rounded hover:text-red-500 ">Remove Employee By ID</a>
      </li>
    </ul>
  </div>
</div>
</nav>

    )
}