import React from 'react';
import Title from './Components/Title';
import Contents from './Components/Contents';
import './App.css';
import Diary from './Components/Diary';
import WriteDiary from './Components/WriteDiary';
import UpdateDiary from './Components/UpdateDiary';

class App extends React.Component{
  constructor(props){
    super(props);
    this.max_id =3;
    this.state = {
      selected_content_id : 2,
      mode : 'read',
      mode : 'write',
      contents:[
        {id:1 ,title:"2022/11/01", desc:"contentsssss"},
        {id:2, title:"2022/11/03", desc:"ccccccccccc"},
        {id:3, title:"2022/11/05", desc:"aaaaaaaaa"}
      ]
    }
  }

    
  render(){
    var _title,_desc,_article =null;
    if(this.state.mode === 'read'){
      var i = 0;
      while(i<this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          _article = <Diary onFix={function(e){
            this.setState({
              mode :'fix'
            });
          }.bind(this)} title={_title} desc={_desc}></Diary>
          break;
        }
        i++;
      }

    }
    else if(this.state.mode ==='write'){
      _article = <WriteDiary onSubmit={function(_title,_desc){
        this.max_id = this.max_id+1;
        var _contents = Array.from(this.state.contents);
        _contents.push({id:this.max_id,title:_title,desc:_desc});
        this.setState({
          contents : _contents,
          mode : 'read',
          selected_content_id : this.max_id
        })
      }.bind(this)}></WriteDiary>
    }
    else if(this.state.mode ==='fix'){
      var i = 0;
      while(i<this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
      _article = <UpdateDiary title={_title} desc={_desc} onSubmit={function(_title,_desc){
        var _contents = Array.from(this.state.contents);
        _contents[i].title = _title;
        _contents[i].desc = _desc;
          this.setState({
          contents : _contents,
          mode : 'read'
        })
      }.bind(this)}></UpdateDiary>
    }
    return(
    <>
     <Title></Title>
     {_article}
     <Contents onChange={function(id){
      this.setState({
        mode:'read',
        selected_content_id:Number(id)
      });
     }.bind(this)} 
     modeChange={function(){
      this.setState({
        mode:'write'
      })
     }.bind(this)}
     data={this.state.contents}></Contents>
     
    </>
    );
  }
}


export default App;
