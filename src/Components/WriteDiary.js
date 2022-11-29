import React from 'react';
class WriteDiary extends React.Component{
  render(){
    return(
      <div className='box3'>
        <p>Write Diary</p>
        <form action="/write" method='post' 
        onSubmit={function(e){
          e.preventDefault();
          this.props.onSubmit(
            e.target.title.value,
            e.target.desc.value
          );//greate
        }.bind(this)}>
            <input placeholder='title' name="title"></input><br/><br/>
            <textarea placeholder='write your diary' name="desc" cols = "40" rows = "30"></textarea><br/><br/>
            <button type="submit">submit</button>
        </form>
      </div>
      
    );
  }
}

export default WriteDiary;
