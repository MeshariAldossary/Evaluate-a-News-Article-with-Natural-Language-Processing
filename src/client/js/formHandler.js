


function handleSubmit(event) {
    event.preventDefault()
    
    let formText = document.getElementById('url').value; 
   
    
    // check what text was put into the form field
    if(Client.urlCheck(url)){
    
    //Fetch request
fetch('http://localhost:8080/addData',{
        method: 'POST',
        credentials: 'same-origin',
       mode: 'cors',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({formText: formText}),
        
    })
    .then(res => res.json())
   
    .then(function(res) {
      const results = document.getElementById('results');
        results.scrollIntoView(false, {
            behavior:'smooth',
        block:"end"})
        
    
        
        document.getElementById('conf').innerHTML = "- Confidence is "+ res.confidence +"%";
        if (res.score_tag === 'N'){
        document.getElementById('polarity').innerHTML = "- Tone is negative." }
        else if(res.score_tag === 'N+'){
            document.getElementById('polarity').innerHTML = "- Tone is very negative."}
        else if(res.score_tag === 'NONE'){
            document.getElementById('polarity').innerHTML = "- No sentiment detected."}
        else if(res.score_tag === 'P+'){
            document.getElementById('polarity').innerHTML = "- Tone is very positive"}
        else if(res.score_tag === 'NEU'){
            document.getElementById('polarity').innerHTML = "- Tone is neutral."}
         else if(res.score_tag === 'P'){
             document.getElementById('polarity').innerHTML = "- Tone is positive."};
        if (res.agreement === 'AGREEMENT'){
            document.getElementById('agreement').innerHTML = "- Tone is consistent throughout"}
            else if(res.agreement === 'DISAGREEMENT'){
                document.getElementById('agreement').innerHTML = "- Tone isn't consistent throughout"};
         if(res.subjectivity === 'OBJECTIVE'){
             document.getElementById('obj').innerHTML = "- Article is more objective than subjective."}
         else if(res.subjectivity === 'SUBJECTIVE'){
             document.getElementById('obj').innerHTML = "- Article is more subjective than objective." }
         else if(res.subjectivity === null){
             document.getElementById('obj').innerHTML = ""}; 
         if(res.irony === 'NONIRONIC'){
             document.getElementById('ironic').innerHTML = "-No irony detected."}
             else if(res.irony === 'IRONIC'){
                 document.getElementById('ironic').innerHTML = "-A level of irony detected."}
             else if(res.irony === null){
                 document.getElementById('ironic').innerHTML = ""}    
         
             })
    console.log("::: Form Submitted :::");
}else{      alert("Please enter a valid URL");
            console.log("Not valid url");
        }
     
   
    }
    
        






    




export { handleSubmit }

