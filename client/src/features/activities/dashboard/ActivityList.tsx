import { Box } from "@mui/material"
import ActivityCard from "./ActivityCard"
import { useActivities } from "../../../lib/hooks/useActivities"
import Loading from "../../../app/layouts/Loading"

export default function ActivityList() {
  const { activities, isPending } = useActivities()

  if (!activities || isPending) return <Loading />
  
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
        {activities.map(activity => (
            <ActivityCard key={activity.id} activity={activity}/>
        ))
}
    </Box>
  )
}