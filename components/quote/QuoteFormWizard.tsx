"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Loader2 } from "lucide-react";
import Link from "next/link";

// Zod schema for form validation
const quoteFormSchema = z.object({
  // Step 1
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  location: z.enum(["Calgary", "Vancouver", "Toronto"]),
  // Step 2
  propertyType: z.string().min(1, "Please select a property type"),
  frontage: z.string().optional(),
  areasToLight: z.array(z.string()).min(1, "Please select at least one area"),
  otherArea: z.string().optional(),
  timeline: z.string().min(1, "Please select a timeline"),
  notes: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

const locations = [
  { value: "Calgary", label: "Calgary", subtext: "Serves Calgary & area" },
  { value: "Vancouver", label: "Vancouver", subtext: "Serves Vancouver & area" },
  { value: "Toronto", label: "Toronto", subtext: "Serves Toronto & area" },
];

const propertyTypes = [
  "Single-family home",
  "Townhouse",
  "Duplex",
  "Condo",
  "Other",
];

const areasToLightOptions = [
  "Full house wrap",
  "Front only",
  "Garage/front entry",
  "Backyard/deck",
  "Other",
];

const timelineOptions = [
  "As soon as possible",
  "Within 1–3 months",
  "Just exploring options",
];

export default function QuoteFormWizard() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isValid },
    trigger,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
    mode: "onChange",
    defaultValues: {
      areasToLight: [],
    },
  });

  const watchedLocation = watch("location");
  const watchedAreasToLight = watch("areasToLight");
  const watchedOtherArea = watch("otherArea");
  const formData = watch();

  // Check if step 1 is valid
  const isStep1Valid = React.useMemo(() => {
    return (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.location &&
      !errors.name &&
      !errors.email &&
      !errors.phone &&
      !errors.location
    );
  }, [formData.name, formData.email, formData.phone, formData.location, errors]);

  // Check if step 2 is valid
  const isStep2Valid = React.useMemo(() => {
    return (
      formData.propertyType &&
      formData.areasToLight &&
      formData.areasToLight.length > 0 &&
      formData.timeline &&
      !errors.propertyType &&
      !errors.areasToLight &&
      !errors.timeline
    );
  }, [
    formData.propertyType,
    formData.areasToLight,
    formData.timeline,
    errors,
  ]);

  const toggleArea = (area: string) => {
    const current = watchedAreasToLight || [];
    if (current.includes(area)) {
      setValue(
        "areasToLight",
        current.filter((a) => a !== area),
        { shouldValidate: true }
      );
      if (area === "Other") {
        setValue("otherArea", "");
      }
    } else {
      setValue("areasToLight", [...current, area], { shouldValidate: true });
    }
  };

  const nextStep = async () => {
    if (currentStep === 1) {
      const isValid = await trigger(["name", "email", "phone", "location"]);
      if (isValid) {
        setCurrentStep(2);
      }
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            Thank You!
          </h2>
          <p className="text-base md:text-lg text-neutral-600 mb-8 leading-relaxed">
            We&apos;ve received your request for {formData.location}. Our {formData.location}{" "}
            team will reach out shortly using the contact details you provided.
          </p>
          <Button asChild size="lg">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-md md:max-w-2xl mx-auto px-4">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-center gap-4">
          {/* Step 1 */}
          <div className="flex items-center gap-2">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold text-sm transition-all ${
                currentStep >= 1
                  ? "bg-primary text-white"
                  : "bg-white border-2 border-neutral-300 text-neutral-400"
              }`}
              aria-current={currentStep === 1 ? "step" : undefined}
            >
              {currentStep > 1 ? <CheckCircle className="h-5 w-5" /> : "1"}
            </div>
            <span
              className={`text-sm font-medium hidden sm:block ${
                currentStep >= 1 ? "text-neutral-900" : "text-neutral-500"
              }`}
            >
              Contact & Location
            </span>
          </div>

          {/* Connector Line */}
          <div
            className={`flex-1 h-0.5 max-w-16 ${
              currentStep > 1 ? "bg-primary" : "bg-neutral-200"
            }`}
          />

          {/* Step 2 */}
          <div className="flex items-center gap-2">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold text-sm transition-all ${
                currentStep >= 2
                  ? "bg-primary text-white"
                  : "bg-white border-2 border-neutral-300 text-neutral-400"
              }`}
              aria-current={currentStep === 2 ? "step" : undefined}
            >
              2
            </div>
            <span
              className={`text-sm font-medium hidden sm:block ${
                currentStep >= 2 ? "text-neutral-900" : "text-neutral-500"
              }`}
            >
              Property Details
            </span>
          </div>
        </div>
      </div>

      {/* Form Card */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white rounded-2xl shadow-xl border border-neutral-200 overflow-hidden">
          {/* Header */}
          <div className="px-4 md:px-8 pt-6 md:pt-8 pb-4 md:pb-6 border-b border-neutral-200">
            <h2 className="text-xl md:text-2xl font-bold text-neutral-900 mb-2">
              Step {currentStep} of 2:{" "}
              {currentStep === 1 ? "Contact & Location" : "Property Details"}
            </h2>
            <p className="text-sm md:text-base text-neutral-600">
              {currentStep === 1
                ? "We'll use this to send your personalized LED quote."
                : "A few quick details help us give you an accurate quote."}
            </p>
          </div>

          {/* Form Content */}
          <div className="px-4 md:px-8 py-4 md:py-8">
            <AnimatePresence mode="wait">
              {/* Step 1: Contact & Location */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-neutral-900 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-lg border text-base transition-colors ${
                        errors.name
                          ? "border-red-500 focus:ring-2 focus:ring-red-500"
                          : "border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary"
                      }`}
                      placeholder="John Smith"
                      autoCapitalize="words"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-neutral-900 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={`w-full px-4 py-3 rounded-lg border text-base transition-colors ${
                        errors.email
                          ? "border-red-500 focus:ring-2 focus:ring-red-500"
                          : "border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary"
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-neutral-900 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      {...register("phone")}
                      className={`w-full px-4 py-3 rounded-lg border text-base transition-colors ${
                        errors.phone
                          ? "border-red-500 focus:ring-2 focus:ring-red-500"
                          : "border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary"
                      }`}
                      placeholder="(587) 555-1234"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-3">
                      Location *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {locations.map((loc) => (
                        <button
                          key={loc.value}
                          type="button"
                          onClick={() => {
                            setValue("location", loc.value as any, {
                              shouldValidate: true,
                            });
                          }}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            watchedLocation === loc.value
                              ? "border-primary bg-primary/5 shadow-md"
                              : "border-neutral-200 hover:border-neutral-300"
                          }`}
                        >
                          <div className="font-semibold text-neutral-900 mb-1">
                            {loc.label}
                          </div>
                          <div className="text-xs text-neutral-500">
                            {loc.subtext}
                          </div>
                        </button>
                      ))}
                    </div>
                    {errors.location && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.location.message}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Property & Lighting Details */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Section Heading */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                      Tell us about your property
                    </h3>
                    <p className="text-sm text-neutral-600">
                      A few quick details help us give you an accurate quote.
                    </p>
                  </div>

                  {/* Property Type */}
                  <div>
                    <label
                      htmlFor="propertyType"
                      className="block text-sm font-medium text-neutral-900 mb-2"
                    >
                      Property Type *
                    </label>
                    <select
                      id="propertyType"
                      {...register("propertyType")}
                      className={`w-full px-4 py-3 rounded-lg border text-base transition-colors ${
                        errors.propertyType
                          ? "border-red-500 focus:ring-2 focus:ring-red-500"
                          : "border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary"
                      }`}
                    >
                      <option value="">Select property type</option>
                      {propertyTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.propertyType && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.propertyType.message}
                      </p>
                    )}
                  </div>

                  {/* Frontage/Size */}
                  <div>
                    <label
                      htmlFor="frontage"
                      className="block text-sm font-medium text-neutral-900 mb-2"
                    >
                      Approximate Frontage / Size (Optional)
                    </label>
                    <input
                      id="frontage"
                      type="text"
                      {...register("frontage")}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-base focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="e.g., 40 ft front width"
                    />
                  </div>

                  {/* Areas to Light */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-900 mb-3">
                      Areas to Light *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {areasToLightOptions.map((area) => (
                        <button
                          key={area}
                          type="button"
                          onClick={() => toggleArea(area)}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            watchedAreasToLight?.includes(area)
                              ? "border-primary bg-primary/5"
                              : "border-neutral-200 hover:border-neutral-300"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-neutral-900">
                              {area}
                            </span>
                            {watchedAreasToLight?.includes(area) && (
                              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                    {watchedAreasToLight?.includes("Other") && (
                      <div className="mt-3">
                        <input
                          type="text"
                          {...register("otherArea")}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-base focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="Please specify..."
                        />
                      </div>
                    )}
                    {errors.areasToLight && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.areasToLight.message}
                      </p>
                    )}
                  </div>

                  {/* Timeline */}
                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-medium text-neutral-900 mb-2"
                    >
                      Preferred Timeline *
                    </label>
                    <select
                      id="timeline"
                      {...register("timeline")}
                      className={`w-full px-4 py-3 rounded-lg border text-base transition-colors ${
                        errors.timeline
                          ? "border-red-500 focus:ring-2 focus:ring-red-500"
                          : "border-neutral-300 focus:ring-2 focus:ring-primary focus:border-primary"
                      }`}
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.timeline && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.timeline.message}
                      </p>
                    )}
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label
                      htmlFor="notes"
                      className="block text-sm font-medium text-neutral-900 mb-2"
                    >
                      Additional Details / Notes (Optional)
                    </label>
                    <textarea
                      id="notes"
                      {...register("notes")}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-base focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                      placeholder="Anything else we should know? (e.g., unique roofline, HOA rules, budget range…)"
                    />
                  </div>

                  {/* Inline Summary */}
                  <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
                    <p className="text-sm text-neutral-700">
                      <strong>Summary:</strong> You&apos;re requesting a quote for{" "}
                      <strong>{formData.location}</strong> with lighting on{" "}
                      <strong>
                        {watchedAreasToLight?.length === 1
                          ? watchedAreasToLight[0]
                          : `${watchedAreasToLight?.length} areas`}
                      </strong>
                      . We&apos;ll contact you at{" "}
                      <strong>{formData.email || formData.phone}</strong>.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center gap-4 mt-8 pt-6 border-t border-neutral-200">
              {currentStep === 1 ? (
                <Link
                  href="/"
                  className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  Cancel
                </Link>
              ) : (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="flex items-center gap-2 min-h-[48px]"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
              )}

              {currentStep === 1 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStep1Valid}
                  className="min-h-[48px]"
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={!isStep2Valid || isSubmitting}
                  className="min-h-[48px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Quote Request"
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

