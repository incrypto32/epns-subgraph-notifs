import { BigInt } from "@graphprotocol/graph-ts"
import { Storage, Stored } from "../generated/Storage/Storage"
import { sendEPNSNotification } from "./EPNSNotification"


//Note: EPNS only supports The Graph Hosted Service at present

export const subgraphID = "incrypto32/epns-notifs"
export function handleStored(event: Stored): void {
  let recipient = "0xfe4A3D08be9C41fc2d27Ea614389684ce1c2686d",
	  type = "1",
	  title = "Number Stored",
	  body = `New number stored: ${event.params.number.toString()} by ${event.params.sender.toHexString()}`,
	  subject = "Number Stored",
	  message = `New number stored: ${event.params.number.toString()} by ${event.params.sender.toHexString()}`,
	  image = "null",
	  secret = "null",
	  cta = "https://epns.io/"

  let notification= `{\"type\": \"${type}\", \"title\": \"${title}\", \"body\": \"${body}\", \"subject\": \"${subject}\", \"message\": \"${message}\", \"image\": \"${image}\", \"secret\": \"${secret}\", \"cta\": \"${cta}\"}`
  sendEPNSNotification (recipient, notification)
}
