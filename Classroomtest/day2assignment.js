function browser(browserName)

{
    if(browserName==="chrome"){
        console.log("launch browser" +browserName)
    }
    else{
        console.log("only chrome"+"is supported")
    }
}
browser("chrome")
browser("edge")
browser("firefox")
browser("safari")
