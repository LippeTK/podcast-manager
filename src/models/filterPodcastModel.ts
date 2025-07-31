import { Podcast } from "./podcastModel";

export interface filterPodcastModel{
    statusCode: number,
    body: Podcast[]
}