import React, { useState } from 'react'
import Navbar from './Navbar'
import { Card, CardContent,TextField,CardHeader, CardActionArea } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Axios from 'axios'


const CreatePost = () => {
    const [errors, seterrors] = useState({})

    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [author, setauthor] = useState('')

    const onSubmit=()=>{
        let obj={title,summary,author}
        Axios.post('http://localhost:5000/create-post',obj)
        .then(res=>{

            console.log(res.data)
            window.location.href='/home'
        })
        .catch(err=>{
            console.log(err.response.data)
            seterrors(err.response.data)
        })
    }
    return (
        <div >
            <Navbar title=" Create Post " />
            <div className="col-md-6 offset-md-3 mt-5">
                <Card className="p-2">
                        <h3  className="text-center "> Create Post.</h3>
                    <CardContent>
                        <form >
                            <div className="row">
                                <div className="col-md-6">
                                    <TextField type="text" onChange={(e)=>{setTitle(e.target.value)}}  error={errors.title} className="from-control" id="standard-basic" label="Title" />
                                    {
                                        errors.title?
                                        <p className="text-danger"> {errors.title} </p>:''
                                    }
                                </div>
                                <div className="col-md-6">
                                    <TextField type="text" onChange={(e)=>{setSummary(e.target.value)}}  error={errors.summary} className="from-control" id="standard-basic" label="Summary" />
                                    {
                                        errors.summary?
                                        <p className="text-danger"> {errors.summary} </p>:''
                                    }
                                </div>
                                
                                <div className="col-md-6">
                                    <TextField type="text" onChange={(e)=>{setauthor(e.target.value)}}  error={errors.author} className="from-control" id="standard-basic" label="Author" />
                                    {
                                        errors.title?
                                        <p className="text-danger"> {errors.author} </p>:''
                                    }
                                </div>
                            </div>
                        </form>
                            <Button onClick={onSubmit} variant="contained" color="secondary" className="mt-5 mb-3">Create</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default CreatePost