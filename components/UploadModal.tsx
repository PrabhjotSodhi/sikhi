"use client"

import uniqid from "uniqid";
import useUploadModal from "@/hooks/useUploadModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

import Modal from "./Modal"
import Input from "./Input";
import Button from "./Button";

const UploadModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const uploadModal = useUploadModal();
    const { user } = useUser();
    const supabaseClient = useSupabaseClient();
    const router = useRouter();

    const { register, handleSubmit, reset } = useForm<FieldValues>({
        defaultValues: {
            author: "",
            title: "",
            shabad: null,
            image: null,
        }
});

const onChange = (open: boolean) => {
    if (!open) {
        reset();
        uploadModal.onClose();
    }
}

const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
        setIsLoading(true);
        
        const imageFile = values.image?.[0];
        const shabadFile = values.shabad?.[0];

        if (!imageFile || !shabadFile || !user) {
            toast.error('Missing Fields');
            return;
        }

        const uniqueID = uniqid();

        // Upload Shabad
        const {data: shabadData, error: shabadError} = await supabaseClient.storage.from('shabads').upload(`shabad-${values.title}-${uniqueID}`, shabadFile, {cacheControl: '3600', upsert: false});
        if (shabadError) {
            setIsLoading(false);
            return toast.error("Failed Shabad Uplaod");
        }
        // Upload Image
        const {data: imageData, error: imageError} = await supabaseClient.storage.from('images').upload(`image-${values.title}-${uniqueID}`, imageFile, {cacheControl: '3600', upsert: false});
        if (imageError) {
            setIsLoading(false);
            return toast.error('Failed Image Upload');
        }

        const {error: supabaseError} = await supabaseClient.from('shabads').insert({user_id: user.id, title: values.title, author: values.author, image_path: imageData.path, shabad_path: shabadData.path});
        if (supabaseError) {
            setIsLoading(false);
            return toast.error(supabaseError.message);
        }

        router.refresh();
        setIsLoading(false);
        toast.success('Shabad Added!');
        reset();
        uploadModal.onClose();
    } catch (error) {
        toast.error("Something went wrong.")
    } finally {
        setIsLoading(false);
    }
}

return (
    <Modal title="Add a Shabad" description="Upload an mp3 file" isOpen={uploadModal.isOpen} onChange={onChange}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
            <Input id="title" disabled={isLoading} {...register('title', { required: true })} placeholder="Shabad Name" />
            <Input id="author" disabled={isLoading} {...register('author', { required: true })} placeholder="Author Name" />
            <div>
                <div className="pb-1">
                    Select a Shabad file
                </div>
                <Input id="shabad" type="file" disabled={isLoading} accept=".mp3" {...register('shabad', { required: true })} />
            </div>
            <div>
                <div className="pb-1">
                    Select a Thumbnail Image
                </div>
                <Input id="image" type="file" disabled={isLoading} accept="image/*" {...register('image', { required: true })} />
            </div>
            <Button disabled={isLoading} type="submit">Import Shabad</Button>
        </form>
    </Modal>
)
}

export default  UploadModal