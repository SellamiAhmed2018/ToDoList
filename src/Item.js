import React from "react";

const Item = ({children,remove,edit}) => {
	return(
		<React.Fragment>
			<li style={{width:100}}>{children}</li>
			<button onClick={remove} className="btn btn-primary"
			style={{width:100}}>Remove</button>
			<button onClick={edit} className="btn btn-secondary"
			style={{width:100}}>Edit</button>
		</React.Fragment>
	);
}

export default Item;