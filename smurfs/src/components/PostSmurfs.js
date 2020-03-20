import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {connect} from "react-redux";
import {postSmurfs} from '../actions';

const PostSmurfs = (props) => {
    
    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const { register, handleSubmit } = useForm();

    const onSubmit = e => {
        props.postSmurfs(smurf);     
    } 

    const handleChanges = e => {
        setSmurf({...smurf, [e.target.name]: e.target.value})
    }

    return (<div className="smurf-form">
        <h1>Add Smurfs To The Village!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

            <input className="form-input"
                type="text" placeholder="name"
                name="name"
                onChange={handleChanges}
                ref={register({ required: true })} />

            <input className="form-input"
                type="number" placeholder="age"
                name="age"
                onChange={handleChanges}
                ref={register({ required: true })} />

            <input className="form-input"
                type="text" placeholder="height"
                name="height"
                onChange={handleChanges}
                ref={register({ required: true })} />

            <button type="submit">Submit</button>
        </form>
    </div>
    )
}

export default connect(null, {postSmurfs})(PostSmurfs);