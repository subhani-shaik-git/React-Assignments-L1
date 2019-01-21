import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import ReactTable from "react-table";

import 'react-table/react-table.css'

class App extends React.Component
{



render() {
	  const data = [{
	    id: '100',
	    name: 'Jason ',
	    email: 'jason@example.com'
	   
	  },
	  {
	    id: '101',
	    name: ' Maurer',
	    email: 'Maurer@example.com'
	   
	  },
	  {
	    id: '102',
	    name: ' rick',
	    email: 'rick@example.com'
	   
	  },
	   {
	    id: '103',
	    name: 'Morty',
	    email: 'Morty@example.com'
	   
	  },
	   {
	    id: '104',
	    name: 'Pete',
	    email: 'Pete@example.com'
	   
	  }
	  ]
 
		  const columns = [{
		    Header: 'EmployeeID',
		    accessor: 'id' // String-based value accessors!
		  }, {
		    Header: 'EmployeeName',
		    accessor: 'name',

		  }, {
		  
		    Header: 'EmailID',
		    accessor: 'email'
		  }]
 
	  return (<ReactTable
	    data={data}
	    columns={columns}>



	    {(state, makeTable, instance) => {
    return (
      <div
        style={{
          width:"80%",
          background: "#fffff0",
          borderRadius: "5px",
          overflow: "hidden",
          padding: "5px"
        }}
      >
        
        {makeTable()}
      </div>
    );
  }}

	  </ReactTable>
	  )
}


}




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

