/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export default {
  async queue(batch, env) {
    // Do something with messages in the batch
    // i.e. write to R2 storage, D1 database, or POST to an external API
    // You can also iterate over each message in the batch by looping over batch.messages
	const messages = JSON.stringify(batch.messages);
	console.log(`Received batch: ${messages}`);
  },
};
