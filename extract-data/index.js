const  Table = require('cli-table')
const fs = require('fs')
const readline = require('readline-sync')
const readline1= require('readline')
// TABLE  creation
let table = new Table( {
    head:['Train_No', 'Train_Name', 'SEQ', 'Station_Code', 'Station_Name', 'Arrival_time','Departure_Time', 'Distance', 'Source_Station', 'Source_Station_Name', 'Destination_Station', 'Destination_Station_Name' ],
})


// extracting file
const filePath = './GroupTrain.json'
const data = fs.readFileSync(filePath, 'utf-8')
const jsonArray= JSON.parse(data);
// console.log(jsonArray)

const choice = Number(readline.question())


// QUESTION NUMBER -1
const findLongestRoute = () => {
    let overallMaxDistance = -Infinity;
          let trainsWithMaxDistance = null;
          
          for(const trainNo in jsonArray)
          {
            const trainArray = jsonArray[trainNo]

            const distances = trainArray.map( obj => parseInt(obj.Distance))
            const maxDistance = Math.max(...distances)

            if(maxDistance >= overallMaxDistance)
            {
              overallMaxDistance = maxDistance
              trainsWithMaxDistance= trainArray.find( obj => parseInt(obj.Distance) === maxDistance)
            }
            }
            // console.log(overallMaxDistance);
            // console.log(trainsWithMaxDistance)
            table.push(
                [trainsWithMaxDistance.Train_No,
                trainsWithMaxDistance.Train_Name,
                trainsWithMaxDistance.SEQ,
                trainsWithMaxDistance.Station_Code,
                trainsWithMaxDistance.Station_Name,
                trainsWithMaxDistance.Arrival_time,
                trainsWithMaxDistance.Departure_Time,
                trainsWithMaxDistance.Distance,
                trainsWithMaxDistance.Source_Station,
                trainsWithMaxDistance.Source_Station_Name,
                trainsWithMaxDistance.Destination_Station,
                trainsWithMaxDistance.Destination_Station_Name
            ],
            )
            console.log(table.toString())
}

// QUESTION NUMBER -2
const findShortestRoute =() => {
    let overallMinDistance = Infinity;
    let trainsWIthMinDistance =null;

    for(const trainNo in jsonArray)
    {
      const trainArray = jsonArray[trainNo]

      const distances = trainArray.map(obj => parseInt(obj.Distance))
      // console.log(distances)
      // console.log(trainNo)

      const maxDistance = Math.max(...distances)

      if(maxDistance < overallMinDistance){
        overallMinDistance =maxDistance;
        trainsWIthMinDistance = trainArray.find( obj =>parseInt(obj.Distance) === maxDistance)
      }
        

    }
    // console.log(overallMinDistance)
    // console.log(trainsWIthMinDistance)
    table.push(
        [trainsWIthMinDistance.Train_No,
        trainsWIthMinDistance.Train_Name,
        trainsWIthMinDistance.SEQ,
        trainsWIthMinDistance.Station_Code,
        trainsWIthMinDistance.Station_Name,
        trainsWIthMinDistance.Arrival_time,
        trainsWIthMinDistance.Departure_Time,
        trainsWIthMinDistance.Distance,
        trainsWIthMinDistance.Source_Station,
        trainsWIthMinDistance.Source_Station_Name,
        trainsWIthMinDistance.Destination_Station,
        trainsWIthMinDistance.Destination_Station_Name
    ],
    )
    console.log(table.toString())
}

// QUESTION NUMBER -3
const trainCoverLessStation = () => {
    let minStation = Infinity;
    

      // train which cover less no of station
      for(const trainNo in jsonArray )
      {
        const trainArray = jsonArray[trainNo];
        const arrayLength = trainArray.length;
        // console.log(arrayLength)
        if(arrayLength <= minStation)
        {
            minStation = arrayLength;
            // trainWithLessStation = trainNo
            // trainWithLessStation = trainArray.find( obj =>parseInt(obj.Train_No) === trainArray)
        }
        
      }
    //   console.log(minStation)

      for(const trainNo in jsonArray )
      {
        const trainArray = jsonArray[trainNo];
        const arrayLength = trainArray.length;

        // console.log(trainArray[0]);

        for(let i =0; i<arrayLength; i++)
        {

            if(arrayLength === minStation){
                // console.log(trainArray);
                // console.log(trainArray.Arrival_time)
                table.push(
                    [trainArray[i].Train_No,
                        trainArray[i].Train_Name,
                        trainArray[i].SEQ,
                        trainArray[i].Station_Code,
                        trainArray[i].Station_Name,
                        trainArray[i].Arrival_time,
                        trainArray[i].Departure_Time,
                        trainArray[i].Distance,
                        trainArray[i].Source_Station,
                        trainArray[i].Source_Station_Name,
                        trainArray[i].Destination_Station,
                        trainArray[i].Destination_Station_Name
                ],
                )
            }
        }
       
    }
      
    console.log(table.toString())
        


    }

    // QUESTION NUMBER -4
    const trainCoverMaxStation = () => {
        let maxStation = -Infinity;
      // train which cover less no of station
      for(const trainNo in jsonArray )
      {
        const trainArray = jsonArray[trainNo];
        const arrayLength = trainArray.length;
        // console.log(`${trainNo} and length is ${arrayLength}`)
        if(arrayLength >= maxStation)
        maxStation = arrayLength
      }
      console.log( "Max Station is:",maxStation)

      for(const trainNo in jsonArray )
      {
        const trainArray = jsonArray[trainNo];
        const arrayLength = trainArray.length;

        // console.log(trainArray[0]);

        for(let i =0; i<arrayLength; i++)
        {

            if(arrayLength === maxStation){
                // console.log(trainArray);
                // console.log(trainArray.Arrival_time)
                table.push(
                    [trainArray[i].Train_No,
                        trainArray[i].Train_Name,
                        trainArray[i].SEQ,
                        trainArray[i].Station_Code,
                        trainArray[i].Station_Name,
                        trainArray[i].Arrival_time,
                        trainArray[i].Departure_Time,
                        trainArray[i].Distance,
                        trainArray[i].Source_Station,
                        trainArray[i].Source_Station_Name,
                        trainArray[i].Destination_Station,
                        trainArray[i].Destination_Station_Name
                ],
                )
            }
        }
       
    }
      
    console.log(table.toString())
        

    }


    // QUESTION NUMBER- 5
    const NameNdNoTrain  = () => {
        for (const trainNo in jsonArray)
      {
        const trainArray = jsonArray[trainNo]
        // console.log(trainArray[0])
        // const trainName = trainArray[0].Train_Name
        // console.log(`Train no is: ${trainNo} and Name is: ${trainName} `)
        // console.log(trainArray[0].Arrival_time)
        table.push(
            [trainArray[0].Train_No,
            trainArray[0].Train_Name,
            trainArray[0].SEQ,
            trainArray[0].Station_Code,
            trainArray[0].Station_Name,
            trainArray[0].Arrival_time,
            trainArray[0].Departure_Time,
            trainArray[0].Distance,
            trainArray[0].Source_Station,
            trainArray[0].Source_Station_Name,
            trainArray[0].Destination_Station,
            trainArray[0].Destination_Station_Name
        ],
        )
        console.log(table.toString())

      }
    }

    // QUESTION NO -6
    const NoOfTrains = () =>{
        
        const readInput = readline1.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readInput.question("Enter the source input", (source) => {
            readInput.question("Enter the destination input",(destination) => {
                for(const trainNo in jsonArray)
                {

                    const trainArray = jsonArray[trainNo]
                    const station = trainArray.filter(obj => obj.Source_Station === source &&
                        obj.Destination_Station === destination)
        
                    if(station.length >0)
                    {
                        table.push(
                            [trainNo,
                            trainArray[0].Train_Name,
                            trainArray[0].SEQ,
                            trainArray[0].Station_Code,
                            trainArray[0].Station_Name,
                            trainArray[0].Arrival_time,
                            trainArray[0].Departure_Time,
                            trainArray[0].Distance,
                            trainArray[0].Source_Station,
                            trainArray[0].Source_Station_Name,
                            trainArray[0].Destination_Station,
                            trainArray[0].Destination_Station_Name
                            ],)
                    }
        
                     
            }

            if(table.length>0)
                    console.log(table.toString())
            else
                console.log("sorry no trains")
            readInput.close();
            })
        })
        
    }

        

    

switch(choice){

    case 1 : console.log("Train info with longest Route is:")
            findLongestRoute();
            break;

    case 2: console.log("Train info with shortest Route is:")
            findShortestRoute();
            break;

    case 3: console.log("Train which covers less no of station is:")
            trainCoverLessStation();
            break;
    
    case 4: console.log("Train which covers maximum no of station is: ")
            trainCoverMaxStation();
            break;
    
    case 5: console.log("Name and Number of trains")
            NameNdNoTrain();
            break;
    
    case 6: console.log("Possible Options to travel is:")
            NoOfTrains()
            break;

            
    default: console.log("Wrong choice")
}
