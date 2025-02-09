import React, { useState } from 'react'
//we separated it as after some time we need to fill the data custom
function header({changeUser, data }) {
    let [username,setUsername] =  useState("");

    const logOut = ()=>{
        localStorage.setItem("loggedInUser","");
        // changeUser("");
        // LoggedInUser ko khali krna hai , set Empty array to the loggedinUser file
        window.location.reload();
        //it will reload the window
    }

    return (
        <div className='h-20 pt-5 flex justify-center items-center text-white '>
            <div className='w-[95%] flex items—end justify-between'>
                <h1 className='text-2xl font-semibold '>Hello, <br/> <span className='text-3xl font-bold'>{"Welcome  " + data.firstName} 🖐</span> </h1>
                <div className='flex items-center justify-center mt-2'>
                    <button onClick={logOut} className='h-11 text-white bg-LoginPageColor text-2xl border-none w-30 rounded-xl'>Log Out</button>
                </div>
            </div>
        </div>
    );
}

export default header