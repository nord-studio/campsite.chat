
export async function GET() {
	const redirectUrl = 'https://cdn.crabnebula.app/download/campsite-chat/campsite/latest/platform/appimage-x86_64';
	return new Response(null, {
		status: 307,
		headers: {
			Location: redirectUrl,
		},
	});
}