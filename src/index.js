const { app } = require('./config/express');


const main = () => {
    try {
        app.listen(app.get("PORT"));
        console.log(`Server running in http://${app.get("HOST")}:${app.get("PORT")}`);
    } catch (error) {
        console.log(error);
    }
}

main();