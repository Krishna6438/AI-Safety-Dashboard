"use client"

import { useState } from "react"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"
import type { Incident } from "@/types/incident"

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  severity: z.enum(["Low", "Medium", "High"], {
    required_error: "Please select a severity level.",
  }),
})

interface IncidentFormProps {
  onSubmit: (incident: Omit<Incident, "id" | "reported_at">) => void
}

export function IncidentForm({ onSubmit }: IncidentFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      severity: undefined,
    },
  })

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true)

    // Simulate a slight delay for better UX
    setTimeout(() => {
      try {
        onSubmit(values)
        form.reset()
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to submit incident report. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsSubmitting(false)
      }
    }, 800)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter incident title"
                  {...field}
                  className="transition-all focus-visible:ring-2 focus-visible:ring-offset-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe the incident in detail"
                  className="min-h-[100px] transition-all focus-visible:ring-2 focus-visible:ring-offset-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="severity"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Severity</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Low" />
                    </FormControl>
                    <FormLabel className="font-normal text-green-700">Low</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Medium" />
                    </FormControl>
                    <FormLabel className="font-normal text-orange-700">Medium</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="High" />
                    </FormControl>
                    <FormLabel className="font-normal text-red-700">High</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full transition-all duration-200 hover:shadow-md" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Incident Report"}
        </Button>
      </form>
    </Form>
  )
}
