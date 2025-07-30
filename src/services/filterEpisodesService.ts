import { IncomingMessage } from "http"
import { repositoryPodcast } from "../repositories/podcastsRepository"

export const filterEpisodesService = async (podcastName:string | undefined) => {
    const queryString = podcastName?.split('?n=')[1] ?? ""
    const data = await repositoryPodcast(queryString)
    return data
}