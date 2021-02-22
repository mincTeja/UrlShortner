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
                'Content-Type': 'application/json',
                'Accept': 'application/json'

            }),
            body:JSON.stringify(options)
        });
        fetch(request)
        .then(res => res.json())
        .then(data =>{
            console.log("data"+data);
            urlPath = urlPath + data.id;
            output.innerHTML=urlPath;
        });
    });
});