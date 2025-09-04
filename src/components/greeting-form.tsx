"use client";

import { useState } from 'react';
import type { FormEvent } from 'react';
import { personalizedGreeting } from '@/ai/flows/personalized-greeting';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast"

export function GreetingForm() {
  const [name, setName] = useState('');
  const [characteristic, setCharacteristic] = useState('');
  const [greeting, setGreeting] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast()


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name) return;

    setIsLoading(true);
    setGreeting('');

    try {
      const result = await personalizedGreeting({ name, characteristic });
      setGreeting(result.greeting);
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate greeting. Please try again.",
      })
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          AI Greeting Generator
        </CardTitle>
        <CardDescription>
          Create a personalized greeting using generative AI.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="e.g., Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-required="true"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="characteristic">Characteristic (Optional)</Label>
            <Input
              id="characteristic"
              placeholder="e.g., an avid reader"
              value={characteristic}
              onChange={(e) => setCharacteristic(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
          <Button type="submit" disabled={isLoading || !name} className="w-full sm:w-auto">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                Generate Greeting
              </>
            )}
          </Button>
          
          {greeting && (
            <div className="mt-2 w-full rounded-md border border-accent bg-accent/10 p-4">
              <p className="text-foreground font-medium">{greeting}</p>
            </div>
          )}
        </CardFooter>
      </form>
    </Card>
  );
}
