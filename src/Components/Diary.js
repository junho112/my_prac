import React from 'react';
class Diary extends React.Component{
  render(){
    return(
      <div className='box3'>
       <h1>{this.props.title}</h1>
       <h2>{this.props.desc}</h2>
       <button onClick={function(e){
        e.preventDefault();
        this.props.onFix();
       }.bind(this)}>fix diary</button>
      </div>
      
    );
  }
}

export default Diary;
