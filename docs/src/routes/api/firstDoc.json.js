import { getDoc, getDocs } from '$lib/process-files';
import { group } from '$lib/search';

export async function get() {
	const docs = await getDocs();
	const grouped = group(docs);
	const { slug } = grouped[Object.keys(grouped)[0]][0];

	const doc = await getDoc(slug + '.md');
	return { body: doc };
}
