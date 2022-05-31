import styled from 'styled-components'

export const Button = styled.button`
padding:4px 15px;
margin:2px 10px;
border:1px solid white;
border-radius:1px;
background-color: whitesmoke;
font-weight: bolder;
&:hover{
    cursor: pointer;
    background-color: skyblue;
    border:1px solid #0fd641dc;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition:0.3s;
}
`