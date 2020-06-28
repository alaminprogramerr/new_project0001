import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Axios from 'axios'
import { Card, CardContent, CardActionArea } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'



const Home = () => {
    const [posts, setposts] = useState([])
    useEffect(()=>{
        Axios.get('http://localhost:5000/posts')
        .then(res=>{
            setposts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    const deletePost=(id)=>{
        console.log(id)
        Axios.get(`http://localhost:5000/delete-post/${id}`)
        .then(res=>window.location.href='/home')
        .catch(err=>{console.log(err)})
    }
    return (
        <div>
            <Navbar title="Dashboard"/>
            <div className="post container">
                <div className="col-md-8 offset-md-2">
                    <div className="row mt-5">
                        {
                            posts.map(single=>{
                                return (
                                    <div className="col-12 mb-5">
                                        <Card className="p-3">
                                            <CardContent>
                                                <h3>{single.title}</h3>
                                                <p>{single.summary}</p>
                                                <p> <strong>Author : </strong> {single.author} </p>
                                                <p>
                                                    <strong>Date</strong> {single.date_published?single.date_published?.split('T')[0]:''}
                                                    <strong> Time:</strong>  {single.date_published?(single.date_published.split('T')[1]).split('.')[0]:''}  
                                                </p>
                                                <div className="mt-0">
                                                    <Button onClick={()=>deletePost(single._id)}  variant="contained" color="secondary" className="mr-5 mt-5 ">Delete</Button>
                                                    <Link to={`/edit-post/?id=${single._id}`}>
                                                        <Button  variant="contained" color="danger" className="mr-5 mt-5 ">Edit</Button>
                                                    </Link>
                                                   
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
 // {
                                            //     timeFormtter(single.date_published)
                                            // }