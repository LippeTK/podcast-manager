import * as http from "http"
import {getEpisodesList, getFilteredEpisodes} from './controllers/podcastController'
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/httpMethod";
import { app } from "./app";

const server = http.createServer(app)
server.listen(process.env.PORT, () => {
    console.log("Servidor iniciado na porta 3333")
})