import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import Loading from "../../../app/layouts/Loading"
import { Link, useNavigate, useParams } from "react-router"
import { useActivities } from "../../../lib/hooks/useActivities"

export default function ActivityDetails() {
    const navigate = useNavigate()
    const {id} = useParams()
    const {activity, isLoadingActivity} = useActivities(id)

    if (isLoadingActivity) return <Loading />
    if (!activity) return <Typography>Activity Not found</Typography>
    
    return (
        <Card sx={{borderRadius: 3}}>
            <CardMedia
                component='img'
                src={`/images/categoryImages/${activity.category.toLowerCase()}.jpg`}
            />
            <CardContent>
                <Typography variant="h5">{activity.title}</Typography>
                <Typography variant="subtitle1" fontWeight= 'light'>{activity.date.toString()}</Typography>
                <Typography variant="body1">{activity.description}</Typography>
                <Typography variant="subtitle1">{activity.city} / {activity.venue}</Typography>
            </CardContent>
            <CardActions>
                <Button component={Link} to={`/manage/${activity.id}`} color="primary">Edit</Button>
                <Button onClick={() => navigate('/activities')}color="inherit">Cancel</Button>
            </CardActions>
        </Card>
    )
}