import React from "react";
import { connect } from 'react-redux';
import { loadList } from '../actions';
import { bindActionCreators } from 'redux';
import ListSection from './ListSection';
import Pagination from './Pagination';
import AddNew from './AddNew';

class FlexiQuiz extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: []
		}
	}
	componentDidMount() {
		const url = "http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5";
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
		  // console.log(this.props, "list dispatch")
		 //this.props.dispatch(loadList(this.state.list));
	}
	render() {
		const { list } = this.state;
		return (<div style={{ padding: "10px" }}>
			<AddNew fullList={this.props.modifyList} />
			<ListSection fullList={this.props.modifyList} />
			<Pagination fullList={this.props.modifyList} />
		</div>)
	}
	
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(loadList, dispatch) }
}

export default connect(mapDispatchToProps)(FlexiQuiz);