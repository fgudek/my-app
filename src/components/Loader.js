import React, {useState} from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
function Loader() {
  let [loading, setloading] = useState(true);

  return (
    <div style={{marginTop:'150px'}}>
      <div className="sweet-loading text-center">
        <PropagateLoader color='#000' loading={loading} css='' size={50} />
      </div>
    </div>
  );
}

export default Loader;
