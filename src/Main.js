import React, { useEffect, useState } from 'react'
import Search from './Search'
import axios from 'axios'
import styled from 'styled-components'
import MovieContents from './MovieContents'


const Main = () => {
  

  return (
    <div>
      <Search></Search>
      <MovieContents></MovieContents>
    </div>

    
  )
}

export default Main
