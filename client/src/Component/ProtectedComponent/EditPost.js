import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { Card, CardContent,TextField,CardHeader, CardActionArea } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Axios from 'axios'
import queryString from 'query-string'
import './bootstrap.css'
import {Link} from 'react-router-dom'

const EditPost = () => {
    const [init, setinit] = useState({})

    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [author, setauthor] = useState('')

    useEffect(()=>{
        var url=queryString.parse(window.location.search)
        Axios.get(`http://localhost:5000/get-single-post/${url.id}`)
        .then(res=>{
            // setTitle(res.data.title)
            setinit(res.data)
            // setSummary(res.data.summary)
            // setauthor(res.data.author)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    const onSubmit=()=>{
        let obj={title,summary,author}
        var url=queryString.parse(window.location.search)

        console.log(title,summary,author)
        Axios.post(`http://localhost:5000/edit-post/${url.id}`,obj)
        .then(res=>{

            console.log(res.data)
            window.location.href='/home'
        })
        .catch(err=>{
            console.log(err.response.data)
        })
    }
    return (
        <div >
        {console.log(init)}
            <Navbar title=" Edit Post " />
            <div className="col-md-6 offset-md-3 mt-5">
                <Card className="p-2">
                        <h3  className="text-center ">  Edit Post.</h3>
                    <CardContent>
                        <h5 style={{textDecoration:'underline'}} ><strong>Previus Info :</strong></h5>
                        {
                            init.title?
                            <p><strong>Title: </strong>{init.title}</p>:''
                        }
                        {
                            init.summary?
                            <p><strong>Summary: </strong>{init.summary}</p>:''

                        }
                        {
                            init.author?
                            <p><strong>Author: </strong>{init.author}</p>:''

                        }
                        <form >
                            <div className="row">
                                <div className="col-md-6">
                                    <TextField   type="text" onChange={(e)=>{setTitle(e.target.value)}}  className="from-control" id="standard-basic" label="Title" />
                                </div>
                                <div className="col-md-6">
                                    <TextField defaultValue={summary} type="text" onChange={(e)=>{setSummary(e.target.value)}}  className="from-control" id="standard-basic" label="Summary" />
                                </div>
                                
                                <div className="col-md-6">
                                    <TextField defaultValue={author} type="text" onChange={(e)=>{setauthor(e.target.value)}}  className="from-control" id="standard-basic" label="Author" />
                                </div>
                            </div>
                        </form>
                            <Button onClick={onSubmit} variant="contained" color="secondary" className="mt-5 mb-3 mr-5">Update</Button>

                            <Link to='/home'><Button variant="contained" color="danger" className="mt-5 mb-3">Cancel</Button></Link>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default EditPost