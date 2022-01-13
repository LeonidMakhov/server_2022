import mongoose from 'mongoose';
const { Schema } = mongoose; // const { Schema } = mongoose.Schema;

const userSchema = new Schema({
  id: String,
  email: {
    type: String,
    required: true,
    index: true,
    unique: true, //уникальный пользователь (нет 2х с одним и тем че имейлом)
  },
  password: {
    type: String,
    require: true,
    select: false, // означает, что мы исключаем его из показа
  },
  name: String,
});

userSchema.index({ email: 1 }, { unique: true }); //indexируем дополнительные поля тем, что имейл должен быть уникальным

export default mongoose.model('User', userSchema); //const User = mongoose.model('User', userSchema) и потом сделать экспорт;
