import React, { useState } from 'react'

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    return <>
        <div className='container'>
            <h2>Create</h2>
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input 
                        type="name" 
                        className="form-control"
                        onChange={(e) =>setName(e.target.value)}  />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input 
                        type="email" 
                        className="form-control"
                        onChange={(e) =>setEmail(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </>
}

export default Create
