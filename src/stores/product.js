import { defineStore } from "pinia";

export const useProductStore = defineStore({
  id: "product",
  state: () => ({
    products: [
      {
        id: 1,
        name: "Hard burger",
        price: 50,
        rating: 5,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos aliquam
                              laboriosam repudiandae doloremque est dolores exercitationem laborum vel accusamus. Quae quibusdam,
                              voluptate cumque enim maxime pariatur nemo fugiat unde harum!`,
      },
      {
        id: 2,
        name: "Insane burger",
        price: 100,
        rating: 4.4,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos aliquam
                              laboriosam repudiandae doloremque est dolores exercitationem laborum vel accusamus. Quae quibusdam,
                              voluptate cumque enim maxime pariatur nemo fugiat unde harum!`,
      },
      {
        id: 3,
        name: "Easy burger",
        price: 20,
        rating: 4.2,
        description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos aliquam
                              laboriosam repudiandae doloremque est dolores exercitationem laborum vel accusamus. Quae quibusdam,
                              voluptate cumque enim maxime pariatur nemo fugiat unde harum!`,
      },
    ],
  }),
});
