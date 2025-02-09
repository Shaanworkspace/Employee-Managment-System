import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard.jsx'
import AdminDashboard from './components/DashBoard/AdminDashboard.jsx'
import { setLocalStorage ,getLocalStorage } from './utils/localStorage.jsx'
import { AuthConstent } from './context/AuthProvider.jsx'


function App() {
	let [user,setUser] = useState(null);
	const [loggedInUserData,setLoggedInUserData] = useState(null);
	const Authdata = useContext(AuthConstent);

	useEffect(()=>{
		let loggedInUser = localStorage.getItem("loggedInUser");
		if(loggedInUser){
			setUser(loggedInUser.role)
		}
	},[Authdata]);

	useEffect(()=>{
		setLocalStorage();
	})
	
	
	const identifyUser = (email,password)=>{
		if (!Authdata) {
			alert("Invalid user");
		} else {
			const admin = Authdata.admin?.find((e) => e.email === email && e.password === password);
			const employee = Authdata.employees?.find((e) => e.email === email && e.password === password);
		
			if (admin) {
				setUser("admin");
				setLoggedInUserData(admin);
				localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
			} else if (employee) {
				setUser("employee");
				setLoggedInUserData(employee);
				localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee" }));
			} else {
				alert("Invalid user credentials");
			}
		}		
	}
	
	return (
    <>
		{!user ? (<Login identifyUser={identifyUser} />) : user === "admin" ? (<AdminDashboard changeUser={setUser} data={loggedInUserData} />) : <EmployeeDashboard  changeUser={setUser}  data={loggedInUserData}/>}
    </>
	)
}

export default App
