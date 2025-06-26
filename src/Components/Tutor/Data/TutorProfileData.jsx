import { useState, useEffect } from "react";
import { supabase } from "../../../config/supabaseClient";

export default function useTutorProfile(userId) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    async function fetchProfile() {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (error) {
        console.error("Profile fetch failed:", error.message);
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
