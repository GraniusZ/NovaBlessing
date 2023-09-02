import { UserServer } from "@/app/types/UserServer";
import { Card, Typography, Stack } from "@mui/material";
export const UserProfileCard = ({ user }: { user: UserServer }) => {
  return (
    <Card variant="outlined" sx={{ px: "16px", py: "10px" }}>
      <Stack spacing={0.5}>
        {" "}
        <Typography variant="h6">{user.name}</Typography>
        <Typography sx={{ opacity: "50%" }}>{"@" + user.username}</Typography>
      </Stack>
    </Card>
  );
};
