import React, { useState } from "react"
import { useForm } from "react-hook-form"
import axios from "axios";

const PostSmurfs = () => {
    return(<></>)

//     const [smurf, setSmurf] = useState({
//         name: '',
//         age: '',
//         height: ''
//     });

//     const { register, handleSubmit } = useForm();

//     const onSubmit = (data, e) => {
//         e.preventDefault();
//         axios
//         .post()
//         .then(res => {
//             console.log('response', res)
//         })
//         .catch(err => console.log('post req error', err))
//     }

//     const handleChanges = e => {
//         setSmurf(...smurf, [e.target.name]: e.target.value)
//     }

//     return (<div className="smurf-form">
//         <h1>Add Smurfs To The Village!</h1>
//         <form onSubmit={handlesubmit(onSubmit)}>

//             <input className="form-input"
//                 type="text" placeholder="name"
//                 name="name"
//                 onChange={handleChanges}
//                 ref={register({ required: true })} />

//             <input className="form-input"
//                 type="number" placeholder="age"
//                 name="age"
//                 onChange={handleChanges}
//                 ref={register({ required: true })} />

//             <input className="form-input"
//                 type="text" placeholder="height"
//                 name="height"
//                 onChange={handleChanges}
//                 ref={register({ required: true })} />

//             <input type="submit" className="submitButton" />
//         </form>
//     </div>)
}

export default PostSmurfs;