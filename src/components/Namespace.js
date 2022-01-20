import React from "react";

const Main=({title,children})=>(
<div className="main">
  <h2 title={title} className="main_title">{title}</h2>
  <p>{children}</p>
</div>
)
Main.Sample1=()=><p className="main_sample1">sample1</p>
Main.Sample2=()=><p className="main_sample2">sample2</p>

export default Main;

