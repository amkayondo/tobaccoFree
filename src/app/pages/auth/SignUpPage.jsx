import React, { Component } from 'react'
import '../../assets/css/signup.css'
import { Link } from 'react-router-dom'

export default class SignUpPage extends Component {
    render() {
        return (
            <div className="brht kdfk">
            <div className="hder">
            <Link className="asg" to="/">
               <div className="bckda">Cancel</div> 
               </Link>
               <Link className="asg" to="/login">
               <div className="bckda lgnf">Login</div>
            </Link>
            </div>
              
            <div className="kdfnlsl">
            <div className="jdsf">
                Create anew account
            </div>
            <div className="lquths">
                <form className="sgnfn_dib">
                    <input type="number"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    placeholder="0781295406" 
                    name="" id="sgnfn_inpt" />
                    <input type="number" 
                    placeholder="New Pin"
                    name="" id="sgnfn_inpt" />
                    <input type="submit"
                    className="btnfm" 
                    value="Create Account" />
                </form>
            </div>
            </div>       
            </div>
        )
    }
}
