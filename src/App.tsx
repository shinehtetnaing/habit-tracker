import { Box, Container, Typography } from "@mui/material";
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store/store";
import HabitList from "./components/HabitList";
import HabitStats from "./components/HabitStats";
import AddHabitForm from "./components/AddHabitForm";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Habit Tracker
          </Typography>
          <AddHabitForm />
          <HabitList />
          <HabitStats />
        </Box>
      </Container>
    </Provider>
  );
}

export default App;
