import { Box, Container, Typography } from "@mui/material";
import { Provider } from "react-redux";
import "./App.css";
import AddHabitForm from "./components/addHabitForm";
import { store } from "./store/store";
import HabitList from "./components/HabitList";

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
        </Box>
      </Container>
    </Provider>
  );
}

export default App;
