window.addEventListener('load',()=>{
    const input = document.querySelector(".input");
    const output = document.querySelector(".output");
    const shortUrl = document.querySelector(".shortUrl");
    const copy = document.querySelector(".copy");

    shortUrl.addEventListener('click',()=>{
        const urlPath="https://url-shortner-himateja.herokuapp.com/";
        const options = {"long_url":input.value};
        console.log(JSON.stringify(options));
        console.log(options);
        const request = new Request(urlPath+"urls",{
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body:JSON.stringify(options)
        });
        fetch(request)
        .then(res => res.json())
        .then(id =>{
            console.log(id);
            urlPath = urlPath + id;
            output.innerHTML=urlPath;
        });
    });
});