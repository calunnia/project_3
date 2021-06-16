import { createServer, Model } from 'miragejs';



const data= [
  {"img":'https://static.thereisadayforthat.com/images/935x475c/loveatree.jpg',
    "name": "Szilagyi Zanzibar",
    "DOB": 1994,
    "job": "Frank Darabont",
    "duration": "2h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.3,
    "id":1,
    "discription": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nobis vel sint ex. Explicabo porro repellendus ullam quasi et culpa consectetur. Nihil, porro animi eveniet aperiam a perferendis ea ut. '
  },
  { "img":'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalC2HSoJmOBaFHvnvB6dpIPuqhClE1dvT8TmpukZdSbiytC54WsUbx-gEDYYa201sYAc&usqp=CAU',
    "name": "Szilagyi Viktoria",
    "DOB": 1972,
    "job": "Francis Ford Coppola",
    "duration": "2h 55min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9.2,
    "id":2,
    "discription": 'NLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nobis vel sint ex. Explicabo porro repellendus ullam quasi et culpa consectetur. Nihil, porro animi eveniet aperiam a perferendis ea ut. '
  },
  {"img":'https://images.unsplash.com/photo-1564429542212-16ab18196c4d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG92ZSUyMHRyZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    "name": "Szilagyi Martin",
    "DOB": 1974,
    "job": "Francis Ford Coppola",
    "duration": "3h 22min",
    "genre": [
      "Crime",
      "Drama"
    ],
    "rate": 9,
    "id":3,
    "discription": 'Nice man/ women , experience , good , beliver, ! Fish and chips, great. Love story, ?Musich in deed .Szia '
  }, 
   {"img":'https://images-na.ssl-images-amazon.com/images/I/71AWCxGznXL._AC_SX466_.jpg',
    "name": "Szilagyi Otto",
    "DOB": 1989,
    "job": "Peter Weir",
    "duration": "2h 8min",
    "genre": [
      "Comedy",
      "Drama"
    ],
    "rate": 8,
    "id":4,
    "discription": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nobis vel sint ex. Explicabo porro repellendus ullam quasi et culpa consectetur. Nihil, porro animi eveniet aperiam a perferendis ea ut. '
  },
  {"img":'https://wallpapercave.com/wp/wp3827057.jpg',
  "name": "Szilagyi Otto",
  "DOB": 1989,
  "job": "Peter Weir",
  "duration": "2h 8min",
  "genre": [
    "Comedy",
    "Drama"
  ],
  "rate": 8,
  "id":4,
  "discription": 'NLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nobis vel sint ex. Explicabo porro repellendus ullam quasi et culpa consectetur. Nihil, porro animi eveniet aperiam a perferendis ea ut. '
}
]

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,
    models: {
      client: Model,
    },
    seeds(server) { },
    routes() {
      this.namespace = '/api/v1';        
      this.timing = 500

      this.get('data', (schema, request) => {               // /api/ + movies url-rol kell fetchelni
      
        return data
      });

  this.get('filterData', (schema, request) => {                           // api/clients?search=[keresendo szoveg]&nev=otto
        const search = request.queryParams.search
        const clientName= request.queryParams.nev   // ===otto
        return data.filter(client => client.name.includes(search))
      });



this.post('/save', (schema, request) => {                                 // POST method to api/pets
        let { name, isVaccinated } = JSON.parse(request.requestBody);
        data.forEach(c => {
          c.pets.forEach(p => {
            if (p.name === name) p.isVaccinated = isVaccinated
          })
        })
        return { success: true }
      });

      
    },
  });
  return server;
}
