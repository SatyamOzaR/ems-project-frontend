import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../../styles/Home.module.css'
import EmployeeService from '../services/axios_service'
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function RemoveEmployeeById() {
  
  const router = useRouter();
  const [id, setId] = useState("");
  
  const handleSubmit = async (event : any) => {
    event.preventDefault()
    
    const response = await EmployeeService.deleteEmployee(id)
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
      <div>
        <div>
          <h4 className="text-xl font-semibold tracking-tight text-gray-900" >Enter ID To Delete Details :</h4>
          <input
            className="bg-grey-300 mt-2 p-2"
            id="id"
            name="id"
            type="text"
            value={id}
            onChange={event => setId(event.target.value)}
          />
        </div>
        <div className="mt-5">
          <button className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={handleSubmit}>Remove Details</button>
        </div>
      </div>
      </main>
      
      <Footer />
    </div>
  )
}