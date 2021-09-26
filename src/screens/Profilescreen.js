import React from 'react';
import { Tabs } from 'antd';


const { TabPane } = Tabs;



function Profilescreen(){

return(
<div>

<ul class="nav nav-pills nav-fill">
  <li class="nav-item">
    <a class="profilee" href="/Pro" >Moji podaci</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/Rezervacije">Rezervacije</a>
  </li>
  
</ul>

</div>


);
}
export default Profilescreen;



