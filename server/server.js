import http from 'http'
import { server, client } from 'websocket'

export const webSocketsServerPort = 1010
export const connections = []
export let ratesHistory = {}
export const commands = {
  RATES_HISTORY: 'rates_history',
  RATES_UPDATE: 'rates_update',
}
export let isFirstLoad = true
export const initializeRatesData = rates => {
  if (!rates || !Object.keys(rates).length) {
    return false
  }

  for (const rate of rates) {
    ratesHistory[rate.Name] = {
      ask: rate.Ask,
      bid: rate.Bid,
      symbol: rate.Name,
      name: rate.FullName,
      market: rate.Market,
      timeStamp: rate.Timestamp,
    }
  }

  return { ...ratesHistory }
}

export const updateRatesData = rates => {
  if (!rates || !Object.keys(rates).length) {
    return false
  }

  const dataToPublish = {}

  for (const rate of rates) {
    const dataToUpdate = {
      ask: rate.Ask,
      bid: rate.Bid,
    }
    ratesHistory[rate.Name] = {
      ...ratesHistory[rate.Name],
      ...dataToUpdate,
    }
    dataToPublish[rate.Name] = {
      ...dataToUpdate,
    }
  }

  return dataToPublish
}

export const publishRatesData = (publishData, isUpdate) => {
  const cmd = isUpdate ? commands.RATES_UPDATE : commands.RATES_HISTORY

  for (const connection of connections) {
    connection.sendUTF(
      JSON.stringify({ cmd, data: publishData }),
    )
  }
}

export const mainWsRequestProcessor = request => {
  console.log(new Date() + '\nConnection from origin ' + request.origin + '.')
  const connection = request.accept(null, request.origin)
  const connectionIndex = connections.push(connection) - 1
  console.log(new Date() + ' Connection accepted.')

  if (Object.keys(ratesHistory).length > 0) {
    connection.sendUTF(
      JSON.stringify({ cmd: commands.RATES_HISTORY, data: ratesHistory }))
  }

  connection.on('close', (connection) => {
    connections.splice(connectionIndex, 1)
    console.log(`${new Date()}\nPeer ${connection.remoteAddress} disconnected.`)
  })
}

export const ratesWsMessageProcessor = message => {
  if (message.type === 'utf8') {
    console.log(`Received: ${message.utf8Data}`)
    const response = JSON.parse(message.utf8Data)

    if (isFirstLoad) {
      isFirstLoad = !isFirstLoad
      const publishData = initializeRatesData(response.args)
      publishData && publishRatesData(publishData, false)
    } else {
      const publishData = updateRatesData(response.args)
      publishData && publishRatesData(publishData, true)
    }
  }
}

export const httpServerListenLog = () => {
  console.log(
    new Date() + '\nServer is listening on port ' + webSocketsServerPort,
  )
}

export const ratesWsConnectionProcessor = connection => connection.on('message', ratesWsMessageProcessor)

const httpServer = http.createServer((req, res) => {})
httpServer.listen(webSocketsServerPort, httpServerListenLog)

const wsServer = new server({ httpServer })

wsServer.on('request', mainWsRequestProcessor)

const ratesWsConnection = new client()

ratesWsConnection.on('connect', ratesWsConnectionProcessor)

ratesWsConnection.connect('ws://wgt-srv0.finversia.ru/wss/Server.ashx?subscriber=true');