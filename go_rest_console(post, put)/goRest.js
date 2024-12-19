//url https://gorest.co.in/public-api/users
// request body data must be in json
//ex: {"id":10, "name":"prashant", "email":"ijprashant6@gmail.com", "gender":"male", "status": "active"}
let consoleFormE1=document.getElementById("consoleForm");
let requestUrlE1=document.getElementById("requestUrl");
let requestUrlErrMsgE1=document.getElementById("requestUrlErrMsg");
let requestMethodE1=document.getElementById("requestMethod");

let requestBodyE1=document.getElementById("requestBody");

let responseStatusE1=document.getElementById("responseStatus");
let responseBodyE1=document.getElementById("responseBody");

let data={
    requestUrl: "https://gorest.co.in/public-api/users",
    requestMethod: "POST",
    requestBody: ""
};

requestUrlE1.addEventListener("change", function(event){
    data.requestUrl=event.target.value;
});

requestMethodE1.addEventListener("change", function(event){
    data.requestMethod=event.target.value; 
});

requestBodyE1.addEventListener("change", function(event){
    data.requestBody=event.target.value;
});

function validateRequestUrl(data){
    let {requestUrl}=data;
    if(requestUrl===""){
        requestUrlErrMsgE1.textContent="Required*";
    }else{
        requestUrlErrMsgE1.textContent="";
    }
}

function sendRequest(data){
    let {requestUrl, requestMethod, requestBody}=data;
    
    let options={
        method: requestMethod,
        headers: {
            "Content-Type":"application/json",
            Accept: "application/json",
            Authorization: "Bearer 068a7e8cabce0a4f6e326aa5e74cc3d95a2d0d0db0c60cd1481d8000b46ddeb5" //go to https://gorest.co.in/my-account/access-tokens create access token add it here
        },
        body: requestBody
    };
    
    fetch(requestUrl, options)
      .then(function(response){
          return response.json();
      })
      .then(function(jsonData){
          let responseStatus=jsonData.code;
          let responseBody=JSON.stringify(jsonData);
          responseStatusE1.value=responseStatus;
          responseBodyE1.value=responseBody;
      });
}

consoleFormE1.addEventListener("submit", function(event){
   event.preventDefault();
   validateRequestUrl(data);
   sendRequest(data);
});

/*
function call(){
    if(responseStatusE1.value===201){
        responseStatusE1.textContent="Post method activated";
    }else{
        responseStatusE1.textContent="error";
    }
}

call();
*/





