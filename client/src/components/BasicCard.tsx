import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

// import Typography from '@mui/material/Typography';
// import { blue } from '@mui/material/colors';

export default function BasicCard({ joke }) {
  const { setup, punchline } = joke;
  return (
    <Card sx={{ minWidth: 275, border: '1px solid black', margin: '10px' }}>
      <CardContent>
        <div style={{ textAlign: 'center' }}>{setup}</div>
        <div style={{ textAlign: 'center' }}>{punchline}</div>
      </CardContent>
    </Card>
  );
}
