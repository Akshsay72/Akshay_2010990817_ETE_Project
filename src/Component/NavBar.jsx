import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import B from '../Assets/Images/img6.jpg';

const Header = styled(AppBar)`
    background: #111111;
`;
    
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar = () => {
    
    return (
        <Header position="static">
            <Toolbar>
                <img src={B} alt='...' width="50px" height="50px" />
                <Tabs to="./" exact>Course Management System</Tabs>
                <Tabs to="all" exact> Users and their Course</Tabs>
                <Tabs to="about" exact>About</Tabs>
                <Tabs to="contact" exact>Contact</Tabs>
                <Tabs to="add" exact>Add User</Tabs>
            </Toolbar>
        </Header>
    );
}

export default NavBar;