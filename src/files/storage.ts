/* eslint-disable prettier/prettier */
import { diskStorage } from 'multer';
import * as path from 'path';

const generateId = () =>
  Array(18)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');

const normalizeFileName = (req, file, callback) => {
  const fileExtName = file.originalname.split('.').pop();

  callback(null, `${generateId()}.${fileExtName}`);
};

const destinationPath = path.resolve(__dirname, '..', '..', 'uploads');

export const fileStorage = diskStorage({
  destination: destinationPath,
  filename: normalizeFileName,
});
