import React from 'react'

const List = () => {

const number=[1,2,3,4,5];
const n=number.map(function(number){
return number
})
    return (
    <div>
    <ul>
        <li>{n}</li>
        {n}
    </ul>
    </div>
  )
}

export default List
