/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
	//
	// Example binding to a Service. Learn more at https://developers.cloudflare.com/workers/runtime-apis/service-bindings/
	// MY_SERVICE: Fetcher;
	//
	// Example binding to a Queue. Learn more at https://developers.cloudflare.com/queues/javascript-apis/
	// MY_QUEUE: Queue;
	SLACK_WEBHOOK_URL: string;
}

type ReqBody = {
	name: string;
	email: string;
	message: string;
};

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		if (request.method !== 'POST') {
			return new Response('POST以外のメソッドはサポートされていません', { status: 400 });
		}

		try {
			const respText = await request.text();
			const body = JSON.parse(respText) as ReqBody;

			const { name, email, message } = body;
			if (!(name.trim() && email.trim() && message.trim())) {
				throw new Error();
			}

			const emailRegex = /^[a-zA-Z0-9_+-]+(\.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
			if (email.match(emailRegex) === null) {
				throw new Error();
			}

			const res = await fetch(env.SLACK_WEBHOOK_URL, {
				method: 'POST',
				body: JSON.stringify({
					text: `氏名: ${name}\n\nメールアドレス: ${email}\n\n内容: ${message}`,
				}),
			});
			return res;
		} catch (e) {
			return new Response('不適切なリクエストパラメーターです', { status: 400 });
		}
	},
};
