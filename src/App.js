import React,{useState} from "react";
import style from "./style.css";
import PropTypes from 'prop-types';
import Item from "./Item.js";
import "bootstrap/dist/css/bootstrap.css";


const App = () => {
	const [item,setItem] = useState("");
	var [list,setList] = useState([]);

	return(
		<React.Fragment>
			<input onChange={(e) => setItem(e.target.value)} className="form-control" 
			style={{width:350}}/>
			<button onClick={(e) => {
					if(item.length==0)
						return;
					list.push(item);
					setList(list);
					setItem("");
				}
			} className="btn btn-dark" style={{position:"absolute",left:"30%",top:"0%"}}>
			Add Item</button>
			<ol style={{display:"block"}}>
				{list.map(element => <Item remove={(e) => {
					list = list.filter(elem => elem!==element);
					setList(list);
					setItem("");
				}} edit={(e) => {
					var newItem = prompt("Edit Item !");
					var index = list.indexOf(element);
					list = list.filter(elem => elem!==element);
					if(newItem.length==0&&newItem==null)
							return;
					list.splice(index,0,newItem);				
					setList(list);
					setItem("");
				}}>{element}</Item>)}
			</ol>
		</React.Fragment>
	);
}

export default App;