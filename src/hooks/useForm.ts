import { useState, FormEvent } from 'react';

interface FormValues {
  [key: string]: string;
}

interface FieldState {
  touched: boolean;
  error: string;
  valid: boolean;
}

interface UseFormProps {
  initialValues: FormValues;
  onSuccess?: () => void;
}

export const useForm = ({ initialValues, onSuccess }: UseFormProps) => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [fieldStates, setFieldStates] = useState<Record<string, FieldState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return '名前を入力してください';
        return '';
      
      case 'email':
        if (!value.trim()) return 'メールアドレスを入力してください';
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          return '有効なメールアドレスを入力してください';
        }
        return '';
      
      case 'message':
        if (!value.trim()) return 'メッセージを入力してください';
        if (value.length < 10) return 'メッセージは10文字以上で入力してください';
        return '';
      
      default:
        return '';
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    
    const error = validateField(name, value);
    setFieldStates(prev => ({
      ...prev,
      [name]: {
        touched: true,
        error,
        valid: error === '' && value.trim() !== ''
      }
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const newFieldStates: Record<string, FieldState> = {};
    const hasErrors = Object.keys(values).some(key => {
      const error = validateField(key, values[key]);
      newFieldStates[key] = { 
        touched: true, 
        error,
        valid: error === '' && values[key].trim() !== ''
      };
      return error !== '';
    });
    setFieldStates(newFieldStates);

    if (!hasErrors) {
      setIsSubmitting(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setValues(initialValues);
        setFieldStates({});
        onSuccess?.();
      } catch (error) {
        console.error('Error submitting form:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const isDisabled = isSubmitting || 
    !values.name || 
    !values.email || 
    !values.message ||
    Object.values(fieldStates).some(state => state.error !== '');

  return {
    values,
    errors: Object.fromEntries(
      Object.entries(fieldStates).map(([key, state]) => [key, state.error])
    ),
    validFields: Object.fromEntries(
      Object.entries(fieldStates).map(([key, state]) => [key, state.valid])
    ),
    isSubmitting,
    isDisabled,
    handleChange,
    handleSubmit
  };
};