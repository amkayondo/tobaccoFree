import React, { Component } from 'react'
import SignInField from '../../components/auth/SignInField'
import '../../assets/css/auth.css';
import { Container } from 'gestalt'
import { Link } from 'react-router-dom'

export default class SignInPage extends Component {
    render() {
        return (
            <div className="brht kdfk">
            <div className="hder">
               <Link id="acd" to="/">
               <div className="bckda">Cancel</div> 
               </Link>
               <Link id="acd" to="/signup">
               <div className="bckda lgnf gjg">Create new account</div>
               </Link>
            </div>
              
            <div className="kdfnlsl">
            <div className="jdsf">
                   Login to continue 
            </div>
            <div className="lquths">
                <form className="sgnfn_dib">
                    <input type="tel"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    placeholder="0781295406" 
                    name="" id="sgnfn_inpt" />
                    <input type="number" 
                    placeholder="Pin"
                    name="" id="sgnfn_inpt" />
                    <input type="submit"
                    className="btnfm" value="Login" />
                </form>
            </div>
            </div>       
            </div>
        )
    }
}
