import React from 'react';

class TextInput extends React.Component{
    state = {searchText:""};
    onInputSubmit =(a) =>{
        if(a.key === "Enter"){
            a.preventDefault();
            this.props.onSearchEnter(this.state.searchText);
        }
    };
    
    render(){
        return(
            <input type="text" placeholder='Enter Text'
            onKeyDown={this.onInputSubmit} onChange={(a)=>this.setState({searchText: a.target.value})}/>
        );
    }
}

export default TextInput;