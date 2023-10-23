import uuid from 'react-native-uuid';

export const withUUID = <T>(record: T): T => {
  return { ...record, id: uuid.v4() as string }
}