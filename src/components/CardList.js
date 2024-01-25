import React from 'react'
import {Card} from './Card'

export const CardList = ({movies}) => {
return(
  movies.map((item,index)=>{
    return <Card key={index} movie={item} />

   })


   )
}
