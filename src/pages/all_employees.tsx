import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../../styles/Home.module.css'
import EmployeeService from '../services/axios_service'

export const getStaticProps = async () => {
  const response = await EmployeeService.getEmployees();
  const employeeList = await response.data
  return {
      props: {
        employeeList: employeeList
      }
  };
}

const AllEmployees = ({employeeList} : any) => 
<>
  <div className={styles.container}>
      <Header />
      <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 mt-5 border-white border-spacing-4">
        <thead className="text-xs text-gray-900 uppercase bg-yellow-400 border-white">
            <tr>
            <th scope="col" className="py-3 px-6">
                    ID
                </th>
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
        {employeeList.map((x: { id : any; firstName: string; lastName: string; email: string; }, i: any) =>
            <tr key={i} className="bg-red-600 border-b">
                <td className="py-4 px-6 text-white">
                {x.id}
                </td>
                <th scope="row" className="py-4 px-6 font-medium text-white whitespace-nowrap ">
                    {x.firstName}
                </th>
                <td className="py-4 px-6 text-white">
                {x.lastName}
                </td>
                <td className="py-4 px-6 text-white">
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