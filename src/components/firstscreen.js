import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import './style/firstscreen.css'
const url = "https://api.tvmaze.com/search/shows?q=all"
async function fetchdata() {
    const response = await fetch(url);
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data)
    localStorage.setItem("data" , JSON.stringify(data));
    console.log(data[0].show.name);
    for(let i in data)
       console.log(data[i].show.name);


}
fetchdata();
function clicked(){
    var showname = document.getElementsByClassName('name').innerHTML;
    console.log(showname)
         localStorage.setItem("showname",showname);
}
function Card(){
    const dataitem = JSON.parse(localStorage.getItem('data'))
    console.log("localstorage")
    console.log(dataitem)
    const showname = dataitem.map((datas)=>
         <>
         <div className="details">
             <tr>
                <td rowspan= '2'className='name'><br/>{datas.show.name}</td>
                <td>Language: {datas.show.language}<br/>
                Genres: {datas.show.genres.map((genre)=><span>{genre} </span>)}</td>
             </tr>
             
             <tr>
                <td>
                <br/>
                    <Link to ='/details'><button className="btn-first" id = {datas.show.id} onClick={()=>{
                        localStorage.setItem("show",JSON.stringify(datas.show))
                    }}> View more </button></Link></td>
             </tr>
             <br/>
         </div>
        
         
         </>
         
    )
    return(
        <div className="subcontainer">
           <table >{showname}</table>
        </div>
    )
}
export default function firstscreen() {
  return (
    <div>
        <div className="container">
            <div className="card">
                <Card />
            </div>
        </div>
    </div>
  )
}
