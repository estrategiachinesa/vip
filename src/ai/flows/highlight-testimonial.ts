// src/ai/flows/highlight-testimonial.ts
'use server';

/**
 * @fileOverview AI agent that highlights the most impactful parts of testimonials.
 *
 * - highlightTestimonial - A function that handles the testimonial highlighting process.
 * - HighlightTestimonialInput - The input type for the highlightTestimonial function.
 * - HighlightTestimonialOutput - The return type for the highlightTestimonial function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const HighlightTestimonialInputSchema = z.object({
  testimonial: z.string().describe('The testimonial text to highlight.'),
});
export type HighlightTestimonialInput = z.infer<typeof HighlightTestimonialInputSchema>;

const HighlightTestimonialOutputSchema = z.object({
  highlightedText: z
    .string()
    .describe('The testimonial text with the most impactful parts highlighted.'),
});
export type HighlightTestimonialOutput = z.infer<typeof HighlightTestimonialOutputSchema>;

export async function highlightTestimonial(input: HighlightTestimonialInput): Promise<HighlightTestimonialOutput> {
  return highlightTestimonialFlow(input);
}

const prompt = ai.definePrompt({
  name: 'highlightTestimonialPrompt',
  input: {schema: HighlightTestimonialInputSchema},
  output: {schema: HighlightTestimonialOutputSchema},
  prompt: `You are an AI assistant designed to highlight the most impactful parts of customer testimonials.

  Given the following testimonial, identify and highlight the key phrases or sentences that best showcase the product's benefits or positive impact. Return the highlighted text.

  Testimonial: {{{testimonial}}}
  `,
});

const highlightTestimonialFlow = ai.defineFlow(
  {
    name: 'highlightTestimonialFlow',
    inputSchema: HighlightTestimonialInputSchema,
    outputSchema: HighlightTestimonialOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
