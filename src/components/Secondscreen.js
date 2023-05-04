import React from 'react'
import './style/secondscreen.css'
import {Link} from 'react-router-dom/dist';
import Form from './helper/Form'
function get_url(data){
    if(data.image!==null){
    if(data.image.original === null)
      {if(data.image.medium !== null)
         return data.image.medium;
      else
         return "" } 
         else 
         return  data.image.original}
 return "";
}
const Secondscreen = () => {
  const data =JSON.parse(localStorage.getItem("show"));
 const img_url = get_url(data)
 
  return (
    <div>
        <div className="second-container">
       <img src = {img_url} alt ={data.name} id ="image"/>
            <div className="right">
                <div id = "name-second"><h1>{data.name}</h1></div>
                <div className= "summ" 
                dangerouslySetInnerHTML={{__html: data.summary}}>
                     </div>
                <div>
                    <table className = "second">
                        <tr>       
                          <td>Premiered: {data.premiered}</td>               
                         <td>Status: {data.status}</td>
                        </tr>
                        <tr>
                          {data.network!==null && data.network.name !== null?  <td>Network: {data.network.name}</td>: ''}
                            <td>Language: {data.language}</td>
                        </tr>
                        <tr>
                            <td>Genres: {data.genres.map((genre)=><span>{genre} </span>)}</td>
                           {data.rating.average && <td>
                                 Rating:{data.rating.average} </td>}

                        </tr>
                        <br/>
                        <tr>
                            <td colSpan='2'>
                                <Link to='/details/book'><button id= "watch" align ='center'
                               >BOOK NOW</button></Link></td>
                        </tr>

                    </table>
               
                </div>
            </div>
        </div>
        
        </div>
  )
}

export default Secondscreen