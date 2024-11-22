import 'dotenv/config'
import { connectDB } from "./db/index.js";
import { app } from "./app.js";

connectDB().then(() => {
    console.log("Connection successful !!!");
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙ Server running on port ${process.env.PORT}`);
    })
}).catch((error) => {
    console.log("Connection failed!",error);
});


