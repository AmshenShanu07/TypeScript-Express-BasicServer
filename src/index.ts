import * as http from 'http';
import {app}  from './app';

const PORT:number | string = process.env.PORT || 4000;
const server = http.createServer(app);


server.listen(PORT,()=>{
    console.log(`SERVER STARTED AT PORT ${PORT}`);  
})
