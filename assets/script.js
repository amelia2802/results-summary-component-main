import data from './data.json' assert { type: 'json' };;

function getResult(){
    let result=`
        <h2 class="result-heading"> Your Result</h2>
        <div class="result-index">
         <p class="result-score"><span>76</span> <br/>of 100</p> 
        </div>
        <h2 class="greet-head">Great</h2>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
    `

    return result;
}

function showSummary(){
    let summary=`
    <h2>Summary</h2>
    <div id="reaction" class="summ-list">
        <h3><img src="${data[0].icon alt="reaction"}" />${data[0].category}</h3>
        <p><span>${data[0].score}</span> / 100</p>
    </div>
    <div id="memory" class="summ-list">
        <h3><img src="${data[1].icon}" alt="memory" />${data[1].category}</h3>
        <p><span>${data[1].score}</span> / 100</p>
    </div>
    <div id="verbal" class="summ-list">
        <h3><img src="${data[2].icon}" alt="verbal" />${data[2].category}</h3>
        <p><span>${data[2].score}</span> / 100</p>
    </div>
    <div id="visual" class="summ-list">
        <h3><img src="${data[3].icon}" alt="visual" />${data[3].category}</h3>
        <p><span>${data[3].score}</span> / 100</p>
    </div>
    <button class="continue" type="submit" value="Submit">Continue</button>
    
    `

    return summary;
}


function render(){
    document.getElementById("result").innerHTML=getResult()

    document.getElementById("summary").innerHTML=showSummary()
}

render()
