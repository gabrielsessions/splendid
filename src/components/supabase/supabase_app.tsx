/*
    supabase_app.tsx
    Last Edited: 2/3 by Gabriel Sessions

    Initializes supabase services for use in the site
*/

import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://ogtszhbpbcanvhoxonah.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ndHN6aGJwYmNhbnZob3hvbmFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU0NTAyMjYsImV4cCI6MTk5MTAyNjIyNn0.JsjlXjJo6UnOe8PgeGo0EyfmQ5mBGH3vVDgBViqPzM0");

export { supabase };