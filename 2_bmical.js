const form=document.querySelector('form'); //select whole form as submit button is present in form

// we are not taking the input values here kyuki  run krte hi ye line activate hi jaati yha hoti to ,aur inout to tb empty hota
form.addEventListener('submit',function(e){
        e.preventDefault()  //form hmesha apni input value url ko de deta hai jo ki deefault process  hai aur hum usi default pro ko rok rhe

const height=parseInt(document.querySelector('#height').value); //here we are taking the values from the input feilds
const weight=parseInt(document.querySelector('#weight').value);

if(height=='' || height <0 || isNaN(height)){    //give conditions to height ans inNan is a function used in js to see ki andr wala number hi hai na
        results.innerHTML=`Please give a valid height ${height}`;

}else if (weight=='' || weight <0 || isNaN(weight)){
        results.innerHTML=`Please enter valid value for weight ${weight}`;
}
else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);  //bmi calc krlo and toFixed use hota hai dec k baad k kaha tak value hoga define krne  k lia
        if(`${bmi}` < 18.6){
        results.innerHTML=`<span>${bmi}</span> underweight`   //<span>BMI</span>, it's just wrapping the letters "BMI" in a container that allows you to style or work with those letters separately from the rest of the text.
}
if(18.6< `${bmi}` < 24.9){
        results.innerHTML=`<span>${bmi}</span> normal`

}
if(`${bmi}` > 24.9){
        results.innerHTML=`<span>${bmi}</span> over`

}
}


});