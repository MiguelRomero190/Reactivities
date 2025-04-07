import { SearchOff } from "@mui/icons-material";
import { Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router";

const notFoundQuotes = [
    "These are not the droids you're looking for.",
    "I've looked everywhere!",
    "It's gone! It's simply vanished!",
    "We've searched high and low, but there's no sign of it.",
    "Where could it be? I could have sworn it was here.",
    "The answer... remains elusive.",
    "We're chasing shadows. There's nothing there.",
    "After all this, we're still no closer to finding it.",
    "It's like trying to find a needle in a haystack!",
    "Maybe it was never here to begin with.",
]

export default function Notfound() {
    const randomIndex = Math.floor(Math.random() * notFoundQuotes.length);
    const notFoundQoute = notFoundQuotes[randomIndex];
  return (
    <Paper
      sx={{
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: 6
      }}>
        < SearchOff sx={{fontSize: 100}} color="primary" />
        <Typography variant="h3">{notFoundQoute}</Typography>
        <Button fullWidth component={Link} to='/Activities' >Take me back to the beggining</Button>
    </Paper>
  )
}