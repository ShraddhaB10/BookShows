import React from 'react'
import './form.css'
export default function Form() {
  return (
    <div className="form">
        <h3 align='center'>{JSON.parse(localStorage.getItem('show')).name}</h3>
        <form>
            <table>
                <tr>
                    <td>Name:</td>
                    <td><input type='text' placeholder= 'enter your name'required/></td>
                </tr>
                <tr>
                    <td>Email Address:</td>
                    <td><input type='text' placeholder= 'enter email address'required/></td>
                </tr>
                <tr>
                    <td>Phone Number:</td>
                    <td><input type='text' 
                    placeholder= 'enter your phone number'
                    required/></td>
                </tr>
                <tr>
                    <td colSpan='2'>
                        <br/>
                        <button type='submit'>BOOK SHOW</button>
                    </td>
                </tr>
            </table>
        </form>
    </div>
  )
}
