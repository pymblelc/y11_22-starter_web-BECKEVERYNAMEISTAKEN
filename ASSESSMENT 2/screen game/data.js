const ANIMAL_0 = "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png";
const ANIMAL_1 = "https://c.stocksy.com/a/Gpy200/z9/710474.jpg";
const ANIMAL_2 = "https://www.animalspot.net/wp-content/uploads/2013/02/Rabbit-283x300.jpg";
const ANIMAL_3 = "https://www.thoughtco.com/thmb/qVWPvSIm-DaHjLeCHpTpiSuQErA=/650x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/fish2GE-57ed128f5f9b586c35a3dcff.jpg";
const ANIMAL_4 = "https://www.pinkvilla.com/imageresize/baby-elephant-playing-in-a-river.jpg?width=752&format=webp&t=pvorg";
const ANIMAL_5 = "https://blog.humanesociety.org/wp-content/uploads/2022/04/HSI-Makalali-154_414838-1220x814.jpg";
const ANIMAL_6 = "https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn";
const ANIMAL_7 = "https://https://hootdetective.net.au/the-owls";
const ANIMAL_8 = "https://th-thumbnailer.cdn-si-edu.com/bZAar59Bdm95b057iESytYmmAjI=/1400x1050/filters:focal(594x274:595x275)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/95/db/95db799b-fddf-4fde-91f3-77024442b92d/egypt_kitty_social.jpg";
const ANIMAL_9 = "https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg";

const CAT = 'Cat';
const DOG = 'Dog';
const ELEPHANT = 'Elephant';
const RABBIT = "Rabbit";
const OWL = 'Owl';
const FISH = 'Fish';
const BIRD = 'Bird';

var gamedata;

gamedata = [
    {
        ImageLink : ANIMAL_0,
        AnimalType: CAT,
        Comment : "cute",
    },
    {
        ImageLink : ANIMAL_1,
        AnimalType: ELEPHANT,
        Comment : "big",
    },
    {
        ImageLink : ANIMAL_2,
        AnimalType: RABBIT,
        Comment : "easter",
    },
    {
        ImageLink : ANIMAL_3,
        AnimalType: CAT,
        Comment : "cool",
    },
    {
        ImageLink : ANIMAL_4,
        AnimalType: BIRD,
        Comment : "spooky",
    },
    {
        ImageLink : ANIMAL_5,
        AnimalType: BIRD,
        Comment : "spooky",
    },
    {
        ImageLink : ANIMAL_6,
        AnimalType: CAT,
        Comment : "cool",
    },
    {
        ImageLink : ANIMAL_7,
        AnimalType: BIRD,
        Comment : "spooky",
    },
    {
        ImageLink : ANIMAL_8,
        AnimalType: BIRD,
        Comment : "spooky",
    },
    {
        ImageLink : ANIMAL_9,
        AnimalType: CAT,
        Comment : "cool",
    }
];

console.log(gamedata[0]);