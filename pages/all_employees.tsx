import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:8080/api/employees');
  const data = await res.json()
  return {
      props: {
          data: data
      }
  };
}

const AllEmployees = ({data} : any) => 
<>
  <div className={styles.container}>
      <Header />
      <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="py-3 px-6">
                    First Name
                </th>
                <th scope="col" className="py-3 px-6">
                    Last Name
                </th>
                <th scope="col" className="py-3 px-6">
                    Email 
                </th>
            </tr>
        </thead>
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
    </table>
      </div>
      <Footer />
  </div>
</>

export default AllEmployees