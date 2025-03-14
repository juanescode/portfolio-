"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { Loader2 } from "lucide-react";
import { TypingAnimation } from "./magicui/typing-animation";

const ContactForm = () => {
  const [sucessForm, setSucessForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(values),
      });
      if (response.status === 200) {
        setSucessForm(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      {sucessForm ? (
        <TypingAnimation className="text-xl font-semibold">Form submitted successfully</TypingAnimation>
      ) : (
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="Write your message..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <InteractiveHoverButton>
            <div
              onClick={() => form.handleSubmit(onSubmit)()}
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <p>Send</p>
              )}
            </div>
          </InteractiveHoverButton>
        </form>
      )}
    </Form>
  );
};

export default ContactForm;
