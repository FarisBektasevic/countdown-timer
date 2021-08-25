let daysParagraf = document.getElementById('days')
let hoursParagraf = document.getElementById('hours')
let minutesParagraf = document.getElementById('minutes')
let secondsParagraf = document.getElementById('seconds')

const counting = () => {
    const releaseDate = new Date('Dec 31, 2021, 00:00:00').getTime()
    const now = new Date().getTime()
    
    const restTime = releaseDate - now
    
    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60
    const days = hours * 24

    let daysLeft = Math.floor(restTime / days)
    let hoursLeft = Math.floor((restTime % days) / hours)
    let minutesLeft = Math.floor((restTime % hours) / minutes)
    let secondsLeft = Math.floor((restTime % minutes) / seconds)

    daysParagraf.innerHTML = daysLeft
    hoursParagraf.innerHTML = hoursLeft
    minutesParagraf.innerHTML = minutesLeft
    secondsParagraf.innerHTML = secondsLeft

    if (hoursLeft < 10) {
        hoursParagraf.innerHTML = '0' + hoursLeft
    }

    if (minutesLeft < 10) {
        minutesParagraf.innerHTML = '0' + minutesLeft
    }

    if (secondsLeft < 10) {
        secondsParagraf.innerHTML = '0' + secondsLeft
    }
}

setInterval(counting, 1000)