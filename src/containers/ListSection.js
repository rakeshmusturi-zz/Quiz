import React from "react";
import { connect } from 'react-redux';
import { loadList } from '../actions';
import { bindActionCreators } from 'redux';

class ListSection extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	list: []
		// }
	}
	deleteEntry = (id) => {
		const { fullList, dispatch } = this.props;
		const list = [];
		fullList.map((data)=>{
			if(data.id !== id) {
				list.push(data);
			}
		})
		dispatch(loadList(list));
	}
	render() {
		const { fullList } = this.props;
		return(
			<table>
			  <tr>
			    <th>Title</th>
			    <th>Image</th>
			    <th>Thumbnail</th>
			  </tr>
			  {fullList.map((data)=>{
			  	return(<tr>
			  	  <td>{data.title}</td>
			  	  <td><img style={{ width: "20%" }} src={data.url} /></td>
			  	  <td><img src={data.thumbnailUrl} /></td>
			  	  <td><button onClick={()=>this.deleteEntry(data.id)}>Delete</button></td>
			  	</tr>)
			  })}
			  
			</table>
			)
	}
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(loadList, dispatch) }
}

export default connect(mapDispatchToProps)(ListSection);