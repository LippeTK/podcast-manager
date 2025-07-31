import { filterPodcastModel } from "../models/filterPodcastModel"
import { repositoryPodcast } from "../repositories/podcastsRepository"
import { StatusCode } from "../utils/statusCode"

export const serviceListEpisodes = async () =>{
    const data = await repositoryPodcast()

    let responseFormat: filterPodcastModel = {
        statusCode:0,
        body:[]
    }
    if(data.length > 0){
        responseFormat.statusCode = StatusCode.OK
    }else{
        responseFormat.statusCode = StatusCode.NoContent
    }
    responseFormat.body = data

    return responseFormat
}