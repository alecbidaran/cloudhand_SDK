import CloudhandsSDK, { CloudhandsButton } from "cloudhands";

const clientId = "<your-client-id>";
const csdk = new CloudhandsSDK(clientId);
const charge = csdk.CreateCharge(0.3, "Streamlit test event");

const button = CloudhandsButton(csdk, charge, (result) => {
  console.log("Payment success:", result);
});

const container = document.getElementById("cloudhands-button-container");
if (container) {
  container.appendChild(button);
}
