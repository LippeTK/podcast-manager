import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/listEpisodesService";
import { filterEpisodesService } from "../services/filterEpisodesService";
import { StatusCode } from "../utils/statusCode";

export const getEpisodesList = async (req: IncomingMessage, res: ServerResponse) => {

    const content = await serviceListEpisodes()

    res.writeHead(StatusCode.OK, {'Content-Type': "application/json"})
    res.end(JSON.stringify(content))
}

export const getFilteredEpisodes = async (req:IncomingMessage, res: ServerResponse) => {
    const content = await filterEpisodesService(req.url)

    res.writeHead(StatusCode.OK, {'Content-Type': "application/json"})
    res.end(JSON.stringify(content))
}