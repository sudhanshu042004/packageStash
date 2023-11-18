export function menuButton (button,content,lists) {
    button.addEventListener("click",()=>{
            content.style.display = 'block';
            content.innerHTML = `<button class="close">X</button><ul class="menuList"></ul>`;
            const closebtn = document.querySelector('.close');
            const menuList = document.querySelector('.menuList');
            lists.forEach(element => {
                const option = document.createElement('li');
                option.innerHTML = `<a href="#">${element}</a>`;
                menuList.appendChild(option);
            });
            close(closebtn,content);
            close(menuList,content);
        
    });
};
function close(element,target) {
    element.addEventListener("click",()=>{
        target.style.display = 'none';
    });
}