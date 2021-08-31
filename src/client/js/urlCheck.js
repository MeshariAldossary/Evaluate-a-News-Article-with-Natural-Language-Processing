const urlCheck = (url) => {
    var res = url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null){
    alert("Please add a valid URL");
        return false;
        
     } else
        return true;
  }
  
export{urlCheck}