async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function navigate(template) {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = await fetchHtmlAsText(template);
    localStorage.setItem( 'template', template);
    // If it's home, we have to set the img
    if(template === '/templates/home') setImg()
}

async function restorepage(template) {
    const contentDiv = document.getElementById("content");
    if( localStorage.getItem('template') != null){
        template = localStorage.getItem('template');
    }
    contentDiv.innerHTML = await fetchHtmlAsText(template);
    // If it's home, we have to set the img
    if(template === '/templates/home') setImg()  
}