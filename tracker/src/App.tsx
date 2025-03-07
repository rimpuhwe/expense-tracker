
import './App.css'
import Form from './components/Form';
import Table from './components/Table';
import { useState } from 'react';


function App() {
  const [formData , setFormData] = useState<any>([]);
  const handleFormData = (data:any) => {
    setFormData([...formData, data]);
  }
  
  return (
    <>
      <Form onSubmitData={handleFormData}/>
     {formData.length > 0  && <Table List={formData} />}
    </>
  );
  
}

export default App
