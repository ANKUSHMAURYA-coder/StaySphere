const mongoose=require("mongoose");
const initData=require("./data.js");

const Listing=require("../models/listing.js");

const MONGO_URL='mongodb://127.0.0.1:27017/wanderlust';

async function main() {
    await mongoose.connect(MONGO_URL);
}


main()
.then(async()=>{
    console.log("connected to DB");
   await initDB();
})

.catch((err)=>{
    console.log(err);
});

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

const initDB=async ()=>{
    console.log(Listing);//debug
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({
        ...obj,
         owner:"6a0bdfcdeeaaa312805d357a"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

// initDB();