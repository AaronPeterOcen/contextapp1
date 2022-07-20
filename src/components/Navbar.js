import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class Navbar extends Component {
    static contextType = ThemeContext
    render() { 
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <nav style={{ backkground: theme.ui, color: theme.syntax}}>
                <h1>Context App</h1>
                <ul>
                    <li>Hime</li>
                    <li>About</li>
                    <li>Others</li>
                </ul>
            </nav>
        );
    }
}
 
export default Navbar;