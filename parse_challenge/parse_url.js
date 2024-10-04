//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet


//notes:
//function -> str domain -> str name
// url -> https:// -> no funny biz -> ""
//remove https:// - .com -> cnet
function parse(url){
  //relace the things we don't need with ''
 
  //split and grab the domain 
 
return url.replace('https://','').replace('https://','').replace('www.','').split('.')[0]

}

console.log(parse("https://github.com/carbonfive/raygun"))