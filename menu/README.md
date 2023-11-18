##  menu-button-npm

A lightweight npm package to create a menu button with a dropdown list.

## Installation

Install the package using npm:

```bash
npm install hamburger-navigation-sudhanshu
```
## How it works?
Import it in Your js file.
```javascript
import { menuButton } from "./menu.js";
```
and pass the menu button  ,content Div and Array of options  as parameter.
```javascript
const Button = document.querySelector("button");
const ContentDiv = document.querySelector(".ContentDiv");
const optionsArray = ["option1","option2"];
menuButton(button,ContentDiv,optionsArray);
```