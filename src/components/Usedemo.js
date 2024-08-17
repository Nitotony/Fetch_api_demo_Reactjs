import React, { useState ,useEffect} from "react";


const Demo=()=>{
    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);;

    useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/users")
         .then((response) => response.json())
         .then((data)=>{
            setUsers(data);
            setLoading(false);
         })

         .catch((error)=>{

            console.log("error in fetching data",error);

         })
        
        ;
    },[]);

    return(
        <div>
            {loading?<h1 className="Load">Loading</h1>:(
                <div>
                      <h1>Users Fetched</h1>
                    <ul>
                        {users.map((user)=>{
                            return (
                              <li className="Element" key={user.id}>
                                <h2>{user.name}</h2>
                                email: {user.email}
                              </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    )
 
    
}

export default Demo;