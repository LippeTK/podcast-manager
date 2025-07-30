import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/listEpisodesService";
import { filterEpisodesService } from "../services/filterEpisodesService";

export const getEpisodesList = async (req: IncomingMessage, res: ServerResponse) => {

    const content = await serviceListEpisodes()

    res.writeHead(200, {'Content-Type': "application/json"})
    res.end(JSON.stringify(content))
}

export const getFilteredEpisodes = async (req:IncomingMessage, res: ServerResponse) => {
    
    const queryString = req.url?.split('?n=')[1] ?? ""

    const content = await filterEpisodesService(queryString)

    res.writeHead(200, {'Content-Type': "application/json"})
    res.end(JSON.stringify(content))
}