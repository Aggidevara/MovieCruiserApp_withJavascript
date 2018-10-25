import React from 'react';

const styles={
  checklist:{
      marginLeft:'6%'
  },
  labelcheck:{
        fontSize:'20px'
  }
  
}
export default function CheckList(props){
    return( props.items.map(item => (
                                <div>
                                    <input type="checkbox"/>
                                    <label>{item.label}</label>
                                </div>
      
      )
    )
    );
}
