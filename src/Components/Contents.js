import React from 'react';
class Contents extends React.Component{
  render(){
    var lists = [];
    var data = this.props.data;
    var i =0;
    while (i<data.length){
        lists.push(<li key={data[i].id}><a href={"/contents/"+data[i].id}
        data-id={data[i].id}
        onClick={function(e){
            e.preventDefault();
            this.props.onChange(e.target.dataset.id);
        }.bind(this)}
        >{data[i].title}</a></li>);
        i=i+1;
    }
    return( 
        <div className='box1'>
        <nav>
            <ul>
                {lists}
                <button onClick={function(e){
                    e.preventDefault();
                    alert("write");
                    this.props.modeChange();
                }.bind(this)}>wirte</button>
            </ul>
        </nav>
        </div>
    );
  }
}

export default Contents;
