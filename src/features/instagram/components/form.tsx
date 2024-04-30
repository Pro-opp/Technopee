"use client";

import React from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { getHttpErrorMessage } from "@/lib/http";

import { useVideoInfo } from "@/services/api/queries";

const formSchema = z.object({
  postUrl: z.string().url({
    message: "Provide a valid Instagram post link",
  }),
});

export function InstagramVideoForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postUrl: "",
    },
  });

  const { error, isPending, mutateAsync: getVideoInfo } = useVideoInfo();

  const httpError = getHttpErrorMessage(error);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { postUrl } = values;
    try {
      console.log("getting video info", postUrl);
      const videoInfo = await getVideoInfo({ postUrl });

      const { filename, videoUrl } = videoInfo;
      const link = document.createElement('a');
      link.href = videoUrl;
      link.download = filename || 'video.mp4'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error: any) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-accent/20 flex w-full max-w-2xl flex-col items-center rounded-lg border px-4 py-10 shadow-md sm:px-8"
      >
        <div className="h-6 w-full px-2 text-start text-red-500">
          {httpError}
        </div>
        <div className="relative mb-6 flex w-full flex-col items-center gap-4 sm:flex-row">
          <FormField
            control={form.control}
            name="postUrl"
            render={({ field }) => (
                  <Input
                    disabled={isPending}
                    type="url"
                    placeholder="Paste your Instagram link here..."
                    className="h-12 w-full sm:pr-28"
                    {...field}
                  />
            )}
          />
          <Button
            disabled={isPending}
            type="submit"
            className="Download-button md:m-2 my-2 w-full md:w-auto justify-center"
          >
            {isPending ? (
              'Converting...'
            ) : (
              'Convert'
            )}
          </Button>
        </div>
        <p className="text-muted-foreground text-center text-xs py-4">
          If the download opens a new page, right click the video and then click{" "}
          Save as video.
        </p>
      </form>
    </Form>
  );
}
