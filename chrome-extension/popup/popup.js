document.getElementById("checkBtn").addEventListener("click",()=>
    {
    const link = document.getElementById("urlInput").value;
    if(link){
        chrome.runtime.sendMessage({
            type :"USER_INPUT_URL",
            url : link
        });
    }
});


chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{
    if(message.type === "PREDICTION_RESULT"){
        const resultDiv = document.getElementById("result");
        resultDiv.textContent=message.result;
        resultDiv.style.color =  message.result==="Fraud"?"red":"green";
    }
});