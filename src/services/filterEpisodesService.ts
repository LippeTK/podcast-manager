import { repositoryPodcast } from "../repositories/podcastsRepository"

export const filterEpisodesService = async (podcastName:string) => {
    const data = await repositoryPodcast(podcastName)
    return data
}