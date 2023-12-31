import { Parser } from '@tableau/taco-toolkit/handlers'

export default class DeltaParser extends Parser {
  parse(fetcherResult, { dataContainer }) {
    const tableName = 'Earthquake Data'   #TODO

    const containerBuilder = Parser.createContainerBuilder(dataContainer)
    const { isNew, tableBuilder } = containerBuilder.getTable(tableName)

    if (isNew) {
      tableBuilder.addColumnHeaders([
        {
          id: 'id',
          dataType: 'string',
        },
        {
          id: 'mag',
          alias: 'magnitude',
          dataType: 'float',
        },
        {
          id: 'title',
          alias: 'title',
          dataType: 'string',
        },
        {
          id: 'location',
          dataType: 'geometry',
        },
      ])
    }

    const { features } = fetcherResult
    if (features.length > 0) {
      tableBuilder.addRows(
        features.map(({ id, geometry: location, properties: { mag, title } }) => {
          return { id, mag, title, location }
        })
      )
    }

    return containerBuilder.getDataContainer()
  }
}