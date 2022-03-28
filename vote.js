

function increment4th() {
    const btnVote4th = document.getElementById('vote4th')
    let count4thVote =  document.getElementById('count4th')
    let counter4thVote =  parseInt(count4thVote.textContent)

    counter4thVote++
    count4thVote.textContent = counter4thVote
}

function increment3rd() {
    const btnVote3rd = document.getElementById('vote3rd')
    let count3rdVote =  document.getElementById('count3rd')
    let counter3rdVote =  parseInt(count3rdVote.textContent)
    
    counter3rdVote++
    count3rdVote.textContent = counter3rdVote
}

function increment2nd() {
    const btnVote2nd = document.getElementById('vote2nd')
    let count2ndVote =  document.getElementById('count2nd')
    let counter2ndVote =  parseInt(count2ndVote.textContent)
    
    counter2ndVote++
    count2ndVote.textContent = counter2ndVote
}

function increment1st() {
    const btnVote1st = document.getElementById('vote1st')
    let count1stVote =  document.getElementById('count1st')
    let counter1stVote =  parseInt(count1stVote.textContent)
    
    counter1stVote++
    count1stVote.textContent = counter1stVote
}