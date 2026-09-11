var prompt = require('prompt-sync')();
console.log("     =================================     ");
console.log("           RAILWAY MANAGER        ");
console.log("     =================================     ");
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",

        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
const tickets = [];

function menu()
{
    console.log("1 : Afficher les trajets");
    console.log("2 : Acheter un ticket");
    console.log("3 : Afficher les ticket");
    console.log("4 : Annuler un ticket");
    console.log("5 : Rechercher un ticket");
    console.log("6 : Filtrer les trajets");
    console.log("7 : Trier les trajets");
    console.log("8 : Quitter")
}
function Afficher_les_trajets()
{
    let i = 0;
    while(i < trips.length )
    {
        console.log(`id : ${trips[i].id}`);
        console.log(`destination : ${trips[i].destination}`);
        console.log(`departuretime : ${trips[i].departureTime}`);
        console.log(`arrivalTime : ${trips[i].arrivalTime}`);
        console.log(`price : ${trips[i].price}`);
        console.log(`availableSeats : ${trips[i].availableSeats}`);
        console.log("--------------------------------");
        i++;
    }
}

function Acheter_un_ticket()
{
    
    let Nom_du_passager = prompt("Enter your name : ");
    let Identifiant_du_trajet = Number(prompt("Enter Identifian tdu trajet : "));
    let trajet = trips.find(T => T.id === Identifiant_du_trajet);
    let ticket;
    if(trajet)
    {
        if(trajet.availableSeats > 0)
        {

        
         ticket = {

                    id : tickets.length + 1,
                    passengerName : Nom_du_passager,
                    tripId : Identifiant_du_trajet,
                    seatNumber : trajet.availableSeats, //just for test
                    price : trajet.price,
                }
        
        }
        else
        {
            console.log("Train comple");
        }
        tickets.push(ticket);
    }
    else
    {
        console.log("Trajet introuvable.");
    }
}
function Afficher_les_ticket()
{
    for(let i = 0; i < tickets.length; i++)
        {
            console.log(`Ticket #${tickets[i].id}`);
            console.log(`Passaager : ${tickets[i].passengerName}`);
            for(let j = 0; j < trips.length; j++)
                {
                    if(trips[j].id === tickets[i].tripId)
                        {
                            console.log(`Trajet : ${trips[j].departure} --> ${trips[j].destination}`);
                        }
    }
    console.log(`Place : ${tickets[i].seatNumber}`);
    console.log(`prix : ${tickets[i].price} DH`);}

}
function Annuler_un_ticket()
{
    let  Identifiant_du_ticket = Number(prompt("Enter identifianr dy ticket : "));
    let ticket = tickets.findIndex(T => T.id === Identifiant_du_ticket);
    if(tickets.length > 0)
    {

    if(tickets[ticket])
    {
        tickets.splice(ticket,1);
        trips[ticket].availableSeats++;
    }
    else
    {
        console.log("Ticket introuvable.");
    }
    }
     
}
// Afficher_les_trajets()
//Acheter_un_ticket()
//Annuler_un_ticket()


/*let choice = 0;
do 
{
    menu();
    choice = Number(prompt("Choice : "));
    switch(choice)
    {
        case 1 :
            Afficher_les_trajets();
        break;
        case 2 :
            

        break;
        case 3 :

        break;
        case 4 :

        break;
        case 5 :

        break;
        case 6 :

        break;
        case 7 :

        break;
        default :
        console.log("unvalide choice ")
    }



}while(choice != 0)*/