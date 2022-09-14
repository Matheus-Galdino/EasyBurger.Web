import { defineStore } from "pinia";

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    products: [
      {
        id: 1,
        name: "Cheese bacon",
        price: 28.9,
        rating: 5,
        img: "https://static-images.ifood.com.br/image/upload/t_medium/pratos/381719c4-1633-4690-a9bd-b2937d38b658/202102031326_Iejr_.jpeg",
        description: "Hambúrguer artesanal, queijo, alface americana, tomate, maionese artesanal, bacon e pão de brioche.",
      },
      {
        id: 2,
        name: "Galaxy",
        price: 33.60,
        rating: 4.7,
        img: "https://files.menudino.com/cardapios/33262/189.jpg",
        description: "2 Deliciosos hambúrgueres artesanais 150g, fatias de Cheddar, fatias de mussarela, bacon, maionese, alface americana, tomate, cebola roxa, molho jack no pão tradicional",
      },
      {
        id: 3,
        name: "Star",
        price: 20.90,
        rating: 4.2,
        img: "https://files.menudino.com/cardapios/33262/196.jpg",
        description: "Delicioso hambúrguer artesanal 140g, fatias de Cheddar, molho de cheddar da casa, bacon, alface americana, tomate, cebola roxa, maionese e molho especial no pão tradicional",
      },
      {
        id: 4,
        name: "Provolone Crispy",
        price: 37.50,
        rating: 4,
        img: "https://files.menudino.com/cardapios/33262/188.jpg",
        description: "Delicioso hambúrguer artesanal 180g, fatia de Cheddar, empanado de 2 queijos (catupiry e provolone) frito, cebola crispy, fatias de cheddar, bacon e maionese no pão tradicional ou pão de brioche"
      },
      {
        id: 5,
        name: "Brutus",
        price: 36.00,
        rating: 4.6,
        img: "https://static-images.ifood.com.br/image/upload/t_medium/pratos/a9399dc5-5f22-454a-8895-16c154511760/202004282006_lkS3_b.jpg",
        description: "Dois hambúrgueres 120 gr de angus, vinagrete de chimichurri, alface no pão brioche."
      },{
        id: 6,
        name: "Relíquia",
        price: 32.00,
        rating: 4,
        img: "https://static-images.ifood.com.br/image/upload/t_medium/pratos/a9399dc5-5f22-454a-8895-16c154511760/202111021436_0G0V_i.jpg",
        description: "Em homenagem ao nosso novo projeto na rua relíquia casa verde. Smash de 120g de carne angus, queijo gorgonzola, bacon, geleia de tomate e maionese da casa."
      }
    ],
  }),
});
