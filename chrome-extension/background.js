let detectUrl = "";
chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{
    if(message.type ==="AUTO_URL" || message.type==="USER_INPUT_URL"){
        detectUrl = message.url;

        fetch("api endpoint",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({url:detectUrl})
        })
        .then(res=>res.json())
        .then(data=>{
            chrome.runtime.sendMessage({
                type:"PREDICTION_RESULT",
                result:data.prediction
            });
        })

        .catch(error=>{
            chrome.runtime.sendMessage({
                type:"PREDICTION_RESULT",
                result:"Error predicting URL"
            });
        });
    }
});

