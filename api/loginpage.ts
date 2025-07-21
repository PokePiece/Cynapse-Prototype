
/*
const handler = async (req: any, res: any) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    let body;
    try {
        body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    } catch (err) {
        return res.status(400).json({ error: 'Invalid JSON' });
    }

    const { username, password } = body || {};

    const VALID_USERNAME = process.env.VERCEL_USER;
    const VALID_PASSWORD = process.env.VERCEL_PASS;

    if (!VALID_USERNAME || !VALID_PASSWORD) {
        return res.status(500).json({ error: 'Server configuration error' });
    }

    if (!username || !password) {
        return res.status(400).json({ error: 'Missing credentials' });
    }

    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
        return res.status(200).json({ success: true });
    }

    return res.status(401).json({ error: 'Invalid credentials' });
};

export default handler;

*/