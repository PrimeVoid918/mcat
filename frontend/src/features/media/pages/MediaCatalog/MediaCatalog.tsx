import { Box, Button, Container, Stack, Typography } from "@mui/material";
import CreateMediaModal from "../../components/CreateMediaModal/CreateMediaModal";
import React, { useState } from "react";

export default function MediaCatalog() {
  const arr = ["1", "2", "3", "4", "5"];

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleToggleFormModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <Container>
      <Typography>Hello? this is home baby</Typography>
      <CreateMediaModal
        isOpen={isModalOpen}
        onClose={handleToggleFormModal}
      ></CreateMediaModal>
      <Button onClick={() => setIsModalOpen(true)}>OpenModal</Button>
      <div>
        <Stack sx={{ flexDirection: "row" }}>
          {arr.map((val) => {
            return <Box>{val}</Box>;
          })}
        </Stack>
      </div>
    </Container>
  );
}
