import * as http from "http"
import {getEpisodesList, getFilteredEpisodes} from './controllers/podcastController'
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/httpMethod";

export const app = async(req: http.IncomingMessage, res:http.ServerResponse)=>{

    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];

    if(req.method === HttpMethod.GET && baseUrl === Routes.LIST){
        await getEpisodesList(req, res)
    }
    if(req.method === HttpMethod.GET && baseUrl === Routes.FILTER){
        await getFilteredEpisodes(req, res)
    }
}