import { useState } from 'react';
import Header from '../components/header'
import Footer from '../components/footer'
import styles from '../../styles/Home.module.css'
import EmployeeService from '../services/axios_service'
import Card from '../components/card';

export const getStaticProps = async () => {
  const response = await EmployeeService.getEmployees();
  const employeeData = await response.data
  return {
      props: {
        employeeData: employeeData
      }
  };
}

export default function EmployeeByID({employeeData} : any) {
  const [id, setId] = useState("");
  const [employee, setEmployee] = useState();
  
  function handleSubmit(){
      const object = employeeData.find((obj: { id: string; }) => obj.id == id);
      setEmployee(object)
  };

  return (
  <>
  <div className={styles.container}>
  <Header />
      
    <main className="hero container max-w-screen-lg mx-auto pb-10 mt-5">
      <div>
        <div>
          <h4 className="text-xl font-semibold tracking-tight text-gray-900" >Enter ID To Get Details :</h4>
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
            onClick={handleSubmit}>Show Details</button>
        </div>

        <div> {<Card props={employee}/>} 
        </div>
      
      </div>
    </main>
  <Footer />
  </div>
  </>
  )
}