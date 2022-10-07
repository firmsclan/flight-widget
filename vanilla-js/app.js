const tableBody = document.getElementById('table-body')

let flights = [
  {
    time: "08:11",
    destination: "OMAN",
    flight: "OX 203",
    gate: "A 01",
    remarks: "ON TIME"
   },
  {
    time: "12:39",
    destination: "LONDON",
    flight: "CL 320",
    gate: "C 31",
    remarks: "CANCELLED"
   },
  {
    time: "13:21",
    destination: "DUBAI",
    flight: "DXB 201",
    gate: "A 19",
    remarks: "CANCELLED"
  },
  {
    time: "14:01",
    destination: "FRANKFURT",
    flight: "FR 402",
    gate: "B 02",
    remarks: "ON TIME"
  },
  {
    time: "15:22",
    destination: "TOKYO",
    flight: "TK 211",
    gate: "A 32",
    remarks: "DELAYED"
  }
]
 
const destinations = ["TOKYO", "FRANKFURT", "DUBAI", "LONDON", "OMAN", "BEIRUT"]
const remarks = ["ON TIME", "DELAYED", "CANCELLED"]
let hour = 15

function populateTable (){
    for(const flight of flights){
        const tableRow = document.createElement('tr')

        for(const flightDetail in flight){
            const tableCell = document.createElement('td')
            const word = Array.from(flight[flightDetail])

        for(const [index,letter] of word.entries()){
            const letterElement = document.createElement('div')

          setTimeout(() =>{
            letterElement.textContent = letter
            letterElement.classList.add('flip')
            tableCell.append(letterElement)
          },100 * index)


            }
            tableRow.append(tableCell)
        }
        tableBody.append(tableRow)
    }

}
populateTable()

function genearateRandomNumber(maxNumber){
 const numbers = '0123456789'
 if(maxNumber){
    const newNumbers = numbers.slice(0,maxNumber)
    return newNumbers.charAt(Math.floor(Math.random()* newNumbers.length))
 }
 return numbers.charAt(Math.floor(Math.random()* numbers.length))
}

function genearateRandomLetter(){
  const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase()
  return letters.charAt(Math.floor(Math.random()* letters.length))
}

function generateTime(){
  let displayHour = hour;
  if(hour < 24){
    hour++
  }
  if(hour >= 24){
      hour = 1
      displayHour =  hour
  }
  if(hour < 10){
    displayHour = '0' + hour
  }
  return displayHour + ':' + genearateRandomNumber(5)  + genearateRandomNumber()
}

function shuffleUp() {
  flights.shift()
  flights.push({
    time: generateTime(),
    destination: destinations [Math.floor(Math.random()* destinations.length)],
    flight: genearateRandomLetter() + genearateRandomLetter() + ' ' + genearateRandomNumber() + genearateRandomNumber(),
    gate: genearateRandomLetter() + " " + genearateRandomNumber() + genearateRandomNumber(),
    remarks: remarks[Math.floor(Math.random()* remarks.length)]
  })
  tableBody.textContent = ""
  populateTable()
  }

  setInterval(shuffleUp, 5000)