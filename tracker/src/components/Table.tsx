import {useState} from 'react'
interface Result {
  List: { description: string; amount: number; category: string }[];
}
const Table = ({ List }: Result) => {
    const [filter , setFilter] = useState('')
    const handleFilterChange = (event:React.ChangeEvent<HTMLSelectElement>) =>{
        setFilter(event.target.value)
    }
    const filteredList  = List.filter((item) =>{
        if(filter === '') return true;
        else return item.category === filter;
    }) 
    const handleDelete = ()=>{
        filteredList.splice(0,1)
    }
  return (
    <div>
      <div className = 'w-50 mx-auto mb-5'>
        <span>
          Filter:
          <select name="" id="filter" className = 'w-25'onChange = {handleFilterChange}>
            <option value="">All</option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Luxury">Luxury</option>
          </select>
        </span>
      </div>
      <table className="my-2 mx-auto">
        <thead>
          <tr style={{ border: "1px solid red" }}>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>{item.category}</td>
              <td>{item.amount}</td>
              <td>
                <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
              </td>
            </tr>
            
          ))}
          <tr><strong>Total :</strong> ${filteredList.map(item => item.amount).reduce((sum , amount)=> sum + amount)}</tr>
        </tbody>
        
      </table>
    </div>
    
  );
  
};

export default Table;
