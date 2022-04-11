
import React,{useState} from 'react';
import styled  from "styled-components";
import {Search} from '@mui/icons-material';
import {Link} from 'react-router-dom'
const Container=styled.div`
width: 100%;
height: 50px;
 background-color:black; 
color: white;
display:flex;
justify-content:space-between;
align-items:center;
position:sticky;top:0;
cursor:pointer;
`
const Logo=styled.h1`
padding:10px;
`
const Input=styled.input`
width:30vw;
height:auto;
padding:8px;
border-radius:5px;
font-size:20px;
color:black;
`

const RightContainer=styled.div`

 margin-right:15px;


`;

const Login=styled.span`
 margin:5px 20px;
 font-weight:bold;
 color:white;
 text-decoration:none;
`;


const Signup=styled.span`
 margin:5px 20px;
 font-weight:bold;
 color:white;
 text-decoration:none;
`;

const Books=styled.span`
margin:5px 20px;
 font-weight:bold;
 color:white;
 text-decoration:none;

`;



const Navbar = () => {
const[query,setQuery]=useState("")

const inputevent=(e)=>{
    setQuery(e.target.value)
}
console.log(query)










  return (
   
    <Container>
       <div>
           <Logo><em>MyBook </em></Logo>
       </div>
        <div>
        <Input type="text" placeholder="search Books ..." onChange={inputevent} />
        <Search />
    
       </div>


       <RightContainer>
      
          <Link to="">
   <Books>Books</Books>
          </Link>
       
        <Link to="signin">
        <Login>SignIn</Login>
        </Link>
         
             <Link to="signup">
             <Signup>SignUp</Signup>
             </Link>
        
       </RightContainer>
    </Container>
    



  )
}

export default Navbar;