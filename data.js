module.exports = function(){
  var data = {
    users: [
      {
        id: 1,
        type: "cliente",
        name: "Juan",
        last_name: "Gomez",
        email: "juangomez@gmail.com",
        phone: 956789018,
        username: "jgomez1234",
        password: "juan@%4321",
      },
      {
        id: 2,
        type: "vendedor",
        name: "Joaquín",
        last_name: "Pérez",
        email: "j.perez23456789@gmail.com",
        phone: 956789012,
        username: "jperez2",
        password: "j.perez23*",
      },
      {
        id: 3,
        type: "cliente",
        name: "María",
        last_name: "López",
        email: "m.lopez123456789@gmail.com",
        phone: 9834567890,
        username: "mlopez123456",
        password: "m.lop567$*",
      },
      {
        id: 4,
        type: "vendedor",
        name: "Carlos",
        last_name: "Sánchez",
        email: "c.sanchez23456789@yahoo.com",
        phone: 978901234,
        username: "csanchez26",
        password: "c.sanchez2%&*",
      },
      {
        id: 5,
        type: "cliente",
        name: "Sandra",
        last_name: "García",
        email: "s.garcia45@yahoo.com",
        phone: 908765432,
        username: "sgarcia45",
        password: "s.garcia456&",
      },
      {
        id: 6,
        type: "vendedor",
        name: "Ana",
        last_name: "Martinez",
        email: "amartinez@hotmail.com",
        phone: 98765432,
        username: "amartinez98",
        password: "amartine&%z987",
      },
      {
        id: 7,
        type: "cliente",
        name: "Pedro",
        last_name: "Lopez",
        email: "plopez@gmail.com",
        phone: 951478722,
        username: "plopez9547",
        password: "plopez954&",
      },
      {
        id: 8,
        type: "vendedor",
        name: "Rosa",
        last_name: "Garcia",
        email: "rgarcia@hotmail.com",
        phone: 987654321,
        username: "rgaciar987",
        password: "rgaciar987",
      },
      {
        id: 9,
        type: "cliente",
        name: "Jose",
        last_name: "Sanchez",
        email: "jsanchez@gmail.com",
        phone: 956789016,
        username: "jsanchezn901",
        password: "jsanchezn903",
      },
      {
        id: 10,
        type: "vendedor",
        name: "Fernando",
        last_name: "Fernández",
        email: "ffernandez@hotmail.com",
        phone: 01234567,
        username: "ffernandez12",
        password: "ffernandez123",
      }
    ],
    product_registrations: [

    ],
    products: [
      {
        id: 1,
        name: "Cartas",
        description: "Un paquete de cartas de diferentes colores.",
        price: 2.40,
        stock: 190,
        categories: [
          {
            id: 1,
            name: "Juegos de Mesa",
          },
        ],
      },
      {
        id: 2,
        name: "Rompecabeza",
        description: "Un rompecabeza didáctico de tu personaje favorito.",
        price: 8.50,
        stock: 180,
        categories: [
          {
            id: 2,
            name: "Puzzles",
          },
        ],
      },
      {
        id: 3,
        name: "Muñeca Barbie",
        description: "La muñeca barbie con diferentes trajes.",
        price: 11.90,
        stock: 105,
        categories: [
          {
            id: 3,
            name: "Muñecas",
          },
        ],
      },
      {
        id: 4,
        name: "Oso de Peluche",
        description: "Un oso de peluche de tamaño mediano.",
        price: 36.50,
        stock: 50,
        categories: [
          {
            id: 4,
            name: "Peluches",
          },
        ],
      },
      {
        id: 5,
        name: "Libro de fantasía",
        description: "Un libro con increíbles cuentos de fantasías para niños.",
        price: 8.90,
        stock: 83,
        categories: [
          {
            id: 5,
            name: "Libros Infantiles",
          },
        ],
      },
      {
        id: 6,
        name: "Libro Coquito",
        description: "El libro ideal para que tu niño aprenda a leer y escribir.",
        price: 25.00,
        stock: 95,
        categories: [
          {
            id: 6,
            name: "Aprendizaje",
          },
        ],
      },
      {
        id: 7,
        name: "Muñeco de Superman",
        description: "Un muñeco de Superman con todos sus accesorios.",
        price: 12.80,
        stock: 40,
        categories: [
          {
            id: 7,
            name: "Figuras de Acción",
          },
        ],
      },
      {
        id: 8,
        name: "Lego de Minecraft",
        description: "Lego del videojuego Minecraft a buen precio.",
        price: 205.60,
        stock: 80,
        categories: [
          {
            id: 8,
            name: "Construcción",
          },
        ],
      },
      {
        id: 9,
        name: "Carro a control remoto",
        description: "Un carro a control remoto de diferentes colores.",
        price: 96.50,
        stock: 150,
        categories: [
          {
            id: 9,
            name: "Coches",
          },
        ],
      },
      {
        id: 10,
        name: "Libro para colorear",
        description: "Un libro didáctico para colorear.",
        price: 20.00,
        stock: 300,
        categories: [
          {
            id: 10,
            name: "Arte",
          },
        ],
      },
    ],
    categories: [
      {
        id: 1,
        name: "Juegos de mesa",
      },
      {
        id: 2,
        name: "Puzzles",
      },
      {
        id: 3,
        name: "Muñecas",
      },
      {
        id: 4,
        name: "Peluches",
      },
      {
        id: 5,
        name: "Libros infantiles",
      },
      {
        id: 6,
        name: "Aprendizaje",
      },
      {
        id: 7,
        name: "Figuras de acción",
      },
      {
        id: 8,
        name: "Construcción",
      },
      {
        id: 9,
        name: "Coches",
      },
      {
        id: 10,
        name: "Arte",
      },
      {
        id: 11,
        name: "Música",
      },
      {
        id: 12,
        name: "Robots",
      },
      {
        id: 13,
        name: "Juegos de Rol",
      },
      {
        id: 14,
        name: "Aire Libre",
      },
    ],
    orders: [

    ],
    order_details: [

    ],
    payments: [

    ],
    payments_methods: [
      {
        id: 1,
        card_holder: "Juan Gómez",
        card_number: 4444555566667799,
        security_code: 123,
        expiration_date: "2030-01-10",
      },
      {
        id: 2,
        card_holder: "Joaquin Perez",
        card_number: 8844555566667787,
        security_code: 999,
        expiration_date: "2026-01-10",
      },
      {
        id: 3,
        card_holder: "María López",
        card_number: 9944555566667766,
        security_code: 888,
        expiration_date: "2029-01-10",
      },
      {
        id: 4,
        card_holder: "Carlos Sanchéz",
        card_number: 1144555566667716,
        security_code: 777,
        expiration_date: "2026-05-10",
      },
      {
        id: 5,
        card_holder: "Sandra García",
        card_number: 1234555566667732,
        security_code: 666,
        expiration_date: "2029-11-10",
      },
      {
        id: 6,
        card_holder: "Ana Martínez",
        card_number: 7234455566667700,
        security_code: 555,
        expiration_date: "2027-01-10",
      },
      {
        id: 7,
        card_holder: "Pedro Lopez",
        card_number: 8904555566667776,
        security_code: 444,
        expiration_date: "2030-12-10",
      },
      {
        id: 8,
        card_holder: "Rosa Garcia",
        card_number: 9874555566667789,
        security_code: 333,
        expiration_date: "2036-01-10",
      },
      {
        id: 9,
        card_holder: "José Sánchez",
        card_number: 4400555566667732,
        security_code: 222,
        expiration_date: "2027-01-10",
      },
      {
        id: 10,
        card_holder: "Fernando Fernandez",
        card_number: 6784555566667744,
        security_code: 111,
        expiration_date: "2038-01-10",
      },
    ]
  }
  return data;
}
