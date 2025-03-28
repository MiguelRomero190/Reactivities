import { Box, Container, CssBaseline } from "@mui/material"
import axios from "axios"
import { useState, useEffect } from "react"
import NavBar from "./NavBar"
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard"

function App() {
  const[activities, setActivities] = useState<Activity[]>([])
  const[selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  const[editMode, setEditMode] = useState(false)


  useEffect(() => {
    axios.get<Activity[]>('https://localhost:5001/api/activities')
    .then(response => setActivities(response.data))
  }, [])

  const handleSelectActivity = (id:string) => {
    setEditMode(false)
    setSelectedActivity(activities.find(activity => activity.id === id))
  }

  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined)
  }

  const handleOpenForm = (id?: string) => {
    if(id) handleSelectActivity(id)
    else handleCancelSelectActivity()
    setEditMode(true)
  }
   
  const handleCloseForm = () => {
    setEditMode(false)
  }

  const handleSubmitForm = (activity: Activity) => {
    if(activity.id) {
      setActivities(activities.map(a => a.id === activity.id ? activity : a))
      //setSelectedActivity(activity)
    } else {
      const newActivity = {...activity, id: activities.length.toString()}
      setSelectedActivity(newActivity)
      setActivities([...activities, newActivity ])
    }
    setEditMode(false)
  }

  const handleDelete = (id: string) => {
    setActivities(activities.filter(activity => activity.id !== id))
    if(selectedActivity?.id === id) handleCancelSelectActivity()
  }

  return (
    <Box sx={{backgroundColor: '#eeeeee'}}>
      <CssBaseline />
      <NavBar 
        openForm={handleOpenForm}
      />
      <Container maxWidth="xl" sx={{mt: 3}}>
        <ActivityDashboard 
          activities={activities}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          openForm={handleOpenForm}
          closeForm={handleCloseForm}
          submitForm={handleSubmitForm}
          deleteActivity={handleDelete}
        />
      </Container>
    </Box>
  )
}



export default App
