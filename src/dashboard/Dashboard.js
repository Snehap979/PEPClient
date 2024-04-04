import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SelectEnergyComponent from "./SelectEnergyComponent";
import SelectTimeComponent from "./SelectTimeComponent";
import { getEnergy } from "../actions/UserAction";
import {getDeviceIds,formGeneratedJson} from '../utils/Util'
import EnergyChartComponent from './EnergyChartComponent'

const cards = [
  { id: 1, title: "Energy", content: "50kh" },
  { id: 2, title: "Time", content: "30 hours" },
  { id: 3, title: "Total", content: "60000W" },
];

const Energy = ["wind", "solar", "hydro"];
const Time = ["00:00-07:00", "02:00-05:00"];

const Dashboard = () => {
  const [selectedEnergy, setSelectedEnergyValue] = useState("wind");
  const [selectedTime, setSelectedTimeValue] = useState("00:00-07:00");
  const [generatedData,setGenerationData]=useState({})
  const theme = useTheme();

  const handleEnergySelectChange = (event) => {
    setSelectedEnergyValue(event.target.value);
  };

  const handleTimeSelectChange = (event) => {
    setSelectedTimeValue(event.target.value);
  };

  useEffect(() => {
    const fetchData = async (deviceId, startTime, endTime) => {
      try {
        const response = await getEnergy(deviceId, startTime, endTime);
        let generatedData = formGeneratedJson(selectedEnergy, response);
        setGenerationData(generatedData);
      } catch (error) {
        console.log("error", error);
      }
    };
  
    if (selectedTime && selectedEnergy) {
      //get the selected time format
      let time = selectedTime.split("-");
      let startTime = time[0];
      let endTime = time[1];
      let deviceId = getDeviceIds(selectedEnergy);
      fetchData(deviceId, startTime, endTime);
    }
  }, [selectedTime, selectedEnergy]); // Ensure hooks are called with the same dependencies

  return (
    <React.Fragment>
      <Grid
        container
        spacing={4}
        style={{ padding: 16 }}
        justifyContent={"space-evenly"}
      >
        {cards.map((card) => (
          <Grid item key={card.id} xs={12} sm={4} md={4}>
            <Card sx={{ borderRadius: "4px" }}>
              <CardContent>
                <Typography variant="h5" component="h2" color={"green"}>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {card.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container justify-content="space-between" direction="row">
        <Grid item xs={12} style={{ padding: 16 }}>
          <Card sx={{ minWidth: 300 }}>
            <CardContent>
              <Grid
                item
                container
                xs={12}
                direction="row"
                alignItems="flex-end"
                justifyItems={"flex-end"}
              >
                <Grid item xs={6}>
                  <SelectEnergyComponent
                    values={Energy}
                    name="Energy"
                    handleEnergySelectChange={handleEnergySelectChange}
                  ></SelectEnergyComponent>
                </Grid>
                <Grid item xs={6}>
                  <SelectTimeComponent
                    values={Time}
                    name="Time"
                    handleTimeSelectChange={handleTimeSelectChange}
                  ></SelectTimeComponent>
                </Grid>
              </Grid>
             
    <Card >
      {Object.entries(generatedData).map(([device, data]) => (
        <EnergyChartComponent key={device} data={data} title={`Generation (${device})`} />
      ))}
    </Card>

            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Dashboard;
