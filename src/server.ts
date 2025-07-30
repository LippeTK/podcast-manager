import * as http from "http"
import {getEpisodesList, getFilteredEpisodes} from './controllers/podcastController'

const server = http.createServer(async(req: http.IncomingMessage, res:http.ServerResponse)=>{

    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

    if(req.method === "GET" && baseUrl === "/api/list"){
        await getEpisodesList(req, res)
    }
    if(req.method === "GET" && baseUrl === "/api/filter"){
        await getFilteredEpisodes(req, res)
    }
})
server.listen(process.env.PORT, () => {
    console.log("Servidor iniciado na porta 3333")
})