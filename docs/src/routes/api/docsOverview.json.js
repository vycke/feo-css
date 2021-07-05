import { getDocs } from '$lib/process-files';

export async function get() {
	const docs = await getDocs();
	return { body: docs };
}
