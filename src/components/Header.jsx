// import { AppBar, Toolbar, Typography } from "@mui/material";

// const Header = () => {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6">Online Learning Platform</Typography>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from "@mui/material";

const Header = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    curso: "",
  });

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log("Datos enviados:", formData);
    handleCloseDialog();
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Online Learning Platform</Typography>
          <div style={{ marginLeft: "auto" }}>
            <Button color="inherit" onClick={handleOpenDialog}>
              Inscribirse
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Inscripción a nuevo curso</DialogTitle>
        <DialogContent>
          <TextField
            label="Nombre"
            fullWidth
            margin="dense"
            name="nombre"
            value={formData.nombre}
            onChange={handleInputChange}
          />
          <TextField
            label="Correo electrónico"
            fullWidth
            margin="dense"
            name="correo"
            value={formData.correo}
            onChange={handleInputChange}
          />
          <TextField
            select
            label="Curso"
            fullWidth
            margin="dense"
            name="curso"
            value={formData.curso}
            onChange={handleInputChange}
          >
            {/*cursos */}
            <MenuItem value="curso1">Curso 1</MenuItem>
            <MenuItem value="curso2">Curso 2</MenuItem>
            <MenuItem value="curso3">Curso 3</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Header;
