"use client";

import { useState, useCallback } from "react";
import type {
  validateWeight,
  validateHeight,
  validateAge,
  validatePercentage,
  validateWeightLossPercent,
  validateIntakeReductionPercent,
  validateDays,
  validateEnergyIntake,
  validateProteinIntake,
  validateRange,
} from "./validation";

type ValidationFunction = typeof validateWeight;

export interface FieldErrors {
  [key: string]: string | undefined;
}

export function useFormValidation() {
  const [errors, setErrors] = useState<FieldErrors>({});

  const validateField = useCallback(
    (fieldName: string, value: any, validator: ValidationFunction) => {
      const result = validator(value);
      if (!result.isValid) {
        setErrors((prev) => ({ ...prev, [fieldName]: result.error }));
        return false;
      } else {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[fieldName];
          return next;
        });
        return true;
      }
    },
    []
  );

  const clearError = useCallback((fieldName: string) => {
    setErrors((prev) => {
      const next = { ...prev };
      delete next[fieldName];
      return next;
    });
  }, []);

  const clearAllErrors = useCallback(() => {
    setErrors({});
  }, []);

  const hasErrors = Object.keys(errors).length > 0;

  return {
    errors,
    validateField,
    clearError,
    clearAllErrors,
    hasErrors,
  };
}
