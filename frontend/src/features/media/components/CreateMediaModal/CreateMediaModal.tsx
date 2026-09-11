import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stack,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useMemo } from "react";
import { observer } from "mobx-react-lite";
import { MediaCreateModel } from "../../state/MediaCreateModel";
import MediaService from "@/infrastructure/wails/media";

interface CreateMediaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (model: MediaCreateModel) => void;
}

export default observer(function CreateMediaModal({
  isOpen,
  onClose,
  onSubmit,
}: CreateMediaModalProps) {
  const mediaService = useMemo(() => new MediaService(), []);
  const model = useMemo(() => new MediaCreateModel(), []);

  const handleClose = () => {
    model.reset();
    onClose();
  };

  const handleSubmit = async () => {
    if (!model.isValid) return;
    console.log("Hello");
    await mediaService.create(model.toPayload());
    onSubmit?.(model);
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth="sm" fullWidth>
      {/* Header */}
      <DialogTitle
        sx={{
          m: 0,
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" component="div">
          Create New Media
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ color: "text.secondary" }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      {/* Form Content */}
      <DialogContent dividers sx={{ borderColor: "divider" }}>
        <Stack spacing={2.5} sx={{ mt: 1 }}>
          <TextField
            label="Title"
            placeholder="Enter media title"
            fullWidth
            required
            value={model.title}
            onChange={(event) => {
              model.title = event.target.value;
            }}
            error={model.title.length === 0 && model.code.length > 0} // Optional visual feedback hint
          />

          <TextField
            label="Code"
            placeholder="Enter unique code"
            fullWidth
            required
            value={model.code}
            onChange={(event) => {
              model.code = event.target.value;
            }}
          />

          <TextField
            label="Description"
            placeholder="Write a brief description..."
            fullWidth
            multiline
            rows={3}
            value={model.description}
            onChange={(event) => {
              model.description = event.target.value;
            }}
          />
        </Stack>
      </DialogContent>

      {/* Actions */}
      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button variant="outlined" color="inherit" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          disabled={!model.isValid}
          onClick={handleSubmit}
        >
          Create Media
        </Button>
      </DialogActions>
    </Dialog>
  );
});
