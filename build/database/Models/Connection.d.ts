import 'dotenv/config';
declare const connectToDatabase: (mongoDatabaseURI?: string) => Promise<void>;
export default connectToDatabase;
