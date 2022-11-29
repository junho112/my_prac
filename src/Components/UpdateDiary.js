import React from 'react';
class UpdateDiary extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title : this.props.title,
      desc : this.props.desc,
    }
  }
  render(){
    return(
      <div className='box3'>
        <p>Update Diary</p>
        <form action="/update" method='post' 
        onSubmit={function(e){
          this.props.onSubmit(
            e.target.title.value,
            e.target.desc.value
          );
        }.bind(this)}>
            <input placeholder='title' name="title" value={this.state.title} onChange={function(e){
              this.setState({title:e.target.value});
            }.bind(this)}></input><br/><br/>
            <textarea placeholder='write your diary' name="desc" cols = "40" rows = "30" value={this.state.desc} onChange={function(e){
              this.setState({desc:e.target.value});
            }.bind(this)}></textarea><br/><br/>
            <button type="submit">submit</button>
        </form>
      </div>
      
    );
  }
}

export default UpdateDiary;
