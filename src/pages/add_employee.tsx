import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../../styles/Home.module.css'
import EmployeeService from '../services/axios_service'
import { useRouter } from 'next/router'

export default function AddEmployee() {

  const router = useRouter();
  
  const handleSubmit = async (event : any) => {
    event.preventDefault()
    const data = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
    }
    const JSONdata = JSON.stringify(data)
    const response = await EmployeeService.createEmployee(JSONdata)
    const result = await response.data
    alert(`Data Saved`)
    router.push({
      pathname: '/all_employees'
  });
  }

  return (
    <div className={styles.container}>
      <Header />
      
      <main className="hero container max-w-screen-lg mx-auto pb-10 mt-5">
      <h1 className="text-xl font-semibold tracking-tight text-gray-900">Enter Details To Add Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="mt-6">
          <label htmlFor="firstName" className="text-xl font-semibold tracking-tight text-gray-900">
            First Name : </label>
          <div>
            <input className="bg-grey-300 mt-2 p-2" type="text" name="firstName" id="firstName" />
          </div>
        </div>
        <div className="mt-2">
          <label htmlFor="lastName" className="text-xl font-semibold tracking-tight text-gray-900">
            Last Name : </label>
          <div>
            <input className="bg-grey-300 mt-2 p-2" type="text" name="lastName" id="lastName" />
          </div>
        </div>
        <div className="mt-2">
          <label htmlFor="email" className="text-xl font-semibold tracking-tight text-gray-900">
            Email : </label>
          <div>
            <input className="bg-grey-300 mt-2 p-2" type="text" name="email" id="email" />
          </div>
        </div>
        <div>
        <button type="submit" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-6">
          Submit</button>
        </div>
      </form>
      </main>
      
      <Footer />
    </div>
  )
}