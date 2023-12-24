import { Shabad } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import getShabads from "./getShabads";

const getShabadsByTitle = async (title: string): Promise<Shabad[]> => {
    const supabase = createServerComponentClient({cookies: cookies});

    if (!title) {
        const allShabads = await getShabads();
        return allShabads;
    }
    
    const { data, error } = await supabase.from('shabads').select('*').ilike('title', `%${title}%`).order('created_at', { ascending: false });
    if (error) {
        console.log(error);
    }

    return (data as any) || [];
}

export default getShabadsByTitle;
