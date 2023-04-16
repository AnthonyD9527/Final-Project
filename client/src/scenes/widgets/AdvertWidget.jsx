import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Future Events
        </Typography>
        <Typography color={medium}></Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="Future Events"
        src="http://localhost:3001/assets/FutureEvents.PNG"
        style={{ borderRadius: "0.95rem", margin: "0.95rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}></Typography>
        <Typography color={medium}></Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;