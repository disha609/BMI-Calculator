const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const weight_guide = document.querySelector('#weight_guide')

    if (height==='' || height<0 || isNaN(height)){
        results.innerHTML="The height entered seems invalid. Please check and enter a valid height.";
        weight_guide.innerHTML="BMI Weight Guide";

    }
    else if (weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML="The weight entered seems invalid. Please check and enter a valid weight.";
        weight_guide.innerHTML="BMI Weight Guide";
    }
    else {
        const bmi = (weight / ( (height * height) /10000)).toFixed(2);
        results.innerHTML=`<span>BMI = ${bmi}</span>`
        if (bmi<18.6){
            weight_guide.innerHTML="Your BMI indicates that you are underweight.";
        }
        else if(bmi>18.6 && bmi<24.9){
            weight_guide.innerHTML="🎉Great job! Your BMI falls within the normal range."
        }
        else{
            weight_guide.innerHTML="Your BMI suggests that you are overweight.";
        }
    }
});