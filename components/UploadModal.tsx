"use client"

import useUploadModal from "@/hooks/useUploadModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

import Modal from "./Modal"
import Input from "./Input";
import Button from "./Button";

const UploadModal = () => {
    const [isLoading, setIsLoading] = useState(false);

    const uploadModal = useUploadModal();

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
        // Upload Shabad to Supabase
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