window.addEventListener('load',()=>{
    const input = document.querySelector(".input");
    const output = document.querySelector(".output");
    const shortUrl = document.querySelector(".shortUrl");
    const copy = document.querySelector(".copy");

    shortUrl.addEventListener('click',()=>{
        const urlPath="";
        const options = {"long_url":input.value};
        const request = new Request(urlPath+"urls",{body:`'${options}'`});
        fetch(request)
        .then(res => res.json())
        .then(id =>{
            urlPath = urlPath + id;
            output.innerHTML=urlPath;
        });
    });
});