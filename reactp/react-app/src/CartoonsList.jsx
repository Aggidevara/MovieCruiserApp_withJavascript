import React from 'react';

const styles={
    list:{
        listStyle:'none'
    }
}
export default function CartoonsList(props){
    return(
        <ul style={styles.list}>
         {
             props.items.map(
                 item=>(
                     item.display?
                        <li>{item.name}</li>:
                        null
                    )
                 )
         }
        </ul>
    )
}
