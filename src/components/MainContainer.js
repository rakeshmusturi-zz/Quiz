import React from "react";
import { connect } from 'react-redux';
import { loadList } from '../actions';
import { bindActionCreators } from 'redux';
import FlexiQuiz from '../containers/FlexiQuiz';

class MainContainer extends React.Component {
	render() {
		return <FlexiQuiz modifyList={this.props.list} />
	}
}
function mapStateToProps(state){
  return {
    list: state.listReducer,
  };
}
export default connect(mapStateToProps)(MainContainer);