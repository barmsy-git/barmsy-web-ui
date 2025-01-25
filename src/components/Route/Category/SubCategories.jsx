import React, { useState } from "react";
import FoodDetailsCard from "../../Route/FoodDetailsCard/FoodDetailsCard";
import Order from "../../order/Order";

// Data structure with nested subcategories and corresponding image URLs
const subcategoriesData = {
  1: {
    Pastries: [
      {
        name: "Croissant",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
        price: 1500,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci ",
      },
      {
        name: "Danish",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
        price: 3500,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci ",
      },
      {
        name: "Muffin",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
        price: 6000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci  ",
      },
      {
        name: "Lager",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
        price: 5500,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci ",
      },
      {
        name: "Stout",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
        price: 2500,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci ",
      },
      {
        name: "IPA",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
        price: 4500,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci  ",
      },
      {
        name: "Pancakes",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
        price: 9000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci ",
      },
      {
        name: "Omelette",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
        price: 2000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci  ",
      },
      {
        name: "Caesar Salad",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
        price: 4000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci  ",
      },
      {
        name: "Greek Salad",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
        price: 4500,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci  ",
      },
      {
        name: "Garden Salad",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
        price: 6000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci ",
      },
      {
        name: "Cereal",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
        price: 3000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci  ",
      },
    ],
    Breakfast: [
      {
        name: "Pancakes",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
        price: 25000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci  ",
      },
      {
        name: "Omelette",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
        price: 3600,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci ",
      },
      {
        name: "Cereal",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
        price: 15000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci  ",
      },
    ],
    Sandwiches: [
      {
        name: "Club Sandwich",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
        price: 4200,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci ",
      },
      {
        name: "BLT",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
        price: 5800,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci  ",
      },
      {
        name: "Grilled Cheese",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
        price: 5600,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci ",
      },
    ],
    Salads: [
      {
        name: "Caesar Salad",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
        price: 3700,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci ",
      },
      {
        name: "Greek Salad",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
        price: 2700,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci  ",
      },
      {
        name: "Garden Salad",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
        price: 35000,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci  ",
      },
    ],
    Cookies: [
      {
        name: "Chocolate Chip",
        image: "/images/chocolate-chip.jpg",
      },
      {
        name: "Oatmeal",
        image: "/images/oatmeal.jpg",
      },
      {
        name: "Sugar Cookie",
        image: "/images/sugar-cookie.jpg",
      },
    ],
  },
  2: {
    Coke: [
      {
        name: "Coke Zero",
        image: "/images/coke-zero.jpg ",
      },
      {
        name: "Diet Coke",
        image: "/images/diet-coke.jpg",
      },
      {
        name: "Cherry Coke",
        image: "/images/cherry-coke.jpg",
      },
    ],
    Coffee: [
      {
        name: "Espresso",
        image: "../../../Assets/8045ff7d6f4f9aa2d055bf97d6ed3de3.jpg",
      },
      {
        name: "Latte",
        image: "../../../Assets/8045ff7d6f4f9aa2d055bf97d6ed3de3.jpg",
      },
      {
        name: "Cappuccino",
        image: "../../../Assets/8045ff7d6f4f9aa2d055bf97d6ed3de3.jpg",
      },
    ],
    Beer: [
      {
        name: "Lager",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
      },

      {
        name: "Stout",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
      },
      {
        name: "IPA",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
      },
    ],
  },
  3: {
    "Restaurant A": [
      {
        name: "Menu A1",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
      },
      {
        name: "Menu A2",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
      },
      {
        name: "Menu A3",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
      },
    ],
    "Bar B": [
      {
        name: "Cocktail B1",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
      },
      {
        name: "Cocktail B2",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
      },
      {
        name: "Cocktail B3",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
      },
    ],
    "Cafe C": [
      {
        name: "Coffee C1",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
      },
      {
        name: "Pastry C2",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
      },
      {
        name: "Tea C3",
        image:
          "https://s3-alpha-sig.figma.com/img/b0cc/3ea7/8045ff7d6f4f9aa2d055bf97d6ed3de3?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UfOXVyZzhSUefr5MAwiMx5JU0eyr2FTIWNqNSzCh0-CxnJTn3BrbOdQeeIoYtkNlQB~3a-G-5S18hohhQnoUKdBz8GH6M1AgYspGohIDJD-W7glaOgRv7sZ0C-E9-ce-LZ0ead61AGLsg6kNXKx2OV9tRteUNlx-gNv6wD1VP5ZXMmByR717RC7dYGLHlRtEdyDbZH6q49pIUZ5E6PFEqaJ93s9ihDLEK2nefh-HNtAN76AfE3upCsxmIwST1ZIgrnGTgMbn7ARdi2Vy2fwQLFYWccuWizDHSwkaJ~y-lBKSoNU~XzGxmksLqSyCzQtc6tEfGlo6OJz3ryrNdzn8Sg__",
      },
    ],
  },
};

function SubCategories({ active, setActive, openOrder }) {
  console.log("openOrder state in SubCategories:", openOrder);
  const [click, setClick] = useState(false);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const subcategories = subcategoriesData[active] || {};

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(
      selectedSubcategory === subcategory ? null : subcategory
    );
  };

  const handleViewItem = (item) => {
    setSelectedItem(item);
    setOpen(true); // Open the modal
  };

  return (
    <div className="w-full  flex flex-col gap-6">
      <div className="w-full flex flex-wrap gap-4 relative border-b-2 border-gray-300 pb-8 ml-6">
        {Object.keys(subcategories).length > 0
          ? Object.keys(subcategories).map((subcategory, index) => (
              <div key={index} className="flex flex-col relative">
                {/* Subcategory button */}
                <div
                  onClick={() => handleSubcategoryClick(subcategory)}
                  className={`w-[196px] h-[51px] max-w-[196px] px-[15.71px] py-[5.61px] gap-[2.81px] text-black text-opacity-75 bg-gray-100 rounded-full text-sm cursor-pointer shadow-sm hover:shadow-md flex items-center justify-center transition-all  ${
                    selectedSubcategory === subcategory
                      ? "bg-gray-300 text-black "
                      : "hover:bg-gray-200"
                  }`}
                >
                  {subcategory}
                </div>

                {/* Nested subcategories */}
                <div
                  className={`${
                    selectedSubcategory === subcategory
                      ? `grid grid-cols-1 gap-3 p-2 ${
                          openOrder ? "md:grid-cols-2" : "md:grid-cols-3"
                        }`
                      : "hidden"
                  } mt-2 flex-wrap gap-3 transition-all duration-300 ease-in-out`}
                >
                  {selectedSubcategory === subcategory &&
                    subcategories[subcategory]?.map((nested, nestedIndex) => (
                      <div
                        key={nestedIndex}
                        className=" flex h-[130px] bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition hover:shadow-lg"
                        // onClick={() => setActive(nested.name)} // Optional: Handle click on nested subcategory
                      >
                        {/* Image Section */}
                        <img
                          src={nested.image}
                          alt={nested.name}
                          className="object-cover w-1/3 h-full"
                        />

                        {/* Details Section */}
                        <div className="px-3 mb-8 flex flex-col justify-between w-2/3">
                          {/* Name and Description */}
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800">
                              {nested.name}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">
                              {nested.description}
                            </p>
                          </div>

                          {/* Price and Action Buttons */}
                          <div>
                            <div className="mt-1 flex pt-0 items-center justify-between">
                              <span className="text-sm mr-2  font-bold text-gray-800">
                                ₦{nested.price}
                              </span>
                              <div className="flex gap-2">
                                <button
                                  className="px-4 mr-2 py-0 text-xs font-bold text-orange-500 bg-orange-50 rounded-full hover:bg-orange-50"
                                  onClick={() => handleViewItem(nested)}
                                >
                                  View
                                </button>
                                <button
                                  className="px-2 py-1 text-xs text-white font-bold bg-orange-500 rounded-full hover:bg-orange-600"
                                  // onClick={() => setOpenOrder(true)}
                                >
                                  Add to Order
                                </button>

                                {open && selectedItem && (
                                  <FoodDetailsCard
                                    setOpen={setOpen}
                                    data={selectedItem} // Pass the selected item to the modal
                                  />
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))
          : null}
      </div>

      {/* Order popup */}
    </div>
  );
}

export default SubCategories;
