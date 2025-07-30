import fs from "fs"
import path from "path"
import { Podcast } from "../../models/podcastModel"

const pathData = path.join(__dirname, "../repositories/podcasts.json")

export const repositoryPodcast = async (podcastName?: string): Promise<Podcast[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8")
    let jsonFile = JSON.parse(rawData)

    if (podcastName){
        jsonFile = jsonFile.filter((episode: Podcast) => episode.podcastName === podcastName)
    }
    return jsonFile
}