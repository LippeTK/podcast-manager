import { IncomingMessage } from "http"
import { repositoryPodcast } from "../repositories/podcastsRepository"
import { filterPodcastModel } from "../models/filterPodcastModel"
import { StatusCode } from "../utils/statusCode"

export const filterEpisodesService = async (podcastName:string | undefined):Promise<filterPodcastModel> => {

    //define interface de retorno
    let responseFormat: filterPodcastModel = {
        statusCode:0,
        body:[]
    }
    //busca dados
    const queryString = podcastName?.split('?n=')[1] ?? ""
    const data = await repositoryPodcast(queryString)

    //verifica se tem conteúdo
    if(data.length > 0){
        responseFormat.statusCode = StatusCode.OK
    }else{
        responseFormat.statusCode = StatusCode.NoContent
    }
    responseFormat.body = data
    return responseFormat
}