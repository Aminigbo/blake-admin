import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js' 

const supabaseUrl = "https://yqmlwjrkxnamjkzbxbbo.supabase.co";
const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxbWx3anJreG5hbWpremJ4YmJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzNTg4NTgsImV4cCI6MjAxNDkzNDg1OH0._dvzINSz-wbjaTNP7va5SCt62l6PWdOrDIXVFlTVpJk";
 
export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      auth: {
        detectSessionInUrl: false,
        storage: AsyncStorage,
      },
    }
  );