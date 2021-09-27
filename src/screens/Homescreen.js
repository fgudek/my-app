import React, { useState, useEffect } from "react";
import axios from "axios";
import Teren from "../components/Teren";
import Loader from "../components/Loader";
import 'antd/dist/antd.css'
import Error from "../components/Error";
import moment from 'moment'
// import { DatePicker, Space } from 'antd';
import { TimePicker } from 'antd';
import ReactDOM from 'react-dom'

// function onChangee(date, dateString) {
//   console.log(date, dateString);
// }
// function onChange(times, timesString) {
//   console.log(times, timesString);
// }

function Homescreen() {
  const [tereni, settereni] = useState([]);
  const [loading, setloading] = useState();
  const [error, seterror] = useState();

const [searchkey, setSearchKey]=useState('')

const[type, settype]=useState('all')
 
const[stime, setstime] = useState()
const[etime, setetime] = useState()
const[duplicatetereni, setduplicatetereni]=useState([])



  useEffect(async () => {
    try {
      setloading(true);
      const data = (await axios.get("/api/tereni/getalltereni")).data;

      settereni(data);
      setduplicatetereni(data);
      setloading(false);
    } catch (error) {
      seterror(true);
      console.log(error);
      setloading(false);
    }
  }, []);


function filterByTime(times){
    // console.log(moment.times[0].format('HH:mm'))
    // console.log(moment.times[1].format('HH:mm'))
    setstime(moment(times[0]).format('HH:mm'))
    setetime(moment(times[1]).format('HH:mm'))
    
}

// const start = new Date(2012, 0, 15);
// const end   = new Date(2012, 4, 23);
// const range = moment.range(start, end);


function filterBySearch(){
const temptereni = duplicatetereni.filter(teren=>teren.type.toLowerCase().includes(searchkey.toLowerCase()))

settereni(temptereni)

}


function filterByType(e){

const temptereni=tereni.filter(teren=>teren.type.toLowerCase()==e.toLowerCase())

}






  return (
    <div className="container">
      <div className="row mt-5">
      <div className="col-md-5">

<select className='form-control' value={type} onChange={(e)=> {filterByType(e.target.value)}}>

<option value="all">Svi tereni</option>
<option value="Nogomet">Nogomet</option>
<option value="Kosarka">Košarka</option>
<option value="Tenis">Tenis</option>

</select>
 <input type="text" className='form-control' 
        placeholder='Pretraga terena' 
        alue={searchkey} 
        onChange={(e)=>
        {setSearchKey(e.target.value)}} 
        onKeyUp={filterBySearch}
        />
</div>


        
      <div className='row mt-2' class="naziv" >
        <div className="col-md-4 bs">
        <h1> Odaberi vrijeme za koje želiš rezervirati teren</h1>

        <TimePicker.RangePicker format='HH:mm' onChange={filterByTime} />

        </div>

      
       


      </div>
    
      </div>







      <div className="row justify-content-center mt-5 ">
        {loading ? (
          <Loader/>
        ) :  (
          tereni.map((teren) => {
            return (
              <div className="col-md-9 mt-3">
                <Teren teren={teren} stime={stime} etime={etime} />
              </div>
            );
          })
        ) }
      </div>
    </div>
  );
}



export default Homescreen;
