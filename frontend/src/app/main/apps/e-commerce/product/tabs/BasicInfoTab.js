import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import { Controller, useFormContext } from 'react-hook-form';

function BasicInfoTab(props) {
  const methods = useFormContext();
  const { control, formState } = methods;
  const { errors } = formState;

  return (
    <div > 
      <Paper className="mt-20 sm:mt-48 p-24 pb-28 sm:p-10 sm:pb-25 rounded-2xl">
      <div className="mb-24">
              <Typography className="text-2xl font-bold tracking-tight">
               creacion del proyecto
              </Typography>
              <Typography color="text.secondary">
              Por favor deligenciar la siguiente informacion
              </Typography>
            </div>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="Nombre de proyecto"
            autoFocus
            id="name"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="description"
            label="Descripcion de proyecto"
            type="text"
            multiline
            rows={5}
            variant="outlined"
            fullWidth
          />
        )}
      />
       <Controller
        name="nameBD"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            classNameBD="mt-8 mb-16"
            error={!!errors.nameBD}
            required
            helperText={errors?.nameBD?.message}
            label="Nombre de la base de datos"
            id="nameBD"
            variant="outlined"
            fullWidth
          />
        )}
      />
       <Controller
        name="userdb"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.userdb}
            required
            helperText={errors?.userdb?.message}
            label="Nombre del usuario de la base de datos "
            id="userdb"
            variant="outlined"
            fullWidth
          />
        )}
      />
       <Controller
        name="passwordb"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.passwordb}
            required
            helperText={errors?.passwordb?.message}
            label="Contraseña de la base de datos"
            id="passwordb"
            variant="outlined"
            fullWidth
          />
        )}
      />
       <Controller
        name="namerepo"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.namerepo}
            required
            helperText={errors?.namerepo?.message}
            label="Nombre del repositorio"
            id="namerepo"
            variant="outlined"
            fullWidth
          />
        )}
      />

<Controller
        name="urlrepo"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.urlrepo}
            required
            helperText={errors?.urlrepo?.message}
            label="URL del repositorio"
            id="urlrepo"
            variant="outlined"
            fullWidth
          />
        )}
      />
       <Controller
        name="nameramarepo"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.nameramarepo}
            required
            helperText={errors?.nameramarepo?.message}
            label="Nombre de la rama del repositorio"
            id="nameramarepo"
            variant="outlined"
            fullWidth
          />
        )}
      />
       <Controller
        name="namedoc"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.namedoc}
            required
            helperText={errors?.namedoc?.message}
            label="Nombre de la documentacion"
            id="namedoc"
            variant="outlined"
            fullWidth
          />
        )}
      />
       <Controller
        name="versiondoc"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.versiondoc}
            required
            helperText={errors?.versiondoc?.message}
            label="version de la documentacion"
            id="versiondoc"
            variant="outlined"
            fullWidth
          />
        )}
      />

<Controller
        name="versionjson"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.versionjson}
            helperText={errors?.versionjson?.message}
            label="version del package json"
            id="versionjson"
            variant="outlined"
            fullWidth
          />
        )}
      />
      <Controller
        name="host"
        control={control}
        defaultValue={[]}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            className="mt-8 mb-16"
            multiple
            freeSolo
            options={[]}
            value={value}
            onChange={(event, newValue) => {
              onChange(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="seleccione host"
                label="host"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        )}
      />

      <Controller
        name="Puertos"
        control={control}
        defaultValue={[]}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            className="mt-8 mb-16"
            multiple
            freeSolo
            options={[]}
            value={value}
            onChange={(event, newValue) => {
              onChange(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="seleccione Puertos"
                label="Puertos"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        )}
      />
      </Paper>
    </div>
  );
}

export default BasicInfoTab;
