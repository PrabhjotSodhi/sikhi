"use client"

import useUploadModal from "@/hooks/useUploadModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

import Modal from "./Modal"
import Input from "./Input";

const UploadModal = () => {
    const [Loading, isLoading] = useState();
    const uploadModal = useUploadModal();

    const { register, handleSubmit, reset } = useForm<FieldValues>({
        defaultValues: {
            author: "",
            title: "",
            shabad: null,
            image: null,
        }
    })

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
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input id="title" disabled={isLoading} {...register('title', { required: true })} placeholder="Song Title" />
            </form>
        </Modal>
    )
}

export default  UploadModal