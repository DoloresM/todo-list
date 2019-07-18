import React from "react";

const User = (props)=>{
  return (<div>
              <div> Name: {props.children} | Age:{props.age}</div>
          </div>)
}

export default User;
