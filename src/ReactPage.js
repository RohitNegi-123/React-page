import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Search from '@mui/icons-material/Search';


import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Card from "./Page";
import "./index.css"
const drawerWidth = 140;
const x=6;
const navItems = ['Home', 'Products', 'Distributors','Manufacturers','About Us','Blog',' ',' ','Login'];
const carditem = ['Favipair 400mg (Fabiflu) Tablets','Favipair 400mg (Fabiflu) Tablets','Favipair 400mg (Fabiflu) Tablets','Favipair 400mg (Fabiflu) Tablets','Favipair 400mg (Fabiflu) Tablets','Favipair 400mg (Fabiflu) Tablets'];
function MainPage(props) {
 
  const { window } = props;
  return (
    <Box  sx={{ }}>
      <AppBar style={{backgroundColor:"#800000",height:"52px"}} component="nav">
        <Toolbar>
         
          <Typography
            variant="h6"
            component="div" style={{marginTop:"-12px"}}
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Medical Darpan
          </Typography>
          <Box style={{marginTop:"-12px"}}  sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button style={{marginLeft:"35px"}} key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <div style={{marginLeft: "45px",    marginTop: "55px",marginBottom: "-7%",     float: "left",width: "19%"}}>
           <h7> Paracetamol <KeyboardArrowRightIcon style={{marginBottom:"-6px" }}/> </h7> <h7 style={{    marginTop: "1.5%",marginLeft: "1%"}}>  Search <KeyboardArrowRightIcon style={{marginBottom:"-6px" }} /> </h7>
           <h7 style={{    marginTop: "1.5%",marginLeft: "1%"}}>  FabiFlu Tablet </h7>
        </div>
      <div style={{display:"flex", width:"100%"}}>
      <div class="topnav">
  <Search style={{       marginLeft: "10px",marginBottom: "-6px"}}/>
  <input type="text" placeholder="Search.." />
  <Button style={{backgroundColor:"#21896c",marginTop: "-84px",marginLeft: "417px",height: "43px",borderRadius: "0px"}} variant="contained">Search</Button>
  <br />
</div>
      </div>


      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <div style={{display: "flex",marginLeft: "20px",marginTop: "-6.3%",marginBottom: "0.3%"}}>
           <h5> Paracetamol</h5> <h7 style={{    marginTop: "1.5%",marginLeft: "1%"}}> (128 products)</h7>
        </div>
        <div style={{display:"flex"}}>
        <div style={{width: "40%",marginLeft: "1.4%",marginRight:"2%",fontSize:"14px"}}>
            <div style={{marginTop:"-15px"}}>
                <div style={{backgroundColor:'#8d8d8d',height:"33px"}}>
                    <h5> Related Category</h5>
                </div>
                <div style={{backgroundColor: "white", height: "114px",marginTop: "-12px"}}>
                    <ul>
                        <li>Paracetamol Tablets</li>
                        <li>Paracetamol Syrup</li>
                        <li>Paracetamol Powder</li>
                        <li>Aceclofenac</li>
                        <li>Magaladrate Simethicone</li>
                    </ul>
                </div>
            </div>
            <div>
                <div style={{backgroundColor:'#8d8d8d',height:"33px"}}>
                    <h5> Related Brands</h5>
                </div>
                <div style={{backgroundColor: "white", height: "114px",marginTop: "-12px"}}>
                    <ul>
                        <li>Ciphol Paracetamol </li>
                        <li>Pandal Paracetamol Tablets</li>
                        <li>Combiflam</li>
                        <li>Crocin Tablets</li>
                        <li>Sumo Tablet</li>
                    </ul>
                </div>
            </div>
            <div>
                <div style={{backgroundColor:'#8d8d8d',height:"33px"}}>
                    <h5> Business Type</h5>
                </div>
                <div style={{backgroundColor: "white", height: "100px",marginTop: "-12px"}}>
                    <ul>
                        <li>WholeSaler </li>
                        <li>Manufacturer</li>
                        <li>Retailer</li>
                        <li>Exporter</li>
                    
                    </ul>
                </div>
            </div>
            <div>
                <div style={{backgroundColor:'#8d8d8d',height:"33px"}}>
                    <h5> Strength </h5>
                </div>
                <div style={{backgroundColor: "white", height: "54px",marginTop: "-12px"}}>
                    <ul>
                        <li>500 mg </li>
                        <li>650 mg</li>
                    
                    
                    </ul>
                </div>
            </div>
            <div>
                <div style={{backgroundColor:'#8d8d8d',height:"33px"}}>
                    <h5> Manufacturer </h5>
                </div>
                <div style={{backgroundColor: "white", height: "54px",marginTop: "-12px"}}>
                    <ul>
                        <li>Intas Pharmaceutical Ltd </li>
                        <li>Alkem Laboratories Ltd</li>
                    
                    
                    </ul>
                </div>
            </div>
        </div>
       <div style={{display: "flex",flexWrap: "wrap"}}>
        {carditem.map((item)=>{
            return(
                <div>
                    <Card name={item}/>
                </div>
            )
        })}
        </div>
        </div>
      </Box>
    </Box>
  );
}


export default MainPage;





// import React from 'react';
// import { Link } from 'react-router-dom';
// // import '../App.css';

// const MainPage = () => {
//     // const  book  = props.book;

//     return(
// <div>
//     <div>
//         <h1> HI</h1>
//     </div>
// </div>

//         // <div className="card-container">
//         //     <img src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3" alt="" />
//         //     <div className="desc">
//         //         <h2>
//         //             <Link to={`/show-book/${book._id}`}>
//         //                 { book.title }
//         //             </Link>
//         //         </h2>
//         //         <h3>{book.author}</h3>
//         //         <p>{book.description}</p>
//         //     </div>
//         // </div>
//     )
// };

// export default MainPage;