import React from 'react';
class UpdateDiary extends React.Component{
  render(){
    
    return(
      <div className='box3'>
        <p>Update Diary</p>
        <form action="/update" method='post' 
        onSubmit={function(e){
          this.props.onSubmit(
            
          );
        }.bind(this)}>
            <input placeholder='title' name="title"></input><br/><br/>
            <textarea placeholder='write your diary' name="desc" cols = "40" rows = "30" font-size ="100px"></textarea><br/><br/>
            <button type="submit">submit</button>
        </form>
      </div>
      
    );
  }
}

export default UpdateDiary;
