//Question 1 
   function InstagramPost(handle, content, imageLink, views, likes) {
      // Assign the arguments to properties of this object
      this.handle = handle;
      this.content = content;
      this.imageLink = imageLink;
      this.views = views;
      this.likes = likes;
  }
//Question 2
   const post1 = new InstagramPost("johndoe", "Feeling happy today 😃", "https://example.com/image1.jpg", 1000, 50);
   const post2 = new InstagramPost("janedoe", "Throwback to my vacation in Hawaii 🌴🌺", "https://example.com/image2.jpg", 5000, 200);

//Question 3
   function createPerson(name, age, location) {
      return { name, age, location };
   }
   function createJambScores(eng, govt, lit, crk) {
     return { eng, govt, lit, crk };
   }
   const musa = createPerson("Musa Dawodu", 19, "Lekki, Lagos State");
   const musaJambScores = createJambScores(70, 85, 82, 94);
   musa.jambScores = musaJambScores;
   console.log(musa);

//Question 4
 // 1. Object.assign(): This method creates a new object by copying the values of all enumerable own properties from one or more source objects to a target object.
 //example: 
      const originalObj1 = { a: 1, b: 2 };
      const newObj1 = Object.assign({}, originalObj1);
      console.log(newObj1); // { a: 1, b: 2 }

      const food1 = { food: 'apple', drink: 'milk' };
      const clone1 = Object.assign({}, food1, { dessert: 'cake' }); 
      console.log(clone1)// { food: 'apple', drink: 'milk', dessert: 'cake' }

 // 2. Spread operator (...): This operator allows you to spread the contents of an object into a new object.
 //example: 
      const originalObj2 = { a: 1, b: 2 };
      const newObj2 = { ...originalObj2 };
      console.log(newObj2); // { a: 1, b: 2 }

      const food2 = { food: 'apple', drink: 'milk' };
      const clone2 = { ...food2 }; 
      console.log(clone2);// { food: 'apple', drink: 'milk' }

 //3. JSON.parse() and JSON.stringify(): This method converts a JavaScript object to a JSON string, and then back to a new object. This technique can be useful if you need to clone an object deeply, i.e. if the object has nested objects or arrays.
 //example: 
      const originalObj3 = { a: 1, b: { c: 2 } };
      const newObj3 = JSON.parse(JSON.stringify(originalObj3));
      console.log(newObj3); // { a: 1, b: { c: 2 } }

       const food3 = { 
            food: 'apple', 
            drink: 'milk',
            ingredients: ['flour', 'sugar', 'eggs']
        };
       const clone3 = JSON.parse(JSON.stringify(food3)); 
       console.log(clone3)// { 
  //   food: 'apple', 
  //   drink: 'milk',
  //   ingredients: ['flour', 'sugar', 'eggs']
  // 

 //4. Object.create(): This method creates a new object with the specified prototype object and properties.
 //example: 
 // In this example, newObj is an empty object with originalObj as its prototype object. You can add properties to newObj using dot notation.
       const originalObj4 = { a: 1, b: 2 };
       const newObj4 = Object.create(originalObj4);
       console.log(newObj4); // {}




//Question 5
const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
 }
 for (const party in presidentialCandidates) {
    console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`);
  }