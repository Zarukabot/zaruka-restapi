import fetch from 'node-fetch';

export default async function handler(req, res) {
    try {
        const { url } = req.query;
        if (!url) {
            return res.status(400).json({ status: false, message: 'Parameter url diperlukan' });
        }

        const apiUrl = `https://api.siputzx.my.id/api/tools/skiplink?url=${encodeURIComponent(url)}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        res.status(200).json({
            status: true,
            source: 'siputzx.my.id',
            result: data
        });
    } catch (err) {
        res.status(500).json({
            status: false,
            message: 'Terjadi kesalahan',
            error: err.message
        });
    }
}
