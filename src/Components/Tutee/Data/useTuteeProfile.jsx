// import { useState, useEffect } from "react";
// import { supabase } from "../../../config/supabaseClient";

// export default function useTuteeProfile(userId) {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!userId) return;

//     async function fetchProfile() {
//       const { data, error } = await supabase
//         .from("profiles") // Change this to your actual TUTEE table name if different
//         .select("*")
//         .eq("id", userId)
//         .single();

//       if (error) {
//         console.error("Tutee profile fetch failed:", error.message);
//         setProfile(null);
//       } else {
//         setProfile(data);
//       }

//       setLoading(false);
//     }

//     fetchProfile();
//   }, [userId]);

//   return { profile, loading };
// }


import { useState, useEffect } from "react";
import { supabase } from "../../../config/supabaseClient";

export default function useTuteeProfile(userId) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    async function fetchProfile() {
      const { data, error } = await supabase
        .from("tutees") // make sure this matches your actual table
        .select("*")
        .eq("student_id", userId) // make sure column matches
        .single();

      if (error) {
        console.error("Tutee profile fetch failed:", error.message);
        setProfile(null);
      } else {
        setProfile(data);
      }

      setLoading(false);
    }

    fetchProfile();
  }, [userId]);

  return { profile, loading };
}
