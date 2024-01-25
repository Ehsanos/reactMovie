import React from 'react'


export const Header = ({search}) => {

  const setWordInParent=(word) => {

    search(word);
  }
  return (
    <div>
          <form id="form">
        <input onChange={(e)=>setWordInParent(e.target.value)} type="text" id="search" placeholder="Serach Now ..."/>
    </form>
    </div>
  )
}
