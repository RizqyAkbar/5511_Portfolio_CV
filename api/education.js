export default function handler(req, res) {
  res.status(200).json([
    { id: 1, period: '2015-2019', institution: 'Universitas X', major: 'Teknik Informatika' },
    { id: 2, period: '2012-2015', institution: 'SMA Y', major: 'IPA' }
  ]);
}