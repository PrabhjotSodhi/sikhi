import { Shabad } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadImage = (shabad: Shabad) => {
    const supabaseClient = useSupabaseClient();

    if (!shabad) {
        return null;
    }

    const { data: imageData } = supabaseClient.storage.from('images').getPublicUrl(shabad.image_path);
    return imageData.publicUrl;
};

export default useLoadImage;