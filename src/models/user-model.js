import mongoose from '../config/db.js';
const Schema = mongoose.Schema;

  const userSchema = new Schema({
    nome: {
        type: Schema.Types.String,
        required: true,
      },
    email: {
      type: Schema.Types.String,
      validate: {
        validator: function (v) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
        },
      },
      required: true,
    },
    password: {
      type: Schema.Types.String,
      required: true,
      validate: {
        validator(v) {
          return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            v
          );
        },
      },
    },
    confirm_password: {
        type: Schema.Types.String,
        required: true,
        validate: {
          validator(v) {
            return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
              v
            );
          },
        },
      },
  });
  
  const User = conn.model("User", userSchema);
  
  export default User;