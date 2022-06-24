import React from 'react'
import styled from "styled-components"
import { useState } from 'react';
import VerticalNavBar from './VerticalNavBar';

const Grid = styled.div`

display: grid;
grid:
  "nav header" min-content
  "nav main" 1fr / min-content 1fr;
min-height: 100vh;

`;

const GridNav = styled.nav`
grid-area: nav;
`;

const GridHeader = styled.header`
  grid-area: header;
  position: sticky;
  top: 0;
`;

const GridMain = styled.main`
  grid-area: main;  
`;

export default function Layout({children, ...rest}) {
  
  return (
    <Grid {...rest}>
        <GridNav><VerticalNavBar/></GridNav>
        <GridHeader><h1>sumeya</h1></GridHeader>
        <GridMain>{children}</GridMain>
    </Grid>
  )
}
