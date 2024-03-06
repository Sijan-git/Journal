import { Box, Grid, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components"



const drawerWidth = 220;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>

    <NavBar drawerWidth={{drawerWidth}} />
    <SideBar/>

    <Box
        component={'main'}
        sx={ {flexGrow: 1, p: 3 }}
    
    >
        <Toolbar/>
        { children }

    </Box>

   </Box>
  )
}


