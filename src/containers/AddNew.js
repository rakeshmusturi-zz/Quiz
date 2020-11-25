import React from "react";
import { connect } from 'react-redux';
import { loadList } from '../actions';
import { bindActionCreators } from 'redux';

class AddNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      image: '',
      thumbNail: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event, state) => {
    console.log(event, state);
    switch (state) {
      case "value":
        this.setState({value: event.target.value});
       break;
      case "image":
        this.setState({image: event.target.value});
      break;
      case "thumbNail":
        this.setState({thumbNail: event.target.value});
      break;
      default:
        return "";
    }
    
  }

  handleSubmit(event) {
    event.preventDefault();
    // alert('A name was submitted: ' + this.state.value);
    const newData = {
      albumId: Math.random(),
      id: Math.random(),
      title: this.state.value,
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952"
    }
    const { fullList, dispatch } = this.props;
    const data = Object.assign([], fullList);
    const newModifier = data.unshift(newData);
    dispatch(loadList(data));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter Title:
          <input type="text" placeholder={"Id"} value={this.state.value} onChange={(e)=>this.handleChange(e, 'value')} />
          <input type="text" placeholder={"Image Url"} value={this.state.image} onChange={(e)=>this.handleChange(e, 'image')} />
          <input type="text" placeholder={"Thumbnail Url"} value={this.state.thumbNail} onChange={(e)=>this.handleChange(e, 'thumbNail')} />
        </label>
        <input type="submit" value="Add New" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(loadList, dispatch) }
}

export default connect(mapDispatchToProps)(AddNew);