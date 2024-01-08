import { Fetcher, FetchUtils } from '@tableau/taco-toolkit/handlers'

export default class DeltaFetcher extends Fetcher {
  async *fetch({ handlerInput }) {
    const profile_file = handlerInput.data.profile_file
    yield await FetchUtils.fetchJson(data.url)
  }
}
