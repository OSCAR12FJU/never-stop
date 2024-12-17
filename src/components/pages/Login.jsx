import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../sections/SectionContext";

export const Login = ()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const{setToken} = useAuth();

    console.log("ingresado por el form",email, password)

    const handleSumbit = async(e)=>{
        e.preventDefault();

        if(!email || !password){
            console.error("Email o contraseña no pueden estar vacios");
            return
        }

        try{
            const response = await fetch("https://backend-neverstop.onrender.com/api/auth/login",{
                method:"POST",
                headers:{   
                   "Content-Type": "application/json", 
                },
                body: JSON.stringify({email, password}),
            })

            if (response.ok){
                const data = await response.json();
                console.log("Login exitoso:", data);                
                const {token} = data;
                setToken(token)
                navigate("/edition")
                
            }else{
                console.error("Error en el login");
            }
        }catch(error){
            console.error("Error en la petición:", error);
        }

        setEmail("");
        setPassword("");
        
    }

    return(
        <>
<div className="max-w-md flex justify-center items-center mx-auto h-screen">

<div className="w-full rounded-md shadow-lg p-6">
<h2 className="text-3xl font-bold text-[#212229] mb-6">Ingreso al Editor</h2>    

<form className="max-w-sm w-full" onSubmit={handleSumbit}>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
    <input 
    type="email" 
    id="email" 
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 " placeholder="" 
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required />
  </div>
  <div className="mb-8">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Contraseña</label>
    <input 
    type="password" 
    id="password" 
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 " 
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required />
  </div>
  
  <button type="submit" className="text-white bg-[#212229] font-medium rounded-md text-lg w-full sm:w-auto px-5 py-2.5 text-center">Ingresar</button>
</form>
</div>
</div>

        </>

    )
}