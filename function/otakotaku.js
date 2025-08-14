import fetch from 'node-fetch';

export default async function handler(req, res) {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).json({ status: false, message: 'Parameter query diperlukan' });
        }

        // Langsung panggil API publik Otakotaku
        const apiUrl = `https://api.siputzx.my.id/api/s/otakotaku?query=${encodeURIComponent(query)}`;

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
