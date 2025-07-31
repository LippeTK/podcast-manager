import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/listEpisodesService";
import { filterEpisodesService } from "../services/filterEpisodesService";
import { StatusCode } from "../utils/statusCode";
import { filterPodcastModel } from "../models/filterPodcastModel";

export const getEpisodesList = async (req: IncomingMessage, res: ServerResponse) => {

    const content: filterPodcastModel = await serviceListEpisodes()

    res.writeHead(content.statusCode, {'Content-Type': "application/json"})
    res.end(JSON.stringify(content.body))
}

export const getFilteredEpisodes = async (req:IncomingMessage, res: ServerResponse) => {
    const content:filterPodcastModel = await filterEpisodesService(req.url)

    res.writeHead(content.statusCode, {'Content-Type': "application/json"})
    res.end(JSON.stringify(content.body))
}