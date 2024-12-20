let calculateResult = ()=>{
    let studentName = document.getElementById("stud-name").value;
    let totalMarks = document.getElementById("total-marks").value;
    let marksObtained = document.getElementById("obt-marks").value;
    let result = (marksObtained / totalMarks) * 100;

    if(isNaN(result) || result > 100){
        document.getElementById("message").innerHTML="Invalid/Incomplete inputs provided.<br/>Please refresh browser and provide valid inputs"; 
    }
    else if(result>=90 && result<=100){
        document.getElementById("message").innerHTML=`${studentName} has secured grade A with ${result}% marks<br/>Please refresh browser to start again `; 
    }
    else if(result >=80 && result < 90){
        document.getElementById("message").innerHTML=`${studentName} has secured grade B with ${result}% marks<br/>Please refresh browser to start again `; 
    }
    else if (result >=70 && result < 80){
        document.getElementById("message").innerHTML=`${studentName} has secured grade C with ${result}% marks<br/>Please refresh browser to start again `; 
    }
    else if(result >=60 && result < 70){
        document.getElementById("message").innerHTML=`${studentName} has secured grade D with ${result}% marks<br/>Please refresh browser to start again `; 
    }
    else{
        document.getElementById("message").innerHTML=`${studentName} has secured grade F with ${result}% marks<br/>Please refresh browser to start again `; 
    }
    
}
