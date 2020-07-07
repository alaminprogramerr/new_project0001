import React  from "react";
import Axios from 'axios'
import {Link} from 'react-router-dom'
import './form.css'
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  Button
} from "shards-react";
class ForgetPassword extends React.Component {
  state={
    name:'',
    email:'',
    password:'',
    confirmPassword:'',
    error:{},
    successMassage:""
  }
  submitHandler=(event)=>{
    event.preventDefault()
    Axios.post('/login',this.state)
    .then(res=>{
      localStorage.setItem('st_app',res.data.token)
      window.location.href='/'
    })
    .catch(err=>{
      // console.log(err.response.data)
      if(err.response){
        this.setState({error:err.response.data})
      }
    })
  }
  changeHandler=(event)=>{
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  render(){
    return (
      <div>
        <div className="col-md-4 offset-md-4 formContainer  ">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className='header'>
              <div className="row  formContainer">
                <div className="col-md-4">Logo</div>
                <div className="col-md-8 ">
                    <h6  className="heading ">Enterprise Pricing and Discounts</h6>
                </div>
              </div>
              <div >
                <p className="mt-5 ">Forget Password</p>
                <>
                <div className="single-filed">
                  <input onChange={(e)=>{this.changeHandler(e)}} name="email" type="email" className="form-control" placeholder="Email"/>
                  {
                    this.state.error.email?
                    <p className="text-danger">{this.state.error.email}</p>:""
                  }
                </div>

                  <button className="btn btn-info" style={{fontSize:'16px',width:'100%'}} onClick={(event)=>{this.submitHandler(event)}}>Sign up</button>
                  <p  style={{marginTop:'150px'}}>Dont have account ? <Link to='/register'>Sign up</Link> </p>
                </>
              </div>
          </div>
          </div>
        </div>
        </div>
      </div>
    )
  }

}

export default ForgetPassword
