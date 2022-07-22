var faces; //undefined

// faces = [
    // "hello",
    // "world",
// ];

faces = [
{
    "mo" : 1,
    "age" : 43,
    "style" : 0,
},
{
    "mo" : 0,
    "age" : 16,
    "style" : 32,
},
];

faces.push(
    {
        "mo" : 0,
        "age" : 124,
        "style" : 64,
        "gender" : "female",
    }
)


// elements for each list item
faces[0].age //43
faces[1].style //32
faces[2].gender // "female"
faces[1].gender // undefined