import React from 'react';
import TextInput from './TextInput'

class One extends React.Component{
    onSearchEnter(searchItem){
        alert(`${searchItem}`);
    }
    render(){
        return(
            <div>
                <TextInput onSearchEnter={this.onSearchEnter}/>
            </div>
        );
    }
}
export default One;