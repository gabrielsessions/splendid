import { supabase } from "./supabase/supabase_app"
import { Auth } from '@supabase/auth-helpers-nextjs';
import { useUser } from "@supabase/auth-helpers-react";
import { useState } from "react";
import Router from "next/router";

/*
  ProfilePic.tsx
  Last Edit: 2/3 by Gabriel Sessions

  Profile Picture/Login/Logout part of the upper navbar of each page
  BUGS:
   - Avatar doesn't always show up, we can replace it with custom imgs later instead of fetching from Google
   - Supabase logout function not working for some reason...
*/


export default function ProfilePic() {
  const user = useUser();
  const [signOutClicked, setSignOut] = useState(false);
  const [showDropdown, setDropdown] = useState(false);

  async function signInWithGoogle(){
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }

  async function signOut() {
    await supabase.auth.signOut();
    Router.reload(window.location.pathname);
    //setSignOut(true);
  }

  return (
    <div>
      {user  && !signOutClicked  ?
        <div className="ml-3 relative">
          <div onClick={() => setDropdown((prev) => !prev)}>
            <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src={"https://static.vecteezy.com/system/resources/previews/012/027/958/original/doodling-freehand-outline-sketch-drawing-of-a-chocolate-bar-free-png.png"} alt={"Profile Picture"} />
            </button>
          </div>

          <div className={showDropdown ? "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" : "hidden"} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
            <p className="block px-4 py-2 text-gray-700 font-bold text-sm">Hello, {user.user_metadata.name}!</p>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a>
            <button href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-100" role="menuitem" tabIndex="-1" id="user-menu-item-0" onClick={ async () => await signOut()}>Sign Out</button>
          </div>
        </div>

        :

        <button onClick={signInWithGoogle} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md  font-medium text-sm">Login</button>

      }
    </div>

  );
}