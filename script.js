function calculateBMI() {
    const height = document.getElementById('height').value / 100;
    const weight = document.getElementById('weight').value;
    const age = document.getElementById('age').value;

    const bmi = (weight / (height * height)).toFixed(2);
    const healthyWeightRange = [(18.5 * (height * height)).toFixed(2), (24.9 * (height * height)).toFixed(2)];
    const bodyFatPercentage = (1.20 * bmi + 0.23 * age - 5.4).toFixed(2);

    let suggestions = '';
    let questionsHTML = '';

    if (bmi < 18.5) {
        suggestions = "You're <strong>underweight</strong>. Consider the following options:";
        questionsHTML = `
            <h4>Answer some questions:</h4>
            <ul>
                <li>Do you often feel tired or fatigued? <input type="text" id="fatigue"></li>
                <li>Have you noticed any unusual paleness? <input type="text" id="paleness"></li>
                <li>Do you have a poor appetite? <input type="text" id="appetite"></li>
            </ul>
            <button onclick="checkIronDeficiency()">Submit</button>
        `;
        suggestions += `
            <h4>Suggested Exercises:</h4>
            <ul>
                <li>- <strong>Strength Training</strong> (Weights)</li>
                <li>- <strong>Yoga</strong></li>
                <li>- <strong>Pilates</strong></li>
                <li>- <strong>Swimming</strong></li>
            </ul>
            <h4>Suggested Foods:</h4>
            <ul>
                <li>- <strong>Avocados</strong></li>
                <li>- <strong>Nuts and Nut Butters</strong></li>
                <li>- <strong>Whole Grains</strong></li>
                <li>- <strong>High-Calorie Smoothies</strong></li>
            </ul>
        `;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        suggestions = "You're <strong>normal weight</strong>. Keep it up!";
        questionsHTML = `
            <h4>Answer some questions:</h4>
            <ul>
                <li>Do you have a family history of high cholesterol? <input type="text" id="cholesterolHistory"></li>
                <li>Do you experience frequent headaches or dizziness? <input type="text" id="headaches"></li>
                <li>Have you been told you have high blood pressure? <input type="text" id="bloodPressure"></li>
            </ul>
            <button onclick="checkCholesterolAndBP()">Submit</button>
        `;
        suggestions += `
            <h4>Suggested Exercises:</h4>
            <ul>
                <li>- <strong>Cardio</strong> (Running, Cycling)</li>
                <li>- <strong>Strength Training</strong></li>
                <li>- <strong>Yoga</strong></li>
                <li>- <strong>Group Fitness Classes</strong></li>
            </ul>
            <h4>Suggested Foods:</h4>
            <ul>
                <li>- <strong>Fruits and Vegetables</strong></li>
                <li>- <strong>Lean Proteins</strong> (Chicken, Fish)</li>
                <li>- <strong>Whole Grains</strong></li>
                <li>- <strong>Healthy Fats</strong> (Olive Oil, Avocado)</li>
            </ul>
        `;
    } else {
        suggestions = "You're <strong>overweight</strong>.<br>Here are some recommendations:";
        questionsHTML = `
            <h4>Answer some questions:</h4>
            <ul>
                <li>Do you have a family history of diabetes? <input type="text" id="familyHistory"></li>
                <li>Do you experience frequent thirst or urination? <input type="text" id="thirst"></li>
                <li>Have you noticed any unexplained weight changes? <input type="text" id="weightChange"></li>
            </ul>
            <button onclick="checkDiabetesRisk()">Submit</button>
        `;
        suggestions += `
            <h4>Suggested Exercises:</h4>
            <ul>
                <li>- <strong>Walking</strong></li>
                <li>- <strong>Running</strong></li>
                <li>- <strong>Cycling</strong></li>
                <li>- <strong>High-Intensity Interval Training</strong> (HIIT)</li>
            </ul>
            <h4>Suggested Foods:</h4>
            <ul>
                <li>- <strong>Fruits and Vegetables</strong> (High Fiber)</li>
                <li>- <strong>Lean Proteins</strong> (Fish, Chicken)</li>
                <li>- <strong>Whole Grains</strong> (Brown Rice, Quinoa)</li>
                <li>- <strong>Low-Fat Dairy</strong></li>
            </ul>
        `;
    }

    suggestions = `
        <h3 class="fade-in">Your BMI: <strong>${bmi}</strong></h3>
        <h4>Healthy Weight Range: <strong>${healthyWeightRange[0]} - ${healthyWeightRange[1]} kg</strong></h4>
        <h4>Estimated Body Fat Percentage: <strong>${bodyFatPercentage}%</strong></h4>
    ` + suggestions;

    document.getElementById('result').innerHTML = suggestions;
    document.getElementById('questions').innerHTML = questionsHTML;
    document.getElementById('healthAdvice').innerHTML = '';
}

function checkIronDeficiency() {
    const fatigue = document.getElementById('fatigue').value.toLowerCase();
    const paleness = document.getElementById('paleness').value.toLowerCase();
    const appetite = document.getElementById('appetite').value.toLowerCase();

    let advice = '<strong>Based on your responses:</strong> ';
    if (fatigue === 'yes' || paleness === 'yes' || appetite === 'yes') {
        advice += 'You may be at risk of iron deficiency. Consider consulting a healthcare professional.';
    } else {
        advice += 'You are not showing signs of iron deficiency, but please make sure to eat food with multi-nutritional value.';
    }

    document.getElementById('healthAdvice').innerHTML = advice;
}

function checkCholesterolAndBP() {
    const cholesterolHistory = document.getElementById('cholesterolHistory').value.toLowerCase();
    const headaches = document.getElementById('headaches').value.toLowerCase();
    const bloodPressure = document.getElementById('bloodPressure').value.toLowerCase();

    let advice = '<strong>Based on your responses:</strong> ';
    if (cholesterolHistory === 'yes' || headaches === 'yes' || bloodPressure === 'yes') {
        advice += 'You may be at risk for high cholesterol or blood pressure issues. Consider consulting a healthcare professional.';
    } else {
        advice += 'You are not showing signs of high cholesterol or blood pressure risk, but keep monitoring your health.';
    }

    document.getElementById('healthAdvice').innerHTML = advice;
}

function checkDiabetesRisk() {
    const familyHistory = document.getElementById('familyHistory').value.toLowerCase();
    const thirst = document.getElementById('thirst').value.toLowerCase();
    const weightChange = document.getElementById('weightChange').value.toLowerCase();

    let advice = '<strong>Based on your responses:</strong> ';
    if (familyHistory === 'yes' || thirst === 'yes' || weightChange === 'yes') {
        advice += 'You may be at risk for diabetes or insulin resistance. Consider consulting a healthcare professional.';
    } else {
        advice += 'You are not showing signs of diabetes risk, but that can change if your weight does not decrease.';
    }

    document.getElementById('healthAdvice').innerHTML = advice;
}
    