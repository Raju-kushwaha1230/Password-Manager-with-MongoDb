import React, { useRef, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

const Container = () => {
    const [form, setform] = useState({ site: "", username: '', password: '' })
    const ref = useRef()
    const passRef = useRef()
    const [passArray, setpassArray] = useState([])


    const getPassword = async () => {
        const res = await fetch("http://localhost:3000/")
        const passwords = await res.json()
        console.log(passwords);
        setpassArray(passwords)
    }


    useEffect(() => {
        getPassword()
    }, [])


    const handleChange = (e) => {

        setform({ ...form, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents default form submission

        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

           

            setpassArray([...passArray, { ...form, id: uuidv4() }])
            
            await fetch("http://localhost:3000/", {
                method: "POST", headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, id: uuidv4() })
            }
            )
            // localStorage.setItem("password", JSON.stringify([...passArray, { ...form, id: uuidv4() }]))


            await fetch("http://localhost:3000/", {
                method: "DELETE", headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: form.id })
            })
            setform({ site: "", username: "", password: "" });

            toast.success('🦄Password submitted!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }
        else {
            alert('field should be at least 3')
        }
    };



    const handleEdit = (id) => {
        
            
        setform({...passArray.filter(i =>i.id === id)[0], id: id })
        setpassArray(passArray.filter(item=> item.id !==id ))
             
        
         
    }

    const handleDelete = async (id) => {
        console.log(id);
        const c = confirm("do YOu really want to delete")
        if (c) {
            const updatedPassArray = passArray.filter(item => item.id != id);
            setpassArray(updatedPassArray)
            let res = await fetch("http://localhost:3000/", {
                method: "DELETE", headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id })
            })
            // localStorage.setItem('password', JSON.stringify(updatedPassArray))

        }
    }

    const handleEye = () => {
        if (ref.current.src.includes("hidden.png")) {

            ref.current.src = 'eye.png'
            passRef.current.type = 'text'
        }
        else {
            ref.current.src = 'hidden.png';
            passRef.current.type = 'password'
        }
    }




    return (
        <>


            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="colored"
                transition="Bounce"
            />

            <div className='h-[100%] '>
                <div className="absolute top-0 z-[-2] h-screen w-[100%] rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
                <div className="serach  min-h-[90vh]">
                    <div className="container mx-auto  py-2  logo    text-center     ">
                        <span className='text-green-900 text-3xl font-bold'>&lt;</span>
                        <span className=' text-3xl font-bold'>Pas</span>
                        <span className='text-green-700 text-3xl font-bold'>Save/&gt;</span>
                        <form onSubmit={handleSubmit}>
                            <div className="inputs container mx-auto flex flex-col text-xl font-medium items-center gap-7 py-5 ">

                                <div className='w-full'>
                                    <input required className=' w-[80%] p-1 border border-black rounded-xl  bg-white' value={form.site} onChange={handleChange} placeholder='Enter ur site URL' type="text" name="site" id="site" />
                                </div>
                                <div className='container mx-auto  w-full flex justify-center items-center gap-0  '>

                                    <input required className='p-1 mr-10 border border-black rounded-xl w-[50%]  bg-white ' type="text" onChange={handleChange} value={form.username} placeholder='Enter Username' name="username" id="username" />


                                    <input ref={passRef} required className='p-1 border border-black rounded-xl w-[26%] bg-white ' type="password" onChange={handleChange} value={form.password} placeholder='Enter Password' name="password" id="password" />
                                    <span>
                                        <img ref={ref} onClick={handleEye} className='w-7 cursor-pointer' src="hidden.png" alt="" />
                                    </span>



                                </div>
                                <button type='submit' className=' p-1 px-4 border rounded-2xl text-white bg-green-700 cursor-pointer flex gap-2'><lord-icon
                                    src="https://cdn.lordicon.com/ktsahwvc.json"
                                    trigger="hover"
                                    style={{ "width": "30px", "height": "30px" }}>
                                </lord-icon>Save</button>
                            </div>
                        </form>
                        <div className="passwords">
                            <span className='text-green-900 text-3xl font-bold'>&lt;</span>
                            <span className=' text-3xl font-bold'>Your Pas</span>
                            <span className='text-green-700 text-3xl font-bold'>Sword/&gt;</span>
                            <div className='flex justify-center w-full py-7'>
                                {passArray.length === 0 && <div>No Passwords</div>}
                                {passArray.length > 0 && <table className="table-auto  w-[90%]  ">
                                    <thead>
                                        <tr >
                                            <th>Site</th>
                                            <th>Username</th>
                                            <th>Password</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {passArray.map((item, index) => {
                                            return <tr key={item.id} className='odd:bg-white even:bg-gray-0 dark:odd:bg-gray-900/50 dark:even:bg-gray-300 '>
                                                <th className='font-normal'><a href={item.site} target='_blank'>{item.site}</a></th>
                                                <th className='font-normal'>{item.username}</th>
                                                <th className='font-normal'>{item.password}</th>
                                                <th>
                                                    <div className='flex justify-center items-center'>
                                                        <span onClick={() => { handleDelete(item.id) }} className='hover:cursor-pointer'><lord-icon
                                                            src="https://cdn.lordicon.com/skkahier.json"
                                                            trigger="hover"
                                                            style={{ "width": "30px", "height": "25px", }}>
                                                        </lord-icon></span>
                                                        <span onClick={() => handleEdit(item.id)} className='hover:cursor-pointer '><lord-icon
                                                            src="https://cdn.lordicon.com/pflszboa.json"
                                                            trigger="hover"
                                                            style={{ "width": "30px", "height": "30px", "color": "green" }}>
                                                        </lord-icon></span>
                                                    </div>
                                                </th>

                                            </tr>
                                        })}

                                    </tbody>
                                </table>
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Container