import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import useSWR from 'swr';
import { API_ROUTES, fetcher } from '../utils';

export const EmployeeTableHeader = ({ columns }: { columns: string[] }) => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {columns.map(column => {
          return (
            <th scope="col" className="py-3 px-6">
              {column}
            </th>
          );
        })}
      </tr>
    </thead>
  )
}

export const EmployeeTableBody = ({ data }: { data: any }) => {
  return (
    <tbody>
      {data.map((x: { firstName: string; lastName: string; email: string; }, i: any) =>
        <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {x.firstName}
          </th>
          <td className="py-4 px-6">
            {x.lastName}
          </td>
          <td className="py-4 px-6">
            {x.email}
          </td>
        </tr>)}
    </tbody>
  )
}

export const EmployeeTable = ({ data }: { data: any }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <EmployeeTableHeader columns={["First Name", "Last Name", "Email"]} />
      <EmployeeTableBody data={data} />
    </table>
  )
}

export default function Home() {

  const { data, error } = useSWR(API_ROUTES.GET_ALL_EMPLOYEES, fetcher);

  if (error) return <div>failed to load</div>

  if (data) {
    return (
      <div className={styles.container}>
        <Header />
        <main className="hero container max-w-screen-lg mx-auto pb-10 mt-5">
          <EmployeeTable data={data}/>
        </main>
        <Footer />
      </div>
    )
  }
}