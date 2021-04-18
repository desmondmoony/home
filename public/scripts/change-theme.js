const stylesheet_map = {
    'Dark' : '/stylesheets/dark-theme.css',
    'Light' :'/stylesheets/light-theme.css'
}

const imgs_map = {
    'Dark' : '/resources/imgs/moon-dark.png',
    'Light' : '/resources/imgs/moon-light.png'
}

/** Button trigger function */
async function changeTheme() {
    var css = document.getElementById('style');
    const thm = document.getElementById("thm").textContent;
    css.href = stylesheet_map[thm];
    localStorage.setItem( 'style', thm);
    if(thm === 'Dark'){
        document.getElementById("thm").textContent = 'Light';
    }else if(thm === 'Light'){
        document.getElementById("thm").textContent = 'Dark';
    }
    if( localStorage.getItem('template') ==='/templates/home'){
        document.getElementById("moon").src = imgs_map[thm]
    }
}

/** Load image dynamically according to chosen theme */
async function setImg(){
    if( localStorage.getItem( 'style' )!=null ){
        var thm = localStorage.getItem('style');
        document.getElementById("moon").src = imgs_map[thm]
    }else{
        document.getElementById("moon").src = imgs_map['Light']
    }
}

/** Ran on first page load, to keep theme across pages */
if( localStorage.getItem( 'style' )!=null ){
    var css = document.getElementById('style');
    var thm = localStorage.getItem('style');
    css.href= stylesheet_map[thm];
    if(thm === 'Dark'){
        document.getElementById("thm").textContent = 'Light';
    }else if(thm === 'Light'){
        document.getElementById("thm").textContent = 'Dark';
    }
}