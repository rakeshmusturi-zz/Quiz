import React from "react";
import { connect } from 'react-redux';
import { loadList } from '../actions';
import { bindActionCreators } from 'redux';
import ListSection from './ListSection';

class Pagination extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
	}
	getPaginatedData = (a) => {
		const url = `http://jsonplaceholder.typicode.com/photos?_start=${a}&_limit=5`;
		fetch(url)
		  .then(res => res.json())
		  .then(
		    (result) => {
		      this.setState({
		        //isLoaded: true,
		        list: result
		      });
		      // console.log(result, '----')
		      this.props.dispatch(loadList(result));
		    },
		    (error) => {
		      // this.setState({
		      //   isLoaded: true,
		      //   error
		      // });
		    }
		  )
	}
	render() {
		const { list } = this.state;
		const { fullList } = this.props;
		return (<div style={{ padding: "10px" }}>
			<button onClick={()=>this.getPaginatedData(6)}>1</button>
			<button onClick={()=>this.getPaginatedData(11)}>2</button>
			<button onClick={()=>this.getPaginatedData(16)}>3</button>
			<button onClick={()=>this.getPaginatedData(21)}>4</button>
			<button onClick={()=>this.getPaginatedData(26)}>5</button>
			<button onClick={()=>this.getPaginatedData(31)}>6</button>
			<button onClick={()=>this.getPaginatedData(36)}>7</button>
			<button onClick={()=>this.getPaginatedData(41)}>8</button>
			<button onClick={()=>this.getPaginatedData(46)}>9</button>
			<button onClick={()=>this.getPaginatedData(51)}>10</button>
		</div>)
	}
	
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(loadList, dispatch) }
}

export default connect(mapDispatchToProps)(Pagination);